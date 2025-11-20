import { useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold mb-8" data-testid="heading-privacy-policy">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">
            <strong>Last Updated:</strong> 10 October 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Preliminary Provisions and Interpretative Framework</h2>
            <p>
              This Data Protection and Privacy Policy (hereinafter referred to as "the Policy") constitutes a legally binding instrument governing the collection, processing, storage, transmission, and disposal of Personal Information and Sensitive Personal Data or Information (collectively "Data" or "Information") pertaining to Data Principals who access, browse, or utilize the digital platforms, applications, services, and associated infrastructure (collectively "the Platform") operated, maintained, or controlled by NewLineLabs (hereinafter referred to as "the Company," "we," "us," or "our"), a technology enterprise duly established and operating in accordance with the laws prevalent in the Republic of India.
            </p>
            <p>
              The Policy has been formulated in strict adherence to and in consonance with the provisions enshrined in the Information Technology Act, 2000 (21 of 2000) as amended from time to time, read in conjunction with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and in anticipation of the Digital Personal Data Protection Act, 2023, and all subordinate legislation, rules, regulations, and judicial pronouncements issued thereunder (collectively "Applicable Data Protection Laws").
            </p>
            <p>
              By virtue of accessing, browsing, or utilizing the Platform in any manner whatsoever, you (hereinafter referred to as "the User," "you," "your," or "Data Principal") hereby irrevocably and unconditionally acknowledge, accept, and consent to be bound by the terms, conditions, stipulations, and covenants set forth in this Policy, which shall be deemed to have been read, understood, and accepted in its entirety by the User upon first access to the Platform, and such acceptance shall constitute a binding contractual obligation enforceable in accordance with the laws of India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Typology and Categorization of Data Procured and Processed</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personally Identifiable Information and Non-Sensitive Personal Data</h3>
            <p>Pursuant to the provisions of Rule 3 of the SPDI Rules, 2011, and in furtherance of our legitimate business interests and contractual necessities, the Company may, from time to time and at its sole discretion, collect, aggregate, process, store, and transmit various categories of Personal Information, including but not limited to the following non-exhaustive enumeration of data points, attributes, and identifiers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full legal name, aliases, pseudonyms, or any other nomenclature by which the Data Principal is identified or identifiable;</li>
              <li>Contact particulars including but not limited to electronic mail addresses, telephonic numbers (mobile, landline, or otherwise), residential or commercial addresses, and any other communication coordinates;</li>
              <li>Organizational affiliations, corporate designations, professional credentials, and institutional associations;</li>
              <li>Communicative preferences, behavioral patterns, engagement metrics, and interaction modalities;</li>
              <li>Any and all supplementary Information voluntarily furnished, disclosed, or transmitted by the Data Principal through correspondence, inquiries, subscriptions, registrations, or any other form of interaction with the Platform or the Company's representatives.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Sensitive Personal Data or Information (SPDI) - Exclusionary Provisions</h3>
            <p>Notwithstanding the aforesaid provisions and in strict compliance with Rule 3 read with Rule 5 of the SPDI Rules, 2011, the Company hereby categorically affirms, represents, and warrants that it does not, under any circumstances whatsoever, collect, process, store, or transmit any Sensitive Personal Data or Information as defined under the Applicable Data Protection Laws, specifically including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Passwords, authentication credentials, or security tokens (save and except encrypted authentication mechanisms processed through secure cryptographic protocols);</li>
              <li>Financial Information including but not limited to bank account particulars, credit card numbers, debit card numbers, or any other payment instrument details;</li>
              <li>Physical, physiological, or mental health conditions, medical records, history, or biometric information;</li>
              <li>Sexual orientation or any information pertaining to the same;</li>
              <li>Biometric attributes, characteristics, or information of any nature whatsoever.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Technical, Analytical, and Automated Data Collection Mechanisms</h3>
            <p>In accordance with industry-standard practices and for the purposes of platform optimization, security enhancement, and user experience personalization, the Company may automatically collect, through the deployment of various technological instrumentalities including but not limited to cookies, web beacons, log files, and similar tracking technologies, the following categories of technical and analytical data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internet Protocol (IP) addresses, Media Access Control (MAC) addresses, device identifiers, and associated metadata pertaining to network connectivity and geographical localization;</li>
              <li>Browser type, version, configuration settings, and associated technical specifications;</li>
              <li>Uniform Resource Locators (URLs) of pages accessed, navigation pathways, temporal engagement metrics, and session duration data;</li>
              <li>Referring and exit pages, source attribution data, and traffic origination particulars;</li>
              <li>Operating system specifications, device type classifications, and hardware/software configurations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send newsletters and marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraud or security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you voluntarily provide information through forms or newsletter subscriptions</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and communicate with clients</li>
              <li><strong>Legal Obligation:</strong> To comply with Indian laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in our operations (email services, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="mt-3">
              All third-party service providers are contractually obligated to maintain confidentiality and security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
            <p>
              We implement reasonable security practices and procedures as required under Rule 8 of the SPDI Rules, 2011, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Industry-standard encryption for data transmission (SSL/TLS)</li>
              <li>Secure storage systems with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
            <p>Under Indian law and preparing for the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">8.1 Current Rights (IT Act 2000)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing (may limit service availability)</li>
              <li><strong>Review:</strong> Review the information provided before it is processed</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">8.2 Additional Rights (Under DPDP Act 2023)</h3>
            <p>When the DPDP Act comes into force, you will have the following additional rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data when no longer necessary for the stated purpose</li>
              <li><strong>Right to Grievance Redressal:</strong> Lodge complaints with our Data Protection Officer and escalate to the Data Protection Board if unresolved</li>
              <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
              <li><strong>Right to Access Summary:</strong> Obtain a summary of personal data being processed and activities undertaken</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">8.3 How to Exercise Your Rights</h3>
            <p>To exercise any of these rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email our Grievance Officer at privacy@newlinelabs.com</li>
              <li>Clearly state which right you wish to exercise</li>
              <li>Provide proof of identity for verification</li>
              <li>We will respond within 24 hours and resolve within 30 days</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">8.4 Consent Withdrawal Process</h3>
            <p>You may withdraw your consent at any time by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clicking the "Unsubscribe" link in our emails</li>
              <li>Contacting us at privacy@newlinelabs.com with your withdrawal request</li>
              <li>Accessing your account settings (if applicable)</li>
            </ul>
            <p className="mt-2">
              Please note that withdrawal of consent may affect our ability to provide certain services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance user experience, analyze website traffic, and deliver personalized content. You can control cookies through your browser settings.
            </p>
            <p className="mt-2">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies (required for website functionality)</li>
              <li>Analytics cookies (to understand user behavior)</li>
              <li>Preference cookies (to remember your settings)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will promptly delete the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside India. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000, and rules made thereunder, we have appointed a Grievance Officer to address your privacy concerns:
            </p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>Name:</strong> Data Protection Officer</p>
              <p><strong>Email:</strong> privacy@newlinelabs.com</p>
              <p><strong>Response Time:</strong> We will acknowledge your complaint within 24 hours and resolve it within 30 days</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>NewLineLabs</strong></p>
              <p>Email: contact@newlinelabs.com</p>
              <p>Website: www.newlinelabs.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Compliance with Indian Laws</h2>
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section className="border-t border-border pt-6 mt-8">
            <p className="text-sm">
              <strong>Acknowledgment:</strong> By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
