import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSubmissionSchema, insertNewsletterSignupSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { sendWelcomeEmail, sendAdminNotification } from "./newsletter-email";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test route to verify routes are working
  app.get("/api/test", (req, res) => {
    res.json({ message: "API routes are working!" });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res, next) => {
    try {
      console.log("Contact form request received:", req.body);
      
      // Validate request body
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      const contactData = validationResult.data;

      // Send email
      console.log("Sending email...");
      await sendContactEmail(contactData);
      console.log("Email sent successfully");

      return res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        error: "Failed to send message", 
        details: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res, next) => {
    try {
      console.log("Newsletter subscription request received:", req.body);
      
      // Validate request body
      const validationResult = insertNewsletterSignupSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Invalid email address", 
          details: validationError.message 
        });
      }

      const { email } = validationResult.data;

      // Send welcome email to subscriber
      console.log("Sending welcome email to subscriber...");
      await sendWelcomeEmail(email);
      console.log("Welcome email sent successfully");

      // Send notification to admin
      console.log("Sending admin notification...");
      await sendAdminNotification(email);
      console.log("Admin notification sent successfully");

      return res.status(200).json({ 
        success: true, 
        message: "Thank you for subscribing! Check your email for a welcome message." 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ 
        error: "Failed to subscribe", 
        details: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
