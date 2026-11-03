import { useState, useEffect, useRef } from 'react'
import heroVideo from './grok-video-cropped.mp4'
import './App.css'

function Icon({ name, className = '' }) {
  const icons = {
    devices: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </>
    ),
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
    drone: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" />
        <path d="M8 8l1.5 1.5M16 8l-1.5 1.5M8 16l1.5-1.5M16 16l-1.5-1.5" />
      </>
    ),
    wifi: (
      <>
        <path d="M5 12.55a11 11 0 0 1 14 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <path d="M12 20h.01" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    scale: (
      <>
        <path d="M12 3v18M5 7h14M7 7l-4 8a4 4 0 0 0 8 0zM17 7l-4 8a4 4 0 0 0 8 0z" />
      </>
    ),
    bolt: <path d="M13 2 3 14h7l-1 8 10-12h-7z" />,
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    megaphone: (
      <>
        <path d="M3 11v2a1 1 0 0 0 1 1h2l6 4V6L6 10H4a1 1 0 0 0-1 1z" />
        <path d="M15 8.5a5 5 0 0 1 0 7" />
        <path d="M18 5.5a9 9 0 0 1 0 13" />
      </>
    ),
    handshake: (
      <>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </>
    ),
    star: <path d="M12 3l2.7 5.5 6 .87-4.35 4.24 1.03 6L12 16.75 6.62 19.6l1.03-6L3.3 9.37l6-.87z" />,
    monitor: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    trophy: (
      <>
        <path d="M6 4h12v5a6 6 0 0 1-12 0z" />
        <path d="M6 6H4a2 2 0 0 0 0 4h2M18 6h2a2 2 0 0 1 0 4h-2" />
        <path d="M12 15v3M9 21h6" />
      </>
    ),
    trend: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
    rocket: (
      <>
        <path d="M5 15c-1.2 1-1.8 4.2-1.8 4.2s3.2-.6 4.2-1.8a2 2 0 0 0-2.4-2.4z" />
        <path d="M14.5 13.5 18 10a13 13 0 0 0 3-8 13 13 0 0 0-8 3l-3.5 3.5" />
        <path d="M9 15l-2-2M15 9l2 2" />
        <circle cx="16.5" cy="7.5" r="1.2" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.4 13.4 7 22l5-2.4 5 2.4-1.4-8.6" />
        <path d="m9.8 9 1.6 1.6L14.2 7.8" />
      </>
    ),
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('about-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Global Audits' },
    { value: '30+', label: 'Security Experts' },
    { value: '100%', label: 'Client Privacy' },
  ]

  const values = [
    {
      icon: 'scale',
      title: 'Absolute Integrity',
      desc: 'Trust is the currency of cybersecurity. We operate with unwavering transparency and ethics.',
    },
    {
      icon: 'bolt',
      title: 'Cutting-Edge Innovation',
      desc: 'The threat landscape evolves hourly. Our defense mechanisms evolve even faster.',
    },
    {
      icon: 'shield',
      title: 'Client-Centric Protection',
      desc: 'We don’t just secure networks; we secure businesses, reputations, and futures.',
    },
    {
      icon: 'globe',
      title: 'Global Excellence',
      desc: 'Delivering world-class compliance and pentesting mapped to the highest international standards.',
    },
  ]

  const standards = [
    { name: 'OWASP Top 10', desc: 'Gold standard for web application security.' },
    { name: 'ISO 27001', desc: 'Comprehensive information security management.' },
    { name: 'SOC 2 Type II', desc: 'Trust service criteria for service organizations.' },
    { name: 'HIPAA', desc: 'Strict data privacy for healthcare information.' },
    { name: 'NIST CSF', desc: 'US government framework for critical infrastructure.' },
    { name: 'GDPR & DPDP', desc: 'Global standards for personal data protection.' },
  ]

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://res.cloudinary.com/didtfhfme/image/upload/v1793680468/0436919b-2e9e-4338-a44d-48e14638aeeb_sijj2v.png"
            alt="ITC India Information Security Division — Defending the Digital Frontier"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-eyebrow">Information Security Division</div>
            <h1 className="about-hero-title">
              Defending the<br />
              <span className="highlight-text">Digital Frontier</span>
            </h1>
            <p className="about-hero-quote">
              “We don’t just find vulnerabilities; we architect resilience.”
            </p>
            <p className="about-hero-text">
              As the elite Information Security Division of ITC INDIA, we stand as the vanguard against modern cyber threats. We merge world-class ethical hacking with rigorous compliance audits to build unbreakable trust for enterprises worldwide.
            </p>
            <a href="#about-contact" className="btn btn-orange" onClick={scrollToContact}>Consult Our Experts →</a>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding about-identity">
        <div className="container about-two-col">
          <div className="about-identity-head">
            <div className="section-label">✦ Our Identity</div>
            <h2 className="section-title">The <span className="highlight-text">ITC Legacy</span></h2>
          </div>
          <div className="about-identity-text">
            <p>
              ITC INDIA has been a pioneer in industrial and electrical testing for years. Recognizing the critical shift towards global digitization, the Information Security (IS) Division was born out of an urgent need to protect the digital assets of our enterprise partners.
            </p>
            <p>
              Today, we are independent market leaders in VAPT, Cloud Security, and Compliance Readiness. What sets us apart is our dual-lens approach: an attacker’s mindset to hunt vulnerabilities, and an auditor’s precision to ensure regulatory supremacy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding about-mission">
        <div className="container about-mv-layout">
          <div className="about-mv-visual">
            <img
              src="https://res.cloudinary.com/didtfhfme/image/upload/v1793681104/1d7f70f5-d9ce-4bd3-b4cb-2be39e8e349e_mgww48.png"
              alt="Our Mission and Vision — ITC India Information Security Division"
            />
          </div>
          <div className="about-mv-grid">
            <div className="about-mv-card">
              <span className="about-mv-icon"><Icon name="target" /></span>
              <h3>Our Mission</h3>
              <p>To eliminate cybersecurity blind spots and empower organizations with robust, transparent, and scalable security architectures.</p>
            </div>
            <div className="about-mv-card">
              <span className="about-mv-icon"><Icon name="eye" /></span>
              <h3>Our Vision</h3>
              <p>To be the world’s most trusted cybersecurity partner, shaping a future where data leaks and unpatched exploits are relics of the past.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding about-ethos">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Core Ethos</div>
            <h2 className="section-title">Driven by <span className="highlight-text">Principles</span></h2>
            <p className="section-subtitle">
              We don’t just sell services; we inject a culture of security into your organization. Our core values dictate every sprint, audit, and penetration test we conduct.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <div key={value.title} className="about-value-card">
                <span className="about-value-icon"><Icon name={value.icon} /></span>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding about-standards">
        <div className="container">
          <div className="about-standards-head">
            <div className="about-standards-intro">
              <div className="section-label">✦ Global Standards</div>
              <h2 className="section-title">Compliance <span className="highlight-text">Mastery</span></h2>
              <p className="section-subtitle">
                We benchmark your security posture against the most strenuous international frameworks, guaranteeing regulatory success and client trust.
              </p>
            </div>
            <div className="about-standards-visual">
              <img
                src="https://res.cloudinary.com/didtfhfme/image/upload/v1793682190/7d699f0f-59b0-4e79-bb9c-e44d412eb182_rh3qqe.png"
                alt="ITC India Global Standards — OWASP, ISO 27001, SOC 2, HIPAA, NIST CSF, GDPR & DPDP compliance"
              />
            </div>
          </div>

          <div className="about-standards-grid">
            {standards.map((standard) => (
              <div key={standard.name} className="about-standard-card">
                <h3>{standard.name}</h3>
                <p>{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-contact" className="section-padding about-contact">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Contact Us</div>
            <h2 className="section-title">Contact <span className="highlight-text">Us</span></h2>
            <p className="section-subtitle">
              Reach out for audits, compliance, or cybersecurity consultations.
            </p>
          </div>

          <div className="about-contact-card">
            {formSubmitted ? (
              <div className="form-success-box">
                <span className="success-icon"><Icon name="check" /></span>
                <h3>Thank you for reaching out!</h3>
                <p>Our cybersecurity and audit team has received your inquiry and will contact you within 24 business hours.</p>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleFormSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="aboutFullName">Full Name</label>
                    <input id="aboutFullName" type="text" className="form-input" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aboutEmail">Email Address</label>
                    <input id="aboutEmail" type="email" className="form-input" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="aboutPhone">Phone Number</label>
                    <input id="aboutPhone" type="tel" className="form-input" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aboutOrg">Company / Organization</label>
                    <input id="aboutOrg" type="text" className="form-input" placeholder="Company / Organization" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="aboutInquiry">Select an inquiry type</label>
                  <select
                    id="aboutInquiry"
                    className="form-input form-select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select an inquiry type</option>
                    <option value="Audit">Audit</option>
                    <option value="ISO 27001">ISO 27001</option>
                    <option value="ISO 27000">ISO 27000</option>
                    <option value="ISO 27701">ISO 27701</option>
                    <option value="SOC L2">SOC L2 (SOC 2 Audit)</option>
                    <option value="SOC L3">SOC L3 (SOC 3 Audit)</option>
                    <option value="HIPAA">HIPAA Audit</option>
                    <option value="WAPT">WAPT (Website Testing)</option>
                    <option value="VAPT">VAPT (Application Testing)</option>
                    <option value="AI/ML Testing">AI/ML Testing</option>
                    <option value="IOT Testing">IOT Testing (Software only)</option>
                    <option value="Drone Testing">Drone Testing (Software only)</option>
                    <option value="Customized Tools">Customized Tools for testing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="aboutMessage">Describe your requirements</label>
                  <textarea
                    id="aboutMessage"
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <div className="form-checkbox-group">
                  <input type="checkbox" id="aboutSubscribe" defaultChecked />
                  <label htmlFor="aboutSubscribe">Subscribe to security &amp; compliance updates</label>
                </div>

                <button type="submit" className="btn btn-orange btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function Soc3Page() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const highlights = [
    { icon: 'globe', title: 'Shared Freely', desc: 'Can be openly distributed on your website and to prospects.' },
    { icon: 'megaphone', title: 'Marketing Asset', desc: 'Used extensively in marketing materials to prove your security posture.' },
    { icon: 'handshake', title: 'No NDA Required', desc: 'Provided instantly to clients and partners without non-disclosure agreements.' },
  ]

  const comparison = [
    { feature: 'Audience', soc2: 'Restricted (under NDA)', soc3: 'Public' },
    { feature: 'Detail Level', soc2: 'Highly detailed technical controls', soc3: 'Summary-level overview' },
    { feature: 'Use Case', soc2: 'Audits & enterprise client diligence', soc3: 'Marketing & trust building' },
    { feature: 'Report Sharing', soc2: 'Limited to stakeholders with need-to-know', soc3: 'Freely shareable' },
  ]

  const impacts = [
    { icon: 'star', text: 'Build trust with customers instantly' },
    { icon: 'monitor', text: 'Showcase security directly on your website' },
    { icon: 'trophy', text: 'Strengthen overall brand credibility' },
    { icon: 'trend', text: 'Support powerful sales and marketing efforts' },
    { icon: 'rocket', text: 'Stand out from unprepared competitors' },
  ]

  const requirements = [
    { num: '1', title: 'Complete SOC 2', desc: 'First complete a SOC 2 Type II audit.' },
    { num: '2', title: 'Meet Criteria', desc: 'Meet Trust Service Criteria (Security, Availability, etc.).' },
    { num: '3', title: 'Effectiveness', desc: 'Demonstrate consistent control effectiveness over time.' },
  ]

  const process = [
    { num: '01', title: 'SOC 2 Readiness', desc: 'Prepare your organization for SOC 2 compliance.' },
    { num: '02', title: 'Type II Audit Completion', desc: 'Ensure controls operate effectively over time.' },
    { num: '03', title: 'SOC 3 Report Generation', desc: 'Create a public, simplified audit report.' },
    { num: '04', title: 'Certification & Usage Guidance', desc: 'Help you use SOC 3 for branding & sales.' },
  ]

  const covers = [
    { title: 'Security Controls', desc: 'Validation against unauthorized access.' },
    { title: 'System Availability', desc: 'Ensuring your systems are consistently available.' },
    { title: 'Data Confidentiality', desc: 'Protecting confidential information.' },
    { title: 'Privacy Protection', desc: 'Handling personal data according to policy.' },
    { title: 'Processing Integrity', desc: 'Accurate, timely, and authorized processing.' },
  ]

  const audience = [
    'SaaS Companies',
    'Cloud Service Providers',
    'Tech Startups',
    'FinTech & Data-driven Businesses',
    'Companies targeting global clients',
  ]

  const whyChoose = [
    { title: 'End-to-End SOC Support', desc: 'We integrate SOC 2 + SOC 3 into one seamless journey, saving time and costs.' },
    { title: 'Business-Focused Approach', desc: 'Not just strict compliance—we aim for active business growth enablement.' },
    { title: 'Fast-Track Certification', desc: 'Reduce delays and complexity with our expert-led, streamlined methodologies.' },
    { title: 'Marketing Advantage', desc: 'We actively advise you on how to best utilize your SOC 3 report as a powerful trust asset.' },
  ]

  const faqs = [
    {
      q: 'What is SOC 3 certification?',
      a: 'SOC 3 is a general-use attestation report built on the same Trust Services Criteria as SOC 2. It summarizes your security, availability, confidentiality, processing integrity, and privacy controls in a simplified, non-technical format that anyone can read.'
    },
    {
      q: 'Can SOC 3 be shared publicly?',
      a: 'Yes. SOC 3 is designed for public distribution. You can publish it on your website, attach it to proposals, and share it with prospects and partners freely—no NDA or need-to-know restrictions apply.'
    },
    {
      q: 'Is SOC 3 required?',
      a: 'SOC 3 is not mandatory. It is a voluntary trust badge that complements SOC 2, ideal for organizations that want to showcase their security posture openly to accelerate sales, partnerships, and enterprise trust.'
    },
    {
      q: 'Do I need SOC 2 before SOC 3?',
      a: 'Yes. A completed SOC 2 Type II audit is the prerequisite for SOC 3, since the public SOC 3 report is derived from the same audit evidence, control testing, and observation period.'
    },
  ]

  return (
    <main className="soc3-page">
      {/* ===== SOC 3 HERO ===== */}
      <section className="soc3-hero">
        <div className="soc3-hero-bg">
          <img
            src="https://res.cloudinary.com/didtfhfme/image/upload/v1793683019/ad217c99-7868-4f12-8841-593aeb2c8cc6_uuptow.png"
            alt="ITC India SOC 3 certification — trust badge and public compliance assurance"
          />
          <div className="soc3-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="soc3-hero-content">
            <div className="soc3-eyebrow">Trust Badge &amp; Certification</div>
            <h1 className="soc3-hero-title">
              SOC 3 Audit &amp;<br />
              <span className="highlight-text">Consultancy Services in India</span>
            </h1>
            <p className="soc3-hero-quote">
              &ldquo;Showcase Your Security. Build Public Trust.&rdquo;
            </p>
            <p className="soc3-hero-text">
              SOC 3 is a publicly shareable report that demonstrates your organization meets strict security and compliance standards—without exposing sensitive details. At CyberSec ITC India, we help you achieve SOC 3 certification so you can confidently showcase your security posture to clients, partners, and stakeholders.
            </p>
            <div className="soc3-hero-actions">
              <a href="#soc3-contact" className="btn btn-orange" onClick={scrollTo('soc3-contact')}>Get SOC 3 Certified</a>
              <a href="#soc3-contact" className="btn btn-glass" onClick={scrollTo('soc3-contact')}>Turn Compliance into Trust</a>
            </div>
          </div>
        </div>

        <div className="soc3-badge" aria-hidden="true">
          <div className="soc3-badge-seal">
            <svg viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="rgba(191,219,254,0.45)" strokeWidth="1.4" strokeDasharray="3 5" />
              <circle cx="32" cy="32" r="24" fill="rgba(31,111,229,0.28)" stroke="#93c5fd" strokeWidth="1.4" />
              <path d="M32 14.5 44 19v9.8c0 8.3-5.1 14.4-12 17.7-6.9-3.3-12-9.4-12-17.7V19z" fill="#1f6fe5" stroke="#e0edff" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="m26.4 31.4 4.1 4.1 7.6-7.6" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="soc3-badge-body">
            <span className="soc3-badge-kicker">Certified · Public Report</span>
            <strong>SOC 3</strong>
            <span className="soc3-badge-sub">AICPA Trust Services Criteria</span>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS SOC 3 ===== */}
      <section className="section-padding soc3-what">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Understanding the Distinction</div>
            <h2 className="section-title">What is <span className="highlight-text">SOC 3?</span></h2>
            <p className="section-subtitle">
              SOC 3 (System and Organization Controls 3) is a public-facing version of SOC 2. It is designed for general audiences, allowing companies to demonstrate compliance without revealing confidential, deeply technical audit details.
            </p>
          </div>

          <div className="soc3-highlight-grid">
            {highlights.map((item) => (
              <div key={item.title} className="soc3-highlight-card">
                <Icon name={item.icon} className="soc3-highlight-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOC 2 VS SOC 3 ===== */}
      <section className="section-padding soc3-compare">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ SOC 2 vs SOC 3</div>
            <h2 className="section-title">SOC 2 vs <span className="highlight-text">SOC 3</span></h2>
            <p className="section-subtitle">
              Understand the key differences between the detailed, restricted report and the publicly shareable credential.
            </p>
          </div>

          <div className="soc3-table-wrap">
            <table className="soc3-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SOC 2</th>
                  <th>SOC 3</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td data-label="Feature">{row.feature}</td>
                    <td data-label="SOC 2" className="soc3-col-soc2">{row.soc2}</td>
                    <td data-label="SOC 3" className="soc3-col-soc3">{row.soc3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="soc3-callout"><Icon name="badge" className="soc3-callout-icon" /><span>SOC 3 = Proof of compliance you can show publicly</span></div>
        </div>
      </section>

      {/* ===== WHY SOC 3 MATTERS ===== */}
      <section className="section-padding soc3-impact">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ The Business Impact</div>
            <h2 className="section-title">Why SOC 3 <span className="highlight-text">Matters</span></h2>
            <p className="section-subtitle">
              SOC 3 is not just compliance—it&rsquo;s a trust badge for your business. Think of SOC 3 as your &ldquo;security certificate for the public.&rdquo;
            </p>
          </div>

          <div className="soc3-impact-grid">
            {impacts.map((item) => (
              <div key={item.text} className="soc3-impact-item">
                <Icon name={item.icon} className="soc3-impact-icon" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUIREMENTS ===== */}
      <section className="section-padding soc3-requirements">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Requirements</div>
            <h2 className="section-title">Requirements for <span className="highlight-text">SOC 3</span></h2>
            <p className="section-subtitle">
              To get SOC 3, you must fulfill foundational security criteria.
            </p>
          </div>

          <div className="soc3-req-grid">
            {requirements.map((item) => (
              <div key={item.num} className="soc3-req-card">
                <span className="soc3-req-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="soc3-callout"><Icon name="arrow" className="soc3-callout-icon" /><span>No SOC 2 Type II = No SOC 3</span></div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section id="soc3-process" className="section-padding soc3-process">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ How We Work</div>
            <h2 className="section-title">Our SOC 3 <span className="highlight-text">Process</span></h2>
            <p className="section-subtitle">
              A streamlined path to receiving your public trust badge.
            </p>
          </div>

          <div className="soc3-process-grid">
            {process.map((step) => (
              <div key={step.num} className="soc3-step-card">
                <span className="soc3-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT SOC 3 COVERS ===== */}
      <section className="section-padding soc3-covers">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Scope of Assurance</div>
            <h2 className="section-title">What SOC 3 <span className="highlight-text">Covers</span></h2>
            <p className="section-subtitle">
              SOC 3 is based on the same principles as SOC 2, but presented in a simplified, non-technical format:
            </p>
          </div>

          <div className="soc3-covers-grid">
            {covers.map((item) => (
              <div key={item.title} className="soc3-cover-card">
                <span className="soc3-cover-check"><Icon name="check" /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO SHOULD GET SOC 3 ===== */}
      <section className="section-padding soc3-audience">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Ideal For</div>
            <h2 className="section-title">Who Should Get <span className="highlight-text">SOC 3?</span></h2>
          </div>

          <div className="soc3-audience-list">
            {audience.map((item) => (
              <span key={item} className="soc3-audience-pill">
                <span className="soc3-pill-check"><Icon name="check" /></span> {item}
              </span>
            ))}
          </div>

          <div className="soc3-callout"><Icon name="arrow" className="soc3-callout-icon" /><span>If you want to showcase your security publicly to drive sales, SOC 3 is ideal.</span></div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding soc3-why">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Your Compliance Partner</div>
            <h2 className="section-title">Why Choose <span className="highlight-text">CyberSec ITC India?</span></h2>
          </div>

          <div className="soc3-why-grid">
            {whyChoose.map((item, i) => (
              <div key={item.title} className="soc3-why-card">
                <span className="soc3-why-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="soc3-cta">
        <div className="container">
          <div className="soc3-cta-inner">
            <h2>Turn Your Compliance into a <span>Competitive Advantage</span></h2>
            <p>Get SOC 3 certified and proudly showcase your superior security to the world.</p>
            <div className="soc3-cta-actions">
              <a href="#soc3-contact" className="btn btn-orange" onClick={scrollTo('soc3-contact')}>Start Your SOC 3 Journey</a>
              <a href="#soc3-contact" className="btn btn-glass" onClick={scrollTo('soc3-contact')}>Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section className="section-padding faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Common Questions</div>
            <h2 className="section-title">SOC 3 Audit &ndash; <span className="highlight-text">FAQs</span></h2>
            <p className="section-subtitle">
              Quick answers on SOC 3 certification, public sharing, and prerequisites.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="soc3-contact" className="section-padding about-contact">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Contact Us</div>
            <h2 className="section-title">Contact <span className="highlight-text">Us</span></h2>
            <p className="section-subtitle">
              Reach out for audits, compliance, or cybersecurity consultations.
            </p>
          </div>

          <div className="about-contact-card">
            {formSubmitted ? (
              <div className="form-success-box">
                <span className="success-icon"><Icon name="check" /></span>
                <h3>Thank you for reaching out!</h3>
                <p>Our cybersecurity and audit team has received your inquiry and will contact you within 24 business hours.</p>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleFormSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="soc3FullName">Full Name</label>
                    <input id="soc3FullName" type="text" className="form-input" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="soc3Email">Email Address</label>
                    <input id="soc3Email" type="email" className="form-input" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="soc3Phone">Phone Number</label>
                    <input id="soc3Phone" type="tel" className="form-input" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="soc3Org">Company / Organization</label>
                    <input id="soc3Org" type="text" className="form-input" placeholder="Company / Organization" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="soc3Inquiry">Select an inquiry type</label>
                  <select
                    id="soc3Inquiry"
                    className="form-input form-select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select an inquiry type</option>
                    <option value="Audit">Audit</option>
                    <option value="SOC L3">SOC L3 (SOC 3 Audit)</option>
                    <option value="SOC L2">SOC L2 (SOC 2 Audit)</option>
                    <option value="ISO 27001">ISO 27001</option>
                    <option value="ISO 27000">ISO 27000</option>
                    <option value="ISO 27701">ISO 27701</option>
                    <option value="HIPAA">HIPAA Audit</option>
                    <option value="WAPT">WAPT (Website Testing)</option>
                    <option value="VAPT">VAPT (Application Testing)</option>
                    <option value="AI/ML Testing">AI/ML Testing</option>
                    <option value="IOT Testing">IOT Testing (Software only)</option>
                    <option value="Drone Testing">Drone Testing (Software only)</option>
                    <option value="Customized Tools">Customized Tools for testing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="soc3Message">Describe your requirements</label>
                  <textarea
                    id="soc3Message"
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <div className="form-checkbox-group">
                  <input type="checkbox" id="soc3Subscribe" defaultChecked />
                  <label htmlFor="soc3Subscribe">Subscribe to security &amp; compliance updates</label>
                </div>

                <button type="submit" className="btn btn-orange btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeIndustry, setActiveIndustry] = useState('healthcare')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState('Audit')
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [auditTab, setAuditTab] = useState('soc')
  const [certTab, setCertTab] = useState('infosec')
  const [vaptTab, setVaptTab] = useState('web')
  const [route, setRoute] = useState(() => window.location.hash || '#')
  const partnersTrackRef = useRef(null)
  const partnerAutoplayPaused = useRef(false)

  const isAbout = route === '#about'
  const isSoc3 = route === '#soc3'
  const isHome = !isAbout && !isSoc3

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (isAbout || isSoc3) {
      window.scrollTo(0, 0)
      return
    }
    const id = route.length > 1 ? route.slice(1) : ''
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [isAbout, isSoc3, route])

  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793428295/efaa79b8-f4d8-4cf8-922b-2474f7ff6fe0_vwcd7d.png',
      alt: 'ITC India CyberSec Operations Center & Compliance Audit Lab'
    },
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793428383/42c1bcda-deea-4bd5-9392-d3c0bf4903fb_mc5jvc.png',
      alt: 'Cybersecurity SOC Analysts 24/7 Monitoring'
    },
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793430667/34dd04d7-8f2a-4978-8270-12a7846cbd4b_ammun2.png',
      alt: 'Cybersecurity Compliance & Security Shield Operations'
    }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  const scrollPartners = (direction) => {
    const track = partnersTrackRef.current
    if (!track) return
    const card = track.querySelector('.partner-wordmark')
    const amount = card ? card.getBoundingClientRect().width + 18 : track.clientWidth
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (partnerAutoplayPaused.current) return
      const track = partnersTrackRef.current
      if (!track) return
      const card = track.querySelector('.partner-wordmark')
      if (!card) return
      const amount = card.getBoundingClientRect().width + 18
      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: amount, behavior: 'smooth' })
      }
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const logoUrl = "https://res.cloudinary.com/didtfhfme/image/upload/v1792749521/itclogo_cg16hj.png"

  const auditsMenuData = {
    soc: [
      {
        title: 'SOC 2 Type I Audit',
        desc: 'Point-in-time assessment verifying control design across AICPA Trust Services Criteria.',
        icon: '📋',
        href: '#audits'
      },
      {
        title: 'SOC 2 Type II Audit',
        desc: 'Evaluates operating effectiveness of security controls over a 6 to 12-month period.',
        icon: '🛡️',
        href: '#audits'
      },
      {
        title: 'SOC 3 Assurance',
        desc: 'General-use compliance attestation report & seal for website trust and enterprise deals.',
        icon: '🌐',
        href: '#soc3'
      },
      {
        title: 'Continuous Monitoring',
        desc: '24/7 automated telemetry, anomaly surveillance, and recurring audit posture tracking.',
        icon: '📡',
        href: '#audits'
      }
    ],
    healthcare: [
      {
        title: 'HIPAA Security Audit',
        desc: 'Complete audit of administrative, technical, and physical safeguards for healthcare systems.',
        icon: '🏥',
        href: '#audits'
      },
      {
        title: 'ePHI Data Protection',
        desc: 'Encryption, key management, API transit security, and clinical data boundary validation.',
        icon: '🩺',
        href: '#audits'
      },
      {
        title: 'Breach Notification Readiness',
        desc: 'Readiness evaluation ensuring compliance with statutory breach notification timelines.',
        icon: '⚠️',
        href: '#audits'
      }
    ],
    grc: [
      {
        title: 'Compliance Gap Analysis',
        desc: 'Pre-audit scoping and comprehensive roadmap to remediate missing controls.',
        icon: '📊',
        href: '#audits'
      },
      {
        title: 'Vendor Risk Assessment',
        desc: 'Third-party vendor due diligence, supply chain security audits, and risk scoring.',
        icon: '🤝',
        href: '#audits'
      },
      {
        title: 'CERT-In Alignment',
        desc: 'Security testing and compliance processes aligned with national cybersecurity SOPs.',
        icon: '🇮🇳',
        href: '#audits'
      }
    ]
  }

  const certsMenuData = {
    infosec: [
      {
        title: 'ISO/IEC 27001 (ISMS)',
        desc: 'Global benchmark for managing information security policies, controls, and risk.',
        icon: '🏅',
        href: '#certifications'
      },
      {
        title: 'ISO/IEC 27000',
        desc: 'Foundational security architecture, vocabulary, and standards taxonomy.',
        icon: '📖',
        href: '#certifications'
      },
      {
        title: 'ISO/IEC 27701 (Privacy)',
        desc: 'Privacy Information Management System (PIMS) for personal data and GDPR alignment.',
        icon: '🔒',
        href: '#certifications'
      }
    ],
    iot: [
      {
        title: 'ETSI EN 303 645 (IoT)',
        desc: 'Global cybersecurity baseline standard and certification for connected smart devices.',
        icon: '📡',
        href: '#certifications'
      },
      {
        title: 'OWASP IoT Top 10',
        desc: 'Vulnerability testing covering hardware interfaces, firmware, and cloud backends.',
        icon: '🔌',
        href: '#vapt-iot'
      },
      {
        title: 'Connected Products Lab',
        desc: 'Specialized testing workflows for consumer IoT, gateways, and smart hardware.',
        icon: '🔬',
        href: '#itc-lab'
      }
    ],
    lab: [
      {
        title: 'ISO/IEC 17025 Accreditation',
        desc: 'NABL-accredited test laboratory competence with globally recognized test validity.',
        icon: '🧪',
        href: '#itc-lab'
      },
      {
        title: 'EMC, EMI & Safety Testing',
        desc: 'Complete electromagnetic compatibility, electrical safety, and IP ingress testing.',
        icon: '⚡',
        href: '#itc-lab'
      },
      {
        title: 'Global Export Certificates',
        desc: 'Testing reports and compliance documentation accepted by international regulators.',
        icon: '🌍',
        href: '#certifications'
      }
    ]
  }

  const vaptMenuData = {
    web: [
      {
        title: 'WAPT (Web Pentesting)',
        desc: 'Expert manual & automated vulnerability assessment aligned with OWASP Top 10.',
        icon: '💻',
        href: '#vapt-software'
      },
      {
        title: 'API & Microservices Security',
        desc: 'Deep security testing for REST, GraphQL, and microservices authorization flows.',
        icon: '⚡',
        href: '#vapt-software'
      },
      {
        title: 'Cloud Security Review',
        desc: 'Cloud posture assessments, IAM misconfigurations, and container security audits.',
        icon: '☁️',
        href: '#vapt-software'
      }
    ],
    mobile: [
      {
        title: 'Android Security (AST)',
        desc: 'Static & dynamic APK reverse engineering, intent manipulation, and storage testing.',
        icon: '🤖',
        href: '#vapt-software'
      },
      {
        title: 'iOS App Security',
        desc: 'IPA binary inspection, Keychain security, memory analysis, and ATS validation.',
        icon: '🍏',
        href: '#vapt-software'
      },
      {
        title: 'Secure Code Auditing',
        desc: 'Automated + expert manual source code reviews identifying hidden business logic flaws.',
        icon: '🔐',
        href: '#vapt-software'
      }
    ],
    iot: [
      {
        title: 'IoT Device Pentesting',
        desc: 'Hardware bus probing (UART/JTAG/I2C), radio protocols (BLE/Zigbee), and sensors.',
        icon: '🔬',
        href: '#vapt-iot'
      },
      {
        title: 'Drone & UAS Cyber Testing',
        desc: 'Telemetry security, RF link spoofing defense, ground station penetration testing.',
        icon: '✈️',
        href: '#vapt-iot'
      },
      {
        title: 'Firmware Reverse Engineering',
        desc: 'Binary extraction, cryptographic key discovery, and embedded vulnerability patching.',
        icon: '💾',
        href: '#vapt-iot'
      }
    ]
  }

  const faqData = [
    {
      q: 'What is the cost of SOC 2 and SOC 3 certification in India?',
      a: 'The cost of SOC 2 and SOC 3 assessments depends on the chosen Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy), your system complexity, cloud infrastructure size, and whether you require a Type I (design assessment) or Type II (operating effectiveness over 6-12 months) audit. Contact our compliance team for a transparent, customized proposal.'
    },
    {
      q: 'Is SOC 2 a one-time thing?',
      a: 'No. While SOC 2 Type I is a point-in-time assessment of control design, SOC 2 Type II requires annual recurring assessments to evaluate operating effectiveness over a 6 to 12-month observation window.'
    },
    {
      q: 'Do we really need SOC 2?',
      a: 'If you store, process, or transmit customer data—especially enterprise, SaaS, or US/global clients—SOC 2 is often a mandatory vendor due diligence requirement to close enterprise deals and build trust.'
    },
    {
      q: 'What’s the difference between SOC 2 Type I and Type II?',
      a: 'Type I evaluates whether your security controls are designed appropriately at a specific point in time. Type II tests and verifies the operational effectiveness of those controls over an extended period (typically 6–12 months).'
    },
    {
      q: 'What kind of security testing do you offer?',
      a: 'We provide Web Application Penetration Testing (WAPT), Mobile Application Security Testing (AST), Network Penetration Testing, IoT & Embedded Device Security (ETSI EN 303 645), Drone/UAS Cybersecurity, and Cloud Security assessments.'
    },
    {
      q: 'Is the VAPT demo really free?',
      a: 'Yes, we offer an initial scoping session and vulnerability scan demo to evaluate your application or device security baseline at no initial cost.'
    },
    {
      q: 'Will you hack our application or disrupt our systems?',
      a: 'No. Our certified ethical hackers follow rigorous, safe testing protocols aligned with OWASP and NIST. We schedule active testing during preferred maintenance windows and coordinate closely to ensure zero downtime or data loss.'
    },
    {
      q: 'What do we get after testing?',
      a: 'You receive an executive summary, an in-depth technical report detailing discovered vulnerabilities with CVSS scores, evidence and proof-of-concept, prioritized remediation guidance, and a free re-test verification certificate.'
    },
    {
      q: 'How is continuous monitoring different from VAPT?',
      a: 'VAPT is a comprehensive, periodic deep-dive inspection uncovering logic flaws and deep vulnerabilities. Continuous monitoring involves 24/7 automated telemetry and surveillance to detect anomalous activity in real time.'
    },
    {
      q: 'Do you also secure IoT devices?',
      a: 'Yes. ITC India\'s specialized IoT laboratory tests consumer and industrial connected devices against ETSI EN 303 645, OWASP IoT Top 10, analyzing hardware interfaces, firmware, radio protocols, and cloud APIs.'
    },
    {
      q: 'How do you protect our data?',
      a: 'All client assessments are conducted under strict non-disclosure agreements (NDAs) using encrypted communication channels, role-based access, and isolated testing labs. Test data is securely purged post-assessment.'
    },
    {
      q: 'Will this affect our day-to-day operations?',
      a: 'Our testing methodologies are non-destructive and tailored to avoid business disruption. Testing can be executed in staging environments or during low-traffic periods.'
    },
    {
      q: 'Which standards and compliance frameworks do you follow for testing?',
      a: 'We adhere to OWASP Top 10, OWASP Mobile Top 10, SANS 25, NIST SP 800-115, ETSI EN 303 645, IEC 62443, ISO/IEC 27001, SOC 2 / SOC 3, and HIPAA guidelines.'
    },
    {
      q: 'Why choose us?',
      a: 'ITC India combines NABL-accredited laboratory infrastructure, specialized IoT and Drone security testing SOPs, seasoned CISSP/CEH certified auditors, and an end-to-end pathway from gap analysis to global certification.'
    }
  ]

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-top-bar">
          <div className="container">
            <div className="nav-top-contact">
              <span>📧 info@itcindia.org</span>
              <span>📞 +91 93164 73033</span>
              <span>📍 Mohali, Punjab, India</span>
            </div>
            <div className="nav-top-social">
              <span>🛡️ NABL Accredited | ISO/IEC 17025</span>
              <a href="https://cybersec.itcindia.org" target="_blank" rel="noreferrer">cybersec.itcindia.org</a>
            </div>
          </div>
        </div>

        <div className="nav-main">
          <div className="container">
            <a href="#" className="nav-logo">
              <img
                src={logoUrl}
                alt="ITC India CyberSec"
                className="nav-logo-img"
              />
              <div className="nav-logo-text">
                <span className="brand">CyberSec</span>
                <span className="tagline">IS Division of ITC INDIA</span>
              </div>
            </a>

            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    if (isAbout) {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    setMobileMenuOpen(false)
                  }}
                >
                  About
                </a>
              </li>
              
              {/* Audits Mega Dropdown (Accorp Style) */}
              <li
                className={`nav-item-dropdown ${activeDropdown === 'audits' ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown('audits')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setActiveDropdown(activeDropdown === 'audits' ? null : 'audits')}
                >
                  <span>Audits</span>
                  <span className="dropdown-arrow">▾</span>
                </button>
                <div className="accorp-mega-dropdown">
                  <div className="accorp-tabs-row">
                    <button
                      type="button"
                      className={`accorp-tab-btn ${auditTab === 'soc' ? 'active' : ''}`}
                      onClick={() => setAuditTab('soc')}
                      onMouseEnter={() => setAuditTab('soc')}
                    >
                      SOC &amp; Attestation
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${auditTab === 'healthcare' ? 'active' : ''}`}
                      onClick={() => setAuditTab('healthcare')}
                      onMouseEnter={() => setAuditTab('healthcare')}
                    >
                      Healthcare &amp; Privacy
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${auditTab === 'grc' ? 'active' : ''}`}
                      onClick={() => setAuditTab('grc')}
                      onMouseEnter={() => setAuditTab('grc')}
                    >
                      Compliance &amp; GRC
                    </button>
                  </div>

                  <div className="accorp-cards-grid">
                    {auditsMenuData[auditTab].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="accorp-service-card"
                        onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                      >
                        <div className="accorp-card-icon">{item.icon}</div>
                        <div className="accorp-card-body">
                          <h4 className="accorp-card-title">{item.title}</h4>
                          <p className="accorp-card-desc">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="accorp-dropdown-footer">
                    <div className="footer-note">
                      <span>🛡️</span>
                      <span>AICPA &amp; CERT-In aligned audit methodologies with zero operational downtime</span>
                    </div>
                    <a
                      href="#contact"
                      className="footer-cta"
                      onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                    >
                      <span>Request Audit Scoping</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </li>

              {/* Certifications Mega Dropdown (Accorp Style) */}
              <li
                className={`nav-item-dropdown ${activeDropdown === 'certs' ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown('certs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setActiveDropdown(activeDropdown === 'certs' ? null : 'certs')}
                >
                  <span>Certifications</span>
                  <span className="dropdown-arrow">▾</span>
                </button>
                <div className="accorp-mega-dropdown">
                  <div className="accorp-tabs-row">
                    <button
                      type="button"
                      className={`accorp-tab-btn ${certTab === 'infosec' ? 'active' : ''}`}
                      onClick={() => setCertTab('infosec')}
                      onMouseEnter={() => setCertTab('infosec')}
                    >
                      Information Security
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${certTab === 'iot' ? 'active' : ''}`}
                      onClick={() => setCertTab('iot')}
                      onMouseEnter={() => setCertTab('iot')}
                    >
                      IoT &amp; Hardware
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${certTab === 'lab' ? 'active' : ''}`}
                      onClick={() => setCertTab('lab')}
                      onMouseEnter={() => setCertTab('lab')}
                    >
                      Lab Accreditation
                    </button>
                  </div>

                  <div className="accorp-cards-grid">
                    {certsMenuData[certTab].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="accorp-service-card"
                        onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                      >
                        <div className="accorp-card-icon">{item.icon}</div>
                        <div className="accorp-card-body">
                          <h4 className="accorp-card-title">{item.title}</h4>
                          <p className="accorp-card-desc">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="accorp-dropdown-footer">
                    <div className="footer-note">
                      <span>🏅</span>
                      <span>NABL Accredited Laboratory | ISO/IEC 17025 Certified Infrastructure</span>
                    </div>
                    <a
                      href="#certifications"
                      className="footer-cta"
                      onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                    >
                      <span>Explore Standards</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </li>

              {/* VAPT Mega Dropdown (Accorp Style) */}
              <li
                className={`nav-item-dropdown ${activeDropdown === 'vapt' ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown('vapt')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setActiveDropdown(activeDropdown === 'vapt' ? null : 'vapt')}
                >
                  <span>VAPT</span>
                  <span className="dropdown-arrow">▾</span>
                </button>
                <div className="accorp-mega-dropdown">
                  <div className="accorp-tabs-row">
                    <button
                      type="button"
                      className={`accorp-tab-btn ${vaptTab === 'web' ? 'active' : ''}`}
                      onClick={() => setVaptTab('web')}
                      onMouseEnter={() => setVaptTab('web')}
                    >
                      Web &amp; APIs
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${vaptTab === 'mobile' ? 'active' : ''}`}
                      onClick={() => setVaptTab('mobile')}
                      onMouseEnter={() => setVaptTab('mobile')}
                    >
                      Mobile Apps
                    </button>
                    <button
                      type="button"
                      className={`accorp-tab-btn ${vaptTab === 'iot' ? 'active' : ''}`}
                      onClick={() => setVaptTab('iot')}
                      onMouseEnter={() => setVaptTab('iot')}
                    >
                      IoT &amp; Drones
                    </button>
                  </div>

                  <div className="accorp-cards-grid">
                    {vaptMenuData[vaptTab].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="accorp-service-card"
                        onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                      >
                        <div className="accorp-card-icon">{item.icon}</div>
                        <div className="accorp-card-body">
                          <h4 className="accorp-card-title">{item.title}</h4>
                          <p className="accorp-card-desc">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="accorp-dropdown-footer">
                    <div className="footer-note">
                      <span>🎯</span>
                      <span>Certified Ethical Hackers (CEH/CISSP) with OWASP &amp; NIST testing SOPs</span>
                    </div>
                    <a
                      href="#vapt-software"
                      className="footer-cta"
                      onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                    >
                      <span>Book Free Security Scan</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </li>

              <li><a href="#vapt-iot" onClick={() => setMobileMenuOpen(false)}>Drone Testing</a></li>
              <li><a href="#itc-lab" onClick={() => setMobileMenuOpen(false)}>Lab Services</a></li>
              <li><a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Get Started</a></li>
            </ul>

            <button
              className="mobile-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {isAbout && <AboutPage />}
      {isSoc3 && <Soc3Page />}

      {isHome && (
      <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        {/* Background Image Slider */}
        <div className="hero-slider-track">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-img"
              />
              <div className="hero-slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          className="hero-slider-arrow hero-slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button
          type="button"
          className="hero-slider-arrow hero-slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {/* Slide Indicators */}
        <div className="hero-slider-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`hero-slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse-dot"></span>
              <span>24/7 Security Operations Center Active</span>
            </div>

            <h1 className="hero-title">
              <span className="highlight">Cybersecurity</span> &amp; Compliance<br />
              for Modern Business
            </h1>

            <p className="hero-subtitle">
              From VAPT and incident response to audits and global certifications, we help you reduce risk, strengthen resilience, and protect what matters.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-orange">Book a Free Security Audit &rarr;</a>
              <a href="#audits" className="btn btn-glass">Explore Our Services &darr;</a>
            </div>

            <div className="hero-counters">
              <div className="hero-counter">
                <h4>265+</h4>
                <p>Threats Neutralized</p>
              </div>
              <div className="hero-counter">
                <h4>125+</h4>
                <p>Security Audits</p>
              </div>
              <div className="hero-counter">
                <h4>85+</h4>
                <p>Clients Protected</p>
              </div>
              <div className="hero-counter">
                <h4>99%</h4>
                <p>Service Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: AUDITS - SOC & HIPAA ===== */}
      <section id="audits" className="section-padding audits-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Attestation &amp; Verification</div>
            <h2 className="section-title">AUDITS - <span className="highlight-text">SOC &amp; HIPAA</span></h2>
            <p className="section-subtitle">
              Rigorous audits providing high-level assurance regarding controls, data protection, and operational safeguards.
            </p>
          </div>

          <div className="audits-grid">
            <div className="audit-card">
              <div className="audit-badge">SOC 2 &bull; SOC 3</div>
              <h3>SOC AUDITS</h3>
              <div className="audit-lead">SOC 2, SOC 3</div>
              <p className="audit-desc">
                Assurance on security, availability, confidentiality, and privacy. Type I (Design) and Type II (Operating Effectiveness) assessments.
              </p>
              <div className="audit-quote">
                &ldquo;These audits are used to provide high-level assurance regarding the controls and protections an organization has in place for its systems and data.&rdquo;
              </div>
              <ul className="audit-points">
                <li><span className="check-icon">✓</span> Type I (Design Verification at a Point in Time)</li>
                <li><span className="check-icon">✓</span> Type II (Operating Effectiveness over 6–12 Months)</li>
                <li><span className="check-icon">✓</span> Trust Services Criteria: Security, Confidentiality &amp; Privacy</li>
              </ul>
              <a href="#soc3" className="audit-inline-link">Get SOC 3 Trust Badge →</a>
              <a href="#contact" className="btn btn-outline-blue">Request SOC Audit →</a>
            </div>

            <div className="audit-card highlight-card">
              <div className="audit-badge orange-badge">Healthcare Privacy</div>
              <h3>HIPAA AUDIT</h3>
              <div className="audit-lead">Healthcare Data Protection</div>
              <p className="audit-desc">
                Protection of healthcare and sensitive personal data. Evaluates administrative, technical, and physical safeguards.
              </p>
              <div className="audit-quote">
                &ldquo;The primary goal of these assessments is the protection of healthcare and sensitive personal data. This ensures that organizations handling health information maintain the integrity, confidentiality, and availability of that data.&rdquo;
              </div>
              <ul className="audit-points">
                <li><span className="check-icon">✓</span> Administrative, Technical &amp; Physical Safeguards Evaluation</li>
                <li><span className="check-icon">✓</span> Protected Health Information (PHI) &amp; ePHI Security</li>
                <li><span className="check-icon">✓</span> Breach Notification Rule &amp; Incident Readiness</li>
              </ul>
              <a href="#contact" className="btn btn-orange">Request HIPAA Audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: VAPT – IoT DEVICE SECURITY ===== */}
      <section id="vapt-iot" className="section-padding iot-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Connected Devices Security</div>
            <h2 className="section-title">VAPT – <span className="highlight-text">IoT Device Security</span></h2>
            <p className="section-subtitle">
              Secure IoT ecosystems against real-world cyber threats with specialized lab testing and compliance verification.
            </p>
          </div>

          <div className="iot-overview-grid">
            <div className="iot-info-card">
              <div className="iot-card-header">
                <span className="iot-icon"><Icon name="devices" /></span>
                <h4>DEVICES COVERED</h4>
              </div>
              <div className="device-tags">
                <span className="device-pill"><Icon name="drone" className="pill-icon" /> Drones</span>
                <span className="device-pill"><Icon name="wifi" className="pill-icon" /> IoT Devices</span>
              </div>
            </div>

            <div className="iot-info-card">
              <div className="iot-card-header">
                <span className="iot-icon"><Icon name="document" /></span>
                <h4>STANDARD ALIGNMENT</h4>
              </div>
              <p className="iot-card-text">
                Device security assessments follow globally recognized cybersecurity standards to ensure compliance, resilience, and secure-by-design connected products.
              </p>
              <div className="check-tag-list">
                <span className="check-tag"><Icon name="check" className="check-icon" /> ETSI EN 303 645</span>
                <span className="check-tag"><Icon name="check" className="check-icon" /> OWASP Top 10 for IoT</span>
              </div>
            </div>

            <div className="iot-info-card">
              <div className="iot-card-header">
                <span className="iot-icon"><Icon name="target" /></span>
                <h4>CORE FOCUS AREAS</h4>
              </div>
              <div className="check-tag-list vertical">
                <span className="check-tag"><Icon name="check" className="check-icon" /> Common security vulnerabilities</span>
                <span className="check-tag"><Icon name="check" className="check-icon" /> Authentication &amp; access control</span>
                <span className="check-tag"><Icon name="check" className="check-icon" /> Secure communications &amp; OTA updates</span>
              </div>
            </div>
          </div>

          {/* IoT Certifications Feature Block */}
          <div className="iot-cert-banner">
            <div className="iot-cert-header">
              <span className="cert-shield-icon">🛡️</span>
              <div>
                <h3>IoT Certifications</h3>
                <p>
                  ITC India offers ETSI EN 303 645 certification for IoT and connected devices, validating compliance with global cybersecurity baseline requirements.
                </p>
              </div>
            </div>

            <div className="iot-cert-features">
              <div className="cert-feature-item">
                <div className="cert-feature-icon">✔</div>
                <div>
                  <h4>Structured Work Instructions</h4>
                  <p>ITC India has developed specialized internal work instructions for IoT and Drone Security Testing, ensuring repeatable and high-quality assessments.</p>
                </div>
              </div>

              <div className="cert-feature-item">
                <div className="cert-feature-icon">🔒</div>
                <div>
                  <h4>Enhanced Security Coverage</h4>
                  <p>Our assessments cover authentication, access control, secure communication, OTA updates, and common vulnerabilities, aligned with global standards.</p>
                </div>
              </div>

              <div className="cert-feature-item">
                <div className="cert-feature-icon">🛡️</div>
                <div>
                  <h4>Certified Processes</h4>
                  <p>ETSI EN 303 645 certification ensures IoT devices meet globally recognized cybersecurity baselines for connected products.</p>
                </div>
              </div>
            </div>

            <div className="iot-banner-footer">
              <a href="#contact" className="btn btn-orange">Learn More... →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: VAPT – SOFTWARE TESTING ===== */}
      <section id="vapt-software" className="section-padding software-vapt-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Digital Ecosystem Defense</div>
            <h2 className="section-title">VAPT – <span className="highlight-text">SOFTWARE TESTING</span></h2>
            <p className="section-subtitle">
              ITC India's Software VAPT division safeguards modern digital ecosystems by combining expert-led manual assessments with automated testing frameworks, ensuring applications remain secure, compliant, and resilient against evolving threats.
            </p>
          </div>

          <div className="software-vapt-video">
            <video
              src="https://res.cloudinary.com/didtfhfme/video/upload/v1793683711/grok-video-3baf2011-cropped_qj1hw3.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          <div className="software-vapt-grid">
            {/* WAPT */}
            <div className="vapt-service-card">
              <div className="vapt-card-badge">Web Application Penetration Testing</div>
              <h3>WAPT</h3>
              <p className="vapt-card-subtitle">Public-facing and internal web applications</p>

              <div className="vapt-highlight-box">
                <ul className="vapt-checklist">
                  <li><span className="dot-icon">●</span> OWASP Top 10 aligned vulnerability assessment</li>
                  <li><span className="dot-icon">●</span> API &amp; microservices security testing</li>
                  <li><span className="dot-icon">●</span> Authentication, session &amp; access control validation</li>
                  <li><span className="dot-icon">●</span> Manual testing combined with automated tools</li>
                </ul>
              </div>

              <div className="vapt-subblock">
                <h4>Coverage Depth</h4>
                <p>
                  End-to-end testing across input validation, session handling, authentication mechanisms, and secure data processing to identify both common and advanced attack vectors.
                </p>
                <p>
                  Real-world attack simulation to uncover business logic flaws, misconfigurations, and hidden vulnerabilities often missed by automated scanners.
                </p>
              </div>

              <div className="vapt-subblock">
                <h4>Operational Excellence</h4>
                <p>
                  Standardized methodologies and well-defined SOPs ensure consistent testing quality, traceable results, and actionable remediation guidance for development teams.
                </p>
              </div>

              <a href="https://cybersec.itcindia.org/wapt" target="_blank" rel="noreferrer" className="btn btn-blue">
                Know More →
              </a>
            </div>

            {/* AST */}
            <div className="vapt-service-card">
              <div className="vapt-card-badge orange-badge">Application Security Testing</div>
              <h3>Application Security Testing (AST)</h3>
              <p className="vapt-card-subtitle">Mobile applications (Android &amp; iOS)</p>

              <div className="vapt-highlight-box">
                <ul className="vapt-checklist">
                  <li><span className="dot-icon">●</span> Secure API and backend testing</li>
                  <li><span className="dot-icon">●</span> OWASP Mobile Top 10 vulnerability coverage</li>
                  <li><span className="dot-icon">●</span> Data storage, encryption &amp; communication security</li>
                  <li><span className="dot-icon">●</span> Manual + automated hybrid testing approach</li>
                </ul>
              </div>

              <div className="vapt-subblock">
                <h4>Coverage Depth</h4>
                <p>
                  Comprehensive testing across mobile app architecture, API communication, authentication flows, and sensitive data handling to identify security gaps.
                </p>
                <p>
                  Assessment of reverse engineering risks, insecure storage, and improper session handling in real-world scenarios.
                </p>
              </div>

              <div className="vapt-subblock">
                <h4>Operational Readiness</h4>
                <p>
                  Repeatable testing frameworks, detailed reporting, and clear remediation steps ensure your application is secure, compliant, and ready for production deployment.
                </p>
              </div>

              <a href="https://cybersec.itcindia.org/vapt" target="_blank" rel="noreferrer" className="btn btn-orange">
                Know More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: INDUSTRY SOLUTIONS ===== */}
      <section id="industries" className="section-padding industries-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Sector-Specific Protection</div>
            <h2 className="section-title">Industry Solutions &mdash; <span className="highlight-text">Tailored Security</span></h2>
            <p className="section-subtitle">
              Different industries face unique cyber threats. Our specialized solutions address the specific security challenges of your sector.
            </p>
          </div>

          <div className="industry-tabs">
            <button
              className={`industry-tab ${activeIndustry === 'healthcare' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('healthcare')}
            >
              🏥 Healthcare
            </button>
            <button
              className={`industry-tab ${activeIndustry === 'technology' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('technology')}
            >
              💻 Technology
            </button>
            <button
              className={`industry-tab ${activeIndustry === 'education' ? 'active' : ''}`}
              onClick={() => setActiveIndustry('education')}
            >
              🎓 Education
            </button>
          </div>

          {activeIndustry === 'healthcare' && (
            <div className="industry-content-card">
              <div className="industry-card-head">
                <h3>Healthcare Security</h3>
                <p>Protect patient data and medical systems while ensuring HIPAA compliance and operational continuity.</p>
              </div>

              <div className="industry-detail-grid">
                <div className="detail-col threats">
                  <h4>⚠️ Key Threats</h4>
                  <ul>
                    <li>Ransomware attacks targeting hospital infrastructure</li>
                    <li>Medical identity theft &amp; patient records exposure</li>
                    <li>IoT medical device vulnerabilities</li>
                    <li>Patient data breaches across telemedicine APIs</li>
                  </ul>
                </div>

                <div className="detail-col approach">
                  <h4>🎯 Our Approach</h4>
                  <ul>
                    <li>HIPAA compliance auditing &amp; gap assessments</li>
                    <li>Medical device &amp; telemetry security testing</li>
                    <li>PHI data encryption &amp; access control validation</li>
                    <li>Incident response planning &amp; SOC monitoring</li>
                  </ul>
                </div>

                <div className="detail-col results">
                  <h4>✅ Expected Results</h4>
                  <ul>
                    <li><strong>Zero PHI breaches</strong> across tested systems</li>
                    <li><strong>Secured medical endpoints</strong> &amp; clinical networks</li>
                    <li><strong>45% reduction</strong> in phishing success rate</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeIndustry === 'technology' && (
            <div className="industry-content-card">
              <div className="industry-card-head">
                <h3>Technology &amp; SaaS Security</h3>
                <p>Secure your SaaS platforms, cloud environments, and APIs while achieving SOC 2, ISO 27001, and global trust.</p>
              </div>

              <div className="industry-detail-grid">
                <div className="detail-col threats">
                  <h4>⚠️ Key Threats</h4>
                  <ul>
                    <li>API authorization bypass &amp; business logic flaws</li>
                    <li>Cloud misconfigurations (AWS, Azure, GCP)</li>
                    <li>Supply chain vulnerabilities in dependencies</li>
                    <li>Credential stuffing &amp; session hijacking</li>
                  </ul>
                </div>

                <div className="detail-col approach">
                  <h4>🎯 Our Approach</h4>
                  <ul>
                    <li>End-to-end WAPT &amp; Mobile App Security Testing</li>
                    <li>Cloud security architecture reviews &amp; IAM checks</li>
                    <li>SOC 2 Type I &amp; Type II compliance audit readiness</li>
                    <li>Automated DevSecOps pipeline integration guidance</li>
                  </ul>
                </div>

                <div className="detail-col results">
                  <h4>✅ Expected Results</h4>
                  <ul>
                    <li><strong>100% audit readiness</strong> for SOC 2 &amp; ISO 27001</li>
                    <li><strong>Elimination</strong> of critical OWASP vulnerabilities</li>
                    <li><strong>Faster enterprise sales</strong> with verified compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeIndustry === 'education' && (
            <div className="industry-content-card">
              <div className="industry-card-head">
                <h3>Education &amp; EdTech Security</h3>
                <p>Safeguard student databases, research intellectual property, and e-learning portals against disruption.</p>
              </div>

              <div className="industry-detail-grid">
                <div className="detail-col threats">
                  <h4>⚠️ Key Threats</h4>
                  <ul>
                    <li>Student PII exposure &amp; data leaks</li>
                    <li>Distributed Denial of Service (DDoS) during exams</li>
                    <li>Unsecured campus IoT &amp; BYOD network threats</li>
                    <li>Phishing campaigns targeting faculty and staff</li>
                  </ul>
                </div>

                <div className="detail-col approach">
                  <h4>🎯 Our Approach</h4>
                  <ul>
                    <li>Web portal &amp; learning management system (LMS) VAPT</li>
                    <li>Campus network segmentation &amp; Wi-Fi security audits</li>
                    <li>Student privacy impact assessments &amp; encryption checks</li>
                    <li>Staff security awareness drills and protocol setup</li>
                  </ul>
                </div>

                <div className="detail-col results">
                  <h4>✅ Expected Results</h4>
                  <ul>
                    <li><strong>Uncompromised student data privacy</strong> standards</li>
                    <li><strong>Resilient learning portals</strong> during high-load periods</li>
                    <li><strong>Comprehensive safety</strong> across campus networks</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SECTION 5: OUR CERTIFICATIONS ===== */}
      <section id="certifications" className="section-padding certs-section">
        <div className="container">
          <div className="section-header">
            <img
              src="https://cybersec.itcindia.org/bglogo.png"
              alt="ITC India CyberSec"
              className="certs-logo"
            />
            <div className="section-label">✦ Global Accreditations</div>
            <h2 className="section-title">Our <span className="highlight-text">Certifications</span></h2>
            <p className="section-subtitle">
              We comply with globally recognized information security and privacy standards to ensure trust, compliance, and secure digital operations for our clients.
            </p>
          </div>

          <div className="cert-cards-grid">
            <a href="https://cybersec.itcindia.org/iso-27001" target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-tag blue-tag">Information Security</div>
              <h3>ISO/IEC 27001</h3>
              <p>Establishes best practices for managing and protecting sensitive business and customer information.</p>
            </a>

            <a href="https://cybersec.itcindia.org/iso-27000" target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-tag orange-tag">Security Overview</div>
              <h3>ISO/IEC 27000</h3>
              <p>Defines the vocabulary and foundational concepts for the entire ISO 27000 family of information security standards.</p>
            </a>

            <a href="https://cybersec.itcindia.org/iot-security" target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-tag green-tag">IoT Security</div>
              <h3>ETSI EN 303 645</h3>
              <p>Defines cybersecurity requirements for consumer IoT devices to prevent common security threats.</p>
            </a>

            <a href="https://cybersec.itcindia.org/iso-27701" target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-tag purple-tag">Privacy Management</div>
              <h3>ISO/IEC 27701</h3>
              <p>Enhances privacy governance by defining controls for personal data protection and compliance.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TRUSTED PARTNERS ===== */}
      <section id="partners" className="section-padding partners-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Our Network</div>
            <h2 className="section-title">Our <span className="highlight-text">Trusted Partners</span></h2>
          </div>

          <div
            className="partners-slider"
            onMouseEnter={() => { partnerAutoplayPaused.current = true }}
            onMouseLeave={() => { partnerAutoplayPaused.current = false }}
          >
            <button
              type="button"
              className="partners-arrow partners-prev"
              onClick={() => scrollPartners(-1)}
              aria-label="Previous partners"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className="partners-grid" ref={partnersTrackRef} aria-label="Trusted partners">
              {[
              { name: 'Damnart', logo: 'https://www.damnart.com/wp-content/uploads/elementor/thumbs/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k.png' },
              { name: 'Evoke AI', logo: 'https://evokeaisolutions.com/assets/evoke.webp' },
              { name: 'SFT', logo: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180796/sft_fl24sf.webp' },
              { name: 'Aivara' },
              { name: 'Biiot' },
              { name: 'ICCRA', logo: 'https://icrr.icrallc.com/assets/icra-logo.png' }
            ].map((partner) => (
              <div className="partner-wordmark" key={partner.name}>
                {partner.logo && (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="partner-logo"
                    loading="lazy"
                  />
                )}
                <span className="partner-name">{partner.name}</span>
              </div>
              ))}
            </div>

            <button
              type="button"
              className="partners-arrow partners-next"
              onClick={() => scrollPartners(1)}
              aria-label="Next partners"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <section id="testimonials" className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Client Endorsements</div>
            <h2 className="section-title">Globally Trusted by <span className="highlight-text">Leading Companies</span></h2>
            <p className="section-subtitle">
              Read how our cybersecurity audits and certifications helped our partners accelerate compliance and resilience.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <blockquote>
                I am very satisfied with the result and the recommendations of the audit report. It was an eye opener.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">GB</div>
                <div className="author-info">
                  <h4>Guladab Bawa</h4>
                  <p>Head of division, Evoke AI</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card featured-testimonial">
              <div className="quote-mark">&ldquo;</div>
              <blockquote>
                CyberSec’s ISO 27001 policy templates saved us months of effort and simplified our entire compliance journey. Everything was structured, practical, and ready for immediate implementation.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar orange-avatar">MV</div>
                <div className="author-info">
                  <h4>Manish Vig</h4>
                  <p>Director of Eurocert</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <blockquote>
                The false positive rate is remarkably low compared to other tools we have used. The AI powered reporting is a game changer for our security team.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">SS</div>
                <div className="author-info">
                  <h4>Col. Sukhpal Singh</h4>
                  <p>CEO at Sustainable Futures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: LABORATORY TESTING CAPABILITIES (ITC INDIA) ===== */}
      <section id="itc-lab" className="section-padding lab-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Laboratory Infrastructure</div>
            <h2 className="section-title">ITC India <span className="highlight-text">Pvt. Ltd.</span></h2>
            <p className="section-subtitle">
              NABL-accredited testing &amp; calibration laboratory providing end-to-end solutions in electrical, electronic, photometric, and solar equipment testing.
            </p>
          </div>

          <div className="lab-grid">
            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                </svg>
              </div>
              <h3>Electrical Safety Testing</h3>
              <p>Compliance testing as per IEC, IS, and global safety standards for appliances and devices.</p>
              <span className="lab-link">Know More →</span>
            </a>

            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.9 19.1a10 10 0 0 1 0-14.2" />
                  <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
                  <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
                  <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>EMC &amp; EMI Testing</h3>
              <p>Electromagnetic compatibility and interference testing for CE, FCC, and Indian regulations.</p>
              <span className="lab-link">Know More →</span>
            </a>

            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 21h4" />
                  <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.4 1 2.5h6c0-1.1.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
                </svg>
              </div>
              <h3>Photometric Testing</h3>
              <p>LM-79, goniophotometer, and integrating sphere analysis for LED luminaires.</p>
              <span className="lab-link">Know More →</span>
            </a>

            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
                  <path d="M12 9.5c1.3 1.6 2 2.6 2 3.6a2 2 0 1 1-4 0c0-1 .7-2 2-3.6Z" />
                </svg>
              </div>
              <h3>Ingress Protection (IP) Testing</h3>
              <p>Dust and water resistance testing per IEC 60529 standards (IP65, IP67, IP68).</p>
              <span className="lab-link">Know More →</span>
            </a>

            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
                </svg>
              </div>
              <h3>Mechanical &amp; Environmental Testing</h3>
              <p>Vibration, drop, and life-cycle simulations for product durability and MIL-STD compliance.</p>
              <span className="lab-link">Know More →</span>
            </a>

            <a href="https://www.itcindia.org/" target="_blank" rel="noreferrer" className="lab-card">
              <div className="lab-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="16" height="10" rx="2" />
                  <path d="M22 11v2" />
                  <path d="M10 10 7 12l3 2v-4Z" />
                </svg>
              </div>
              <h3>Battery &amp; UV Light Testing</h3>
              <p>Battery testing (UN 38.3, IEC 62133, IS 16046) and UV-C/UV-A/B evaluation.</p>
              <span className="lab-link">Know More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQS ===== */}
      <section id="faq" className="section-padding faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">✦ Common Questions</div>
            <h2 className="section-title">Frequently Asked <span className="highlight-text">Questions</span></h2>
            <p className="section-subtitle">
              Clear answers on audits, VAPT testing, SOC certifications, and security processes.
            </p>
          </div>

          <div className="faq-grid faq-grid-split">
            {[faqData.slice(0, Math.ceil(faqData.length / 2)), faqData.slice(Math.ceil(faqData.length / 2))].map((column, colIndex) => (
              <div className="faq-column" key={colIndex}>
                {column.map((item, i) => {
                  const index = colIndex === 0 ? i : Math.ceil(faqData.length / 2) + i
                  return (
                    <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={openFaq === index}
                      >
                        <span>{item.q}</span>
                        <span className="faq-toggle-icon">{openFaq === index ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: CONTACT US ===== */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-side">
              <div className="section-label">✦ Get In Touch</div>
              <h2>Contact Us</h2>
              <p className="contact-lead">
                Reach out for audits, compliance, or cybersecurity consultations. Our NABL-accredited team is ready to evaluate your requirements.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <span className="detail-icon">🏢</span>
                  <div>
                    <h4>Headquarters</h4>
                    <p>ITC India Pvt. Ltd., Mohali, Punjab, India</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <span className="detail-icon">📧</span>
                  <div>
                    <h4>Email Inquiries</h4>
                    <p><a href="mailto:info@itcindia.org">info@itcindia.org</a></p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <div>
                    <h4>Call Support</h4>
                    <p><a href="tel:+919316473033">+91 93164 73033</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-badge-box">
                <span className="shield-icon-small">🛡️</span>
                <span>All assessments conducted under strict bilateral NDAs with confidential handling.</span>
              </div>
            </div>

            <div className="contact-form-side">
              {formSubmitted ? (
                <div className="form-success-box">
                  <span className="success-icon"><Icon name="check" /></span>
                  <h3>Thank you for reaching out!</h3>
                  <p>Our cybersecurity and audit team has received your inquiry and will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleFormSubmit}>
                  <h3>Schedule an Assessment</h3>
                  <p className="form-note">Select your inquiry type and provide project details.</p>

                  <div className="form-group">
                    <label htmlFor="inquiry-select">Select an inquiry type *</label>
                    <select
                      id="inquiry-select"
                      className="form-input form-select"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                    >
                      <option value="Audit">Audit</option>
                      <option value="ISO 27001">ISO 27001</option>
                      <option value="ISO 27000">ISO 27000</option>
                      <option value="ISO 27701">ISO 27701</option>
                      <option value="SOC L2">SOC L2 (SOC 2 Audit)</option>
                      <option value="SOC L3">SOC L3 (SOC 3 Audit)</option>
                      <option value="HIPAA">HIPAA Audit</option>
                      <option value="WAPT">WAPT (Website Testing)</option>
                      <option value="VAPT">VAPT (Application Testing)</option>
                      <option value="AI/ML Testing">AI/ML Testing</option>
                      <option value="IOT Testing">IOT Testing (Software only)</option>
                      <option value="Drone Testing">Drone Testing (Software only)</option>
                      <option value="Customized Tools">Customized Tools for testing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input id="fullName" type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="workEmail">Work Email *</label>
                      <input id="workEmail" type="email" className="form-input" placeholder="name@company.com" required />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="phoneNum">Phone Number *</label>
                      <input id="phoneNum" type="tel" className="form-input" placeholder="+91 98765 43210" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="orgName">Organization / Company *</label>
                      <input id="orgName" type="text" className="form-input" placeholder="Company Name" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Scope or Message</label>
                    <textarea id="message" rows="3" className="form-input form-textarea" placeholder="Describe your systems, timeline, or standards required..."></textarea>
                  </div>

                  <div className="form-checkbox-group">
                    <input type="checkbox" id="subscribe" defaultChecked />
                    <label htmlFor="subscribe">Subscribe to security &amp; compliance updates</label>
                  </div>

                  <button type="submit" className="btn btn-orange btn-full">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* ===== SECTION 10: FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo-header">
                <img
                  src={logoUrl}
                  alt="ITC India CyberSec"
                  className="footer-logo-img"
                />
                <div>
                  <span className="footer-brand-title">CyberSec</span>
                  <span className="footer-brand-tag">IS Division of ITC INDIA</span>
                </div>
              </div>
              <p>
                Elevating global security standards through advanced VAPT, IoT security, and comprehensive compliance frameworks. Your trusted partner in digital resilience.
              </p>
              <div className="footer-social">
                <a href="https://cybersec.itcindia.org" target="_blank" rel="noreferrer" aria-label="Website">🌐</a>
                <a href="https://www.itcindia.org" target="_blank" rel="noreferrer" aria-label="ITC India">🏛️</a>
                <a href="mailto:info@itcindia.org" aria-label="Email">✉️</a>
                <a href="tel:+919316473033" aria-label="Phone">📞</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="https://cybersec.itcindia.org/wapt" target="_blank" rel="noreferrer">Web Testing (WAPT)</a></li>
                <li><a href="https://cybersec.itcindia.org/vapt" target="_blank" rel="noreferrer">Application Testing (AST)</a></li>
                <li><a href="https://cybersec.itcindia.org/iot-security" target="_blank" rel="noreferrer">IoT Security</a></li>
                <li><a href="https://cybersec.itcindia.org/ai-ml-security" target="_blank" rel="noreferrer">AI/ML Security</a></li>
                <li><a href="https://cybersec.itcindia.org/drone-testing" target="_blank" rel="noreferrer">Drone Testing</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Frameworks</h4>
              <ul>
                <li><a href="https://cybersec.itcindia.org/hipaa-audit" target="_blank" rel="noreferrer">HIPAA</a></li>
                <li><a href="https://cybersec.itcindia.org/soc-audit" target="_blank" rel="noreferrer">SOC 2 Audit</a></li>
                <li><a href="https://cybersec.itcindia.org/soc3-audit" target="_blank" rel="noreferrer">SOC 3 Audit</a></li>
                <li><a href="https://cybersec.itcindia.org/iso-27001" target="_blank" rel="noreferrer">ISO 27001</a></li>
                <li><a href="https://cybersec.itcindia.org/iso-27000" target="_blank" rel="noreferrer">ISO 27000</a></li>
                <li><a href="https://cybersec.itcindia.org/iso-27701" target="_blank" rel="noreferrer">ISO 27701</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Trust &amp; Safety</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://cybersec.itcindia.org/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                <li><a href="https://www.itcindia.org/terms-conditions/" target="_blank" rel="noreferrer">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 CyberSec. All Rights Reserved.</p>
            <div className="footer-badges">
              <a href="https://www.itcindia.org/terms-conditions/" target="_blank" rel="noreferrer" className="footer-badge">Terms &amp; Conditions</a>
              <span className="footer-badge">🏛️ NABL Accredited Lab</span>
              <span className="footer-badge">🛡️ ISO/IEC 17025 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
