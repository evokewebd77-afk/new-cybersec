import { usePageMeta } from './ServiceShared'

export default function PrivacyPage() {
  usePageMeta('Privacy Policy — ITC India CyberSec', 'Privacy policy for ITC India Information Security Division website and services.')
  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: 820 }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p>ITC India Pvt. Ltd. ("we", "us") respects your privacy. This policy describes how we collect, use and protect personal information submitted through this website.</p>
        <h3>Information we collect</h3>
        <p>Names, email addresses, phone numbers and organization details submitted via our contact and inquiry forms, plus newsletter opt-in preferences.</p>
        <h3>How we use it</h3>
        <p>To respond to inquiries, deliver requested services, and send security and compliance updates only where you have opted in.</p>
        <h3>Data protection</h3>
        <p>We handle personal data in accordance with India's Digital Personal Data Protection Act (DPDP) and applicable international standards. Data is stored securely and not sold to third parties.</p>
        <h3>Your rights</h3>
        <p>You may request access, correction or deletion of your personal data by emailing cybersec@itcindia.org.</p>
        <h3>Contact</h3>
        <p>ITC India Pvt. Ltd., Mohali, Punjab, India. Email: cybersec@itcindia.org. Phone: +91 93164 73033.</p>
      </div>
    </section>
  )
}
