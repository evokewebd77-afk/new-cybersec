import { usePageMeta } from './ServiceShared'

export default function TermsPage() {
  usePageMeta('Terms of Service — ITC India CyberSec', 'Terms and conditions for using the ITC India CyberSec website.')
  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: 820 }}>
        <h1 className="section-title">Terms of Service</h1>
        <p>By accessing this website you agree to these terms. All content is provided for informational purposes about ITC India Information Security Division services.</p>
        <h3>Services</h3>
        <p>Assessments and readiness support do not guarantee a particular audit outcome or certification. Formal examinations must be performed by independent qualified bodies.</p>
        <h3>Intellectual property</h3>
        <p>All trademarks, logos and content belong to ITC India Pvt. Ltd. or their respective owners.</p>
        <h3>Limitation of liability</h3>
        <p>We are not liable for any indirect or consequential damages arising from use of this website or services.</p>
        <h3>Governing law</h3>
        <p>These terms are governed by the laws of India.</p>
        <h3>Contact</h3>
        <p>Email: cybersec@itcindia.org. Phone: +91 93164 73033.</p>
      </div>
    </section>
  )
}
