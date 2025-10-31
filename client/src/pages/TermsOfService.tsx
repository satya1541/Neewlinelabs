import { useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-8"
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-8" data-testid="heading-terms-of-service">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">
            <strong>Last Updated:</strong> 10 October 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance, Acknowledgment, and Binding Effect of Terms</h2>
            <p>
              These Terms of Service (hereinafter referred to as "the Terms," "this Agreement," or "the TOS") constitute a legally enforceable contract between NewLineLabs (hereinafter referred to as "the Company," "we," "us," or "our"), a technology services provider duly incorporated and operating under the laws of the Republic of India, and any person, entity, or legal personality (hereinafter referred to as "the User," "you," "your," or "the Client") who accesses, browses, utilizes, or otherwise engages with any aspect of the digital infrastructure, platforms, applications, services, content, features, or functionalities (collectively "the Services") provided, operated, maintained, or controlled by the Company.
            </p>
            <p className="mt-2">
              By virtue of accessing, clicking, browsing, utilizing, or otherwise engaging with the Services in any manner whatsoever, whether directly or indirectly, you hereby irrevocably, unconditionally, and without reservation acknowledge, accept, agree, and covenant to be legally bound by all terms, conditions, provisions, stipulations, obligations, representations, warranties, and covenants contained herein, and such acceptance shall be deemed conclusive, final, and binding upon you from the moment of first access to the Services, mutatis mutandis, and shall continue to bind you throughout the duration of your engagement with the Services and thereafter to the extent provided herein.
            </p>
            <p className="mt-2">
              This Agreement shall be governed by, construed in accordance with, and subject to the substantive and procedural laws prevalent in the Republic of India, including but not limited to the Information Technology Act, 2000 (21 of 2000) as amended from time to time, the Indian Contract Act, 1872 (9 of 1872), and all subordinate legislation, rules, regulations, notifications, and judicial pronouncements issued or pronounced thereunder, and shall be subject to the exclusive jurisdiction of the competent courts and tribunals situated within the territorial limits of India as more particularly described hereinafter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Definitions and Interpretative Provisions</h2>
            <p className="mb-3">For the purposes of this Agreement and unless the context otherwise requires, the following terms, expressions, and phrases shall bear the meanings ascribed to them hereunder, and such definitions shall be deemed to apply mutatis mutandis throughout this Agreement:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Services"</strong> shall mean and include, without limitation, all products, solutions, platforms, applications, software (whether proprietary or third-party), content, features, functionalities, tools, utilities, interfaces, application programming interfaces (APIs), documentation, materials, and any and all associated or ancillary services provided, offered, rendered, or made available by the Company through any medium, channel, or modality whatsoever;</li>
              <li><strong>"User," "You," "Your," or "Client"</strong> shall mean and refer to any natural person, legal entity, corporation, partnership, association, governmental authority, or any other legal personality who accesses, utilizes, engages with, or otherwise interacts with the Services, whether as a registered user, guest, visitor, or in any other capacity whatsoever;</li>
              <li><strong>"Content"</strong> shall mean and encompass all forms of information, data, materials, works, creations, and expressions including but not limited to textual content, graphical elements, images, photographs, videos, audio recordings, software code, algorithms, databases, compilations, and any other materials of whatsoever nature that are available through, displayed on, transmitted via, or otherwise accessible through the Services;</li>
              <li><strong>"Agreement," "Terms," or "TOS"</strong> shall mean and refer to these Terms of Service in their entirety, as may be amended, modified, supplemented, or replaced from time to time at the sole discretion of the Company, together with any and all policies, guidelines, addenda, schedules, annexures, and supplementary agreements incorporated herein by reference or otherwise made applicable;</li>
              <li><strong>"Intellectual Property Rights"</strong> shall mean and include all patents, copyrights, trademarks, service marks, trade names, trade dress, database rights, design rights, moral rights, know-how, trade secrets, and any and all other proprietary or intellectual property rights of whatsoever nature, whether registered or unregistered, and all applications, renewals, extensions, continuations, divisions, or reissues thereof;</li>
              <li><strong>"Force Majeure Event"</strong> shall mean any event, circumstance, or occurrence beyond the reasonable control of the Company including but not limited to acts of God, natural disasters, epidemics, pandemics, wars, terrorism, civil unrest, governmental actions, strikes, lockouts, labor disputes, or failures of telecommunications, internet, or electronic systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Services Description</h2>
            <p>
              NewLineLabs provides technology solutions including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web development services</li>
              <li>Cloud services and solutions</li>
              <li>IoT (Internet of Things) solutions</li>
              <li>Embedded systems development</li>
              <li>Mobile application development</li>
              <li>Digital marketing services</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Obligations and Conduct</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Permitted Use</h3>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.2 Prohibited Activities</h3>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Post, transmit, or distribute any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable (as per Section 67 of IT Act, 2000)</li>
              <li>Upload or transmit viruses, malware, or any malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Collect or harvest personal information of other users</li>
              <li>Use automated systems (bots, scrapers) without our written permission</li>
              <li>Engage in any activity that could harm minors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Our Content</h3>
            <p>
              All content, trademarks, logos, and intellectual property on our website are owned by or licensed to NewLineLabs. You may not copy, reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.2 User Content</h3>
            <p>
              If you submit, post, or transmit any content through our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content for the purpose of providing our services.
            </p>
            <p className="mt-2">
              You represent and warrant that you own or have the necessary rights to any content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Account Registration and Security</h2>
            <p>
              If you create an account with us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate, current, and complete information</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Payment and Billing</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Fees</h3>
            <p>
              Certain services may require payment. All fees are stated in Indian Rupees (INR) unless otherwise specified. Prices are subject to change with prior notice.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due as specified in the service agreement or invoice</li>
              <li>We accept payment through authorized payment gateways</li>
              <li>Taxes (GST, etc.) will be charged as applicable under Indian law</li>
              <li>Late payments may result in service suspension</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.3 Refunds</h3>
            <p>
              Refund policies vary by service. Please refer to the specific service agreement or contact us for details. Refunds, if applicable, will be processed within 7-10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy and Data Protection</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy, which complies with the Information Technology Act, 2000, and the SPDI Rules, 2011. Please review our Privacy Policy to understand how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Content Monitoring and Moderation</h2>
            <p>
              In accordance with Section 79 of the IT Act, 2000:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We reserve the right to monitor user activity and content on our platform</li>
              <li>We may remove or disable access to content that violates these Terms or applicable law</li>
              <li>We employ both automated and manual moderation processes</li>
              <li>We will cooperate with law enforcement and government authorities as required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Service "As Is"</h3>
            <p>
              Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy or reliability of content</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">10.2 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, NewLineLabs shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or security breaches beyond our control</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount paid by you for the services in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless NewLineLabs, its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or third-party rights</li>
              <li>Your use of our services</li>
              <li>Any content you submit or transmit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Third-Party Services and Links</h2>
            <p>
              Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content or privacy practices of third-party sites</li>
              <li>The performance or availability of third-party services</li>
              <li>Any transactions between you and third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Termination</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">13.1 By You</h3>
            <p>
              You may stop using our services at any time by contacting us to close your account.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.2 By Us</h3>
            <p>
              We may suspend or terminate your access to our services immediately, without notice, if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You violate these Terms</li>
              <li>We are required to do so by law</li>
              <li>Your conduct poses a security or legal risk</li>
              <li>You engage in fraudulent or illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.3 Effect of Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your right to use the services will immediately cease</li>
              <li>You remain liable for any outstanding payments</li>
              <li>Sections regarding liability, indemnification, and dispute resolution will survive</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Natural disasters, pandemics, or acts of God</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government actions or regulatory changes</li>
              <li>Internet or telecommunications failures</li>
              <li>Power outages or infrastructure failures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">15.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">15.2 Jurisdiction</h3>
            <p>
              Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of India.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">15.3 Dispute Resolution</h3>
            <p>
              Before initiating legal proceedings, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact our Grievance Officer to resolve the dispute amicably</li>
              <li>Attempt good-faith negotiations for 30 days</li>
              <li>Consider alternative dispute resolution (mediation/arbitration) if negotiations fail</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms.
            </p>
            <p className="mt-2">
              We encourage you to review these Terms periodically. Material changes will be notified via email or prominent notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable by a court of law, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">18. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement between you and NewLineLabs regarding the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">19. Grievance Redressal</h2>
            <p>
              In accordance with the Information Technology Act, 2000, we have appointed a Grievance Officer to address complaints:
            </p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>Name:</strong> Grievance Officer</p>
              <p><strong>Email:</strong> grievance@newlinelabs.com</p>
              <p><strong>Response Time:</strong> Complaints will be acknowledged within 24 hours and resolved within 30 days</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">20. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>NewLineLabs</strong></p>
              <p>Email: legal@newlinelabs.com</p>
              <p>Website: https://newlinelabs.tech</p>
            </div>
          </section>

          <section className="border-t border-border pt-6 mt-8">
            <p className="text-sm">
              <strong>Acknowledgment:</strong> By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
