import { usePageMeta } from './ServiceShared'

export default function PrivacyPage() {
  usePageMeta('Privacy Policy — ITC India CyberSec', 'Privacy policy for ITC India Information Security Division website and services.')

  return (
    <section className="section-padding svc-bg-white privacy-page" style={{ paddingTop: 140 }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '40px 36px', boxShadow: '0 12px 32px rgba(15,23,42,.08)', border: '1px solid rgba(15,23,42,.06)' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p>ITC India Pvt. Ltd. ("we", "us", "our") operates the ITC India CyberSec website and provides cybersecurity testing, audit, and compliance services. This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit our website, submit an inquiry, or engage our services.</p>
        <p>By using our website or services, you agree to the practices described in this policy. If you do not agree, please do not use our website or services.</p>

        <h3>1. Information we collect</h3>
        <p>We may collect the following categories of personal information:</p>
        <ul>
          <li><strong>Contact and inquiry details:</strong> full name, work email address, phone number, company or organization name, inquiry type, and project scope or message submitted through our contact and inquiry forms.</li>
          <li><strong>Communication preferences:</strong> newsletter or security and compliance update opt-in selections.</li>
          <li><strong>Technical and usage data:</strong> IP address, browser type, device information, referring URL, pages visited, and interaction data collected automatically when you browse our website.</li>
          <li><strong>Service engagement data:</strong> information provided during scoping, assessments, audits, and compliance engagements, including systems, infrastructure, and control documentation shared under applicable agreements.</li>
        </ul>

        <h3>2. How we use your information</h3>
        <p>We use personal information for the following purposes:</p>
        <ul>
          <li>To respond to inquiries and provide requested cybersecurity, VAPT, audit, and compliance services.</li>
          <li>To scope, perform, and deliver assessments, reports, and certification readiness support.</li>
          <li>To communicate project updates, service information, and support.</li>
          <li>To send security and compliance updates where you have opted in.</li>
          <li>To maintain, secure, and improve our website and services.</li>
          <li>To comply with legal, regulatory, contractual, and professional obligations.</li>
          <li>To protect against fraud, abuse, and security threats.</li>
        </ul>

        <h3>3. Legal basis for processing</h3>
        <p>Where applicable, we process personal information based on your consent, our legitimate interests in operating and improving our business, the performance of a contract or pre-contractual steps, and compliance with legal obligations. Where required by law, we obtain consent before processing.</p>

        <h3>4. Cookies and similar technologies</h3>
        <p>Our website may use cookies and similar technologies to ensure basic functionality, remember preferences, and understand website usage. You can control cookies through your browser settings. Disabling cookies may affect certain website features.</p>

        <h3>5. Sharing and disclosure</h3>
        <p>We do not sell personal information. We may share personal information with:</p>
        <ul>
          <li>Authorized employees and contractors who need access to perform their duties.</li>
          <li>Service providers and infrastructure partners that support hosting, email, analytics, or operations, under appropriate confidentiality obligations.</li>
          <li>Professional advisors, auditors, or legal authorities where required by law or to protect our rights.</li>
          <li>Third parties with your consent or as necessary to deliver requested services.</li>
        </ul>
        <p>All service providers are required to handle personal information securely and only for authorized purposes.</p>

        <h3>6. Data retention</h3>
        <p>We retain personal information for as long as necessary to fulfill the purposes described in this policy, including legal, regulatory, accounting, and reporting requirements. Inquiry and contact data may be retained for a reasonable period to manage business relationships and follow up. Service engagement data is retained in accordance with applicable contracts and legal obligations.</p>

        <h3>7. Data security</h3>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, disclosure, alteration, and destruction. These include access controls, secure transmission, monitoring, and confidential handling practices. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

        <h3>8. International data transfers</h3>
        <p>Our services may involve processing personal information in India and, where applicable, in other jurisdictions. Where required, we take appropriate measures to ensure that personal information receives an adequate level of protection during such transfers.</p>

        <h3>9. Your rights</h3>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction or updating of inaccurate or incomplete information.</li>
          <li>Request deletion of personal information where no longer necessary or where you withdraw consent, subject to legal retention requirements.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
          <li>Request information about how your personal data is processed.</li>
        </ul>
        <p>To exercise these rights, please contact us at cybersec@itcindia.org. We will respond within a reasonable time and in accordance with applicable law.</p>

        <h3>10. Children's privacy</h3>
        <p>Our website and services are intended for business and professional use. We do not knowingly collect personal information from children. If you believe a child has provided personal information to us, please contact us so we can take appropriate action.</p>

        <h3>11. Third-party links</h3>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing personal information.</p>

        <h3>12. Changes to this policy</h3>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. The updated policy will be posted on this page with a revised effective date. Continued use of our website after changes are posted constitutes acceptance of the updated policy.</p>

        <h3>13. Contact us</h3>
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:</p>
        <p>
          ITC India Pvt. Ltd.<br />
          Mohali, Punjab, India<br />
          Email: cybersec@itcindia.org<br />
          Phone: +91 93164 73033
        </p>
        <p><em>Last updated: November 2026</em></p>
      </div>
      </div>
    </section>
  )
}
