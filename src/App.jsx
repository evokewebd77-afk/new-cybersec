import { useState, useEffect, useRef } from 'react'
import './App.css'
import './pages/service-page.css'
import Icon from './components/Icon'
import Soc2Type1Page from './pages/Soc2Type1Page'
import Soc2Type2Page from './pages/Soc2Type2Page'
import Soc3Page from './pages/Soc3Page'
import HipaaPage from './pages/HipaaPage'
import Iso27001Page from './pages/Iso27001Page'
import Iso27000Page from './pages/Iso27000Page'
import Iso27701Page from './pages/Iso27701Page'
import CloudSecurityReviewPage from './pages/CloudSecurityReviewPage'
import RedTeamingPage from './pages/RedTeamingPage'
import WaptPage from './pages/WaptPage'
import ApiMicroservicesSecurityPage from './pages/ApiMicroservicesSecurityPage'
import DroneSecurityPage from './pages/DroneSecurityPage'

const pathRoutes = {
  '/about': '#about',
  '/soc2-type1': '#soc2-type1',
  '/soc2-type2': '#soc2-type2',
  '/soc3': '#soc3',
  '/iso-27001': '#iso-27001',
  '/iso-iec-27001': '#iso-27001',
  '/iso-27000': '#iso-27000',
  '/iso-iec-27000': '#iso-27000',
  '/iso-27701': '#iso-27701',
  '/iso-iec-27701': '#iso-27701',
  '/cloud-security-review': '#cloud-security-review',
  '/hipaa': '#hipaa',
  '/hipaa-audit': '#hipaa',
  '/wapt': '#wapt',
  '/red-teaming': '#red-teaming',
  '/api-microservices-security': '#api-microservices-security',
  '/api-microservices-security-testing': '#api-microservices-security',
  '/drone-security': '#drone-security',
  '/drone-security-testing': '#drone-security',
  '/drone-testing': '#drone-security',
  '/uas-security': '#drone-security',
}

const resolveRoute = () => {
  const hash = window.location.hash
  if (hash === '#') return '#'
  if (hash) return hash
  const path = window.location.pathname.replace(/\/+$/, '')
  return pathRoutes[path] || '#'
}

const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbytzBGrV1nYK8uJtMXN16xgOh-gzAnE7vO2_SeaDaM9PyEHz7gfyri_9Jsa_qeXpl59/exec'

const submitInquiry = async (form) => {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    throw new Error('Form is not connected yet. Please email info@itcindia.org directly.')
  }

  const payload = new URLSearchParams(new FormData(form))

  const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: payload.toString(),
  })

  if (!response.ok) {
    throw new Error('Unable to send your message right now. Please try again.')
  }

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (data && data.result === 'error') {
    throw new Error(data.message || 'Unable to send your message right now.')
  }
}

const searchPages = [
  { title: 'About Us', href: '#about', keywords: 'company team experience information security' },
  { title: 'SOC 2 Type I Readiness', href: '#soc2-type1', keywords: 'soc 2 type 1 audit compliance' },
  { title: 'SOC 2 Type II Readiness', href: '#soc2-type2', keywords: 'soc 2 type 2 audit compliance' },
  { title: 'SOC 3 Assurance', href: '#soc3', keywords: 'soc 3 audit compliance' },
  { title: 'ISO/IEC 27001', href: '#iso-27001', keywords: 'iso27001 iso iec 27001 consultancy isms certification information security audit' },
  { title: 'ISO/IEC 27000', href: '#iso-27000', keywords: 'iso27000 iso iec 27000 series consultancy strategy 27002 27005 27701 standards' },
  { title: 'ISO/IEC 27701 Privacy Certification', href: '#iso-27701', keywords: 'iso27701 iso iec 27701 privacy pims certification personal data gdpr ccpa' },
  { title: 'Cloud Security Review', href: '#cloud-security-review', keywords: 'cloud security review aws azure gcp infrastructure iam configuration assessment cloud penetration testing' },
  { title: 'API & Microservices Security Testing', href: '#api-microservices-security', keywords: 'api microservices security testing rest graphql oauth authorization api gateway business logic' },
  { title: 'Drone Security Testing', href: '#drone-security', keywords: 'drone uav uas security testing firmware rf communication ground control gps spoofing iot' },
  { title: 'HIPAA Compliance', href: '#hipaa', keywords: 'hipaa healthcare phi patient data security audit' },
  { title: 'Web Application Testing (WAPT)', href: '#wapt', keywords: 'web website penetration testing' },
  { title: 'Audits & Compliance', href: '#audits', keywords: 'hipaa healthcare grc assessment' },
  { title: 'Application Security (VAPT)', href: '#vapt-software', keywords: 'application penetration testing security' },
  { title: 'IoT & Drone Security', href: '#vapt-iot', keywords: 'iot device drone embedded testing' },
  { title: 'Red Teaming', href: '#red-teaming', keywords: 'red team adversary simulation offensive security' },
  { title: 'Certifications', href: '#certifications', keywords: 'iso 27001 iso 27701 standards' },
  { title: 'Contact Us', href: '#contact', keywords: 'contact email phone inquiry' },
]

function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [inquiryType, setInquiryType] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setFormSubmitting(true)
    setFormError('')
    try {
      await submitInquiry(form)
      setFormSubmitted(true)
      form.reset()
      setTimeout(() => setFormSubmitted(false), 5000)
    } catch (error) {
      setFormError(error.message)
    } finally {
      setFormSubmitting(false)
    }
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
            <div className="section-label">Our Identity</div>
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
            <div className="section-label">Core Ethos</div>
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
              <div className="section-label">Global Standards</div>
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
            <div className="section-label">Contact Us</div>
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
                    <input id="aboutFullName" name="fullName" type="text" className="form-input" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aboutEmail">Email Address</label>
                    <input id="aboutEmail" name="email" type="email" className="form-input" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="aboutPhone">Phone Number</label>
                    <input id="aboutPhone" name="phone" type="tel" className="form-input" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aboutOrg">Company / Organization</label>
                    <input id="aboutOrg" name="organization" type="text" className="form-input" placeholder="Company / Organization" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="aboutInquiry">Select an inquiry type</label>
                  <select
                    id="aboutInquiry"
                    name="inquiryType"
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
                    name="message"
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <div className="form-checkbox-group">
                  <input type="checkbox" id="aboutSubscribe" name="subscribe" value="yes" defaultChecked />
                  <label htmlFor="aboutSubscribe">Subscribe to security &amp; compliance updates</label>
                </div>

                <input type="hidden" name="formSource" value="About Page" />

                {formError && <p className="form-error" role="alert">{formError}</p>}

                <button type="submit" className="btn btn-orange btn-full" disabled={formSubmitting}>
                  {formSubmitting ? 'Sending...' : 'Send Message'}
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
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [inquiryType, setInquiryType] = useState('Audit')
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [certTab, setCertTab] = useState('infosec')
  const [vaptTab, setVaptTab] = useState('web')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [route, setRoute] = useState(resolveRoute)
  const partnersTrackRef = useRef(null)
  const partnerAutoplayPaused = useRef(false)

  const isAbout = route === '#about'
  const isSoc2Type1 = route === '#soc2-type1'
  const isSoc2Type2 = route === '#soc2-type2'
  const isSoc3 = route === '#soc3'
  const isIso27001 = route === '#iso-27001'
  const isIso27000 = route === '#iso-27000'
  const isIso27701 = route === '#iso-27701'
  const isCloudSecurityReview = route === '#cloud-security-review'
  const isApiMicroservicesSecurity = route === '#api-microservices-security'
  const isDroneSecurity = route === '#drone-security'
  const isHipaa = route === '#hipaa'
  const isRedTeaming = route === '#red-teaming'
  const isWapt = route === '#wapt'
  const isServicePage = isAbout || isSoc2Type1 || isSoc2Type2 || isSoc3 || isIso27001 || isIso27000 || isIso27701 || isCloudSecurityReview || isApiMicroservicesSecurity || isDroneSecurity || isHipaa || isRedTeaming || isWapt
  const isHome = !isServicePage
  const normalizedSearchQuery = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '')
  const searchResults = normalizedSearchQuery
    ? searchPages.filter((page) =>
        `${page.title} ${page.keywords}`.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalizedSearchQuery)
      )
    : []

  const submitSearch = (event) => {
    event.preventDefault()
    if (!searchResults.length) return
    window.location.hash = searchResults[0].href
    setSearchOpen(false)
  }

  useEffect(() => {
    const onRouteChange = () => setRoute(resolveRoute())
    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)
    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  useEffect(() => {
    if (isServicePage) {
      window.scrollTo(0, 0)
      return
    }
    const id = route.length > 1 ? route.slice(1) : ''
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [isServicePage, route])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793784109/45d427a4-150e-4fd0-ac54-4b7d40215646_ed0izc.png',
      alt: 'ITC India CyberSec Operations Center & Compliance Audit Lab'
    },
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793782449/9b8ec815-ae1b-47df-8698-cebd22e223f8_idj2yo.png',
      alt: 'Cybersecurity SOC Analysts 24/7 Monitoring'
    },
    {
      image: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793784462/da45355a-19e6-4028-a2f7-d179bec5f336_lz2cw9.png',
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setFormSubmitting(true)
    setFormError('')
    try {
      await submitInquiry(form)
      setFormSubmitted(true)
      form.reset()
      setTimeout(() => setFormSubmitted(false), 5000)
    } catch (error) {
      setFormError(error.message)
    } finally {
      setFormSubmitting(false)
    }
  }

  const logoUrl = "https://res.cloudinary.com/didtfhfme/image/upload/v1792749521/itclogo_cg16hj.png"

  const auditsMenuData = [
    {
      title: 'SOC 2 Type I Readiness',
      desc: 'Point-in-time readiness assessment verifying control design across AICPA Trust Services Criteria.',
      icon: '📋',
      href: '#soc2-type1'
    },
    {
      title: 'SOC 2 Type II Readiness',
      desc: 'Readiness support for evaluating operating effectiveness of security controls over 6 to 12 months.',
      icon: '🛡️',
      href: '#soc2-type2'
    },
    {
      title: 'SOC 3 Assurance',
      desc: 'General-use compliance attestation report & seal for website trust and enterprise deals.',
      icon: '🌐',
      href: '#soc3'
    }
  ]

  const certsMenuData = {
    infosec: [
      {
        title: 'ISO/IEC 27001 (ISMS)',
        desc: 'Global benchmark for managing information security policies, controls, and risk.',
        icon: '🏅',
        href: '#iso-27001'
      },
      {
        title: 'ISO/IEC 27000',
        desc: 'Foundational security architecture, vocabulary, and standards taxonomy.',
        icon: '📖',
        href: '#iso-27000'
      },
      {
        title: 'ISO/IEC 27701 (Privacy)',
        desc: 'Privacy Information Management System (PIMS) for personal data and GDPR alignment.',
        icon: '🔐',
        href: '#iso-27701'
      },
      {
        title: 'Red Teaming',
        desc: 'Objective-led adversary simulation to test people, processes, and defensive readiness.',
        icon: '◎',
        href: '#red-teaming'
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
    ]
  }

  const vaptMenuData = {
    web: [
      {
        title: 'WAPT (Web Pentesting)',
        desc: 'Expert manual & automated vulnerability assessment aligned with OWASP Top 10.',
        icon: '💻',
        href: '#wapt'
      },
      {
        title: 'API & Microservices Security',
        desc: 'Deep security testing for REST, GraphQL, and microservices authorization flows.',
        icon: '⚡',
        href: '#api-microservices-security'
      },
      {
        title: 'Cloud Security Review',
        desc: 'Cloud posture assessments, IAM misconfigurations, and container security audits.',
        icon: '☁️',
        href: '#cloud-security-review'
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
        icon: '??',
        href: '#drone-security'
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
              <span>📍 Mohali, Punjab, India</span>
            </div>
            <form
              className="nav-search"
              role="search"
              onSubmit={submitSearch}
            >
              <label className="sr-only" htmlFor="site-search">Search pages</label>
              <input
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                  setSearchOpen(true)
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search pages..."
                autoComplete="off"
                aria-controls="site-search-results"
                aria-expanded={searchOpen && Boolean(searchQuery.trim())}
              />
              <button type="submit" aria-label="Search">
                <Icon name="search" />
                <span>Search</span>
              </button>
              {searchOpen && searchQuery.trim() && (
                <ul id="site-search-results" className="nav-search-results" aria-label="Search suggestions">
                  {searchResults.length ? searchResults.map((page) => (
                    <li key={page.href}>
                      <a
                        href={page.href}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setSearchOpen(false)
                          setSearchQuery('')
                        }}
                      >
                        {page.title}
                      </a>
                    </li>
                  )) : (
                    <li className="nav-search-empty">No matching pages found</li>
                  )}
                </ul>
              )}
            </form>
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
                  <div className="accorp-cards-grid">
                    {auditsMenuData.map((item, idx) => (
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

              <li>
                <a href="#hipaa" onClick={() => setMobileMenuOpen(false)}>
                  HIPAA
                </a>
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

              <li><a href="#drone-security" onClick={() => setMobileMenuOpen(false)}>Drone Testing</a></li>
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
      {isSoc2Type1 && <Soc2Type1Page />}
      {isSoc2Type2 && <Soc2Type2Page />}
      {isSoc3 && <Soc3Page />}
      {isIso27001 && <Iso27001Page />}
      {isIso27000 && <Iso27000Page />}
      {isIso27701 && <Iso27701Page />}
      {isCloudSecurityReview && <CloudSecurityReviewPage />}
      {isApiMicroservicesSecurity && <ApiMicroservicesSecurityPage />}
      {isDroneSecurity && <DroneSecurityPage />}
      {isHipaa && <HipaaPage />}
      {isRedTeaming && <RedTeamingPage />}
      {isWapt && <WaptPage />}

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
            <div className="section-label">Attestation &amp; Verification</div>
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
              <div className="audit-inline-links">
                <a href="#soc2-type1" className="audit-inline-link">SOC 2 Type I Readiness →</a>
                <a href="#soc2-type2" className="audit-inline-link">SOC 2 Type II Readiness →</a>
                <a href="#soc3" className="audit-inline-link">Get SOC 3 Trust Badge →</a>
              </div>
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
              <div className="audit-inline-links">
                <a href="#hipaa" className="audit-inline-link">Explore HIPAA Compliance</a>
              </div>
              <a href="#contact" className="btn btn-orange">Request HIPAA Audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: VAPT – IoT DEVICE SECURITY ===== */}
      <section id="vapt-iot" className="section-padding iot-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Connected Devices Security</div>
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
            <div className="section-label">Digital Ecosystem Defense</div>
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

              <a href="#wapt" className="btn btn-blue">
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
            <div className="section-label">Sector-Specific Protection</div>
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
            <div className="section-label">Global Accreditations</div>
            <h2 className="section-title">Our <span className="highlight-text">Certifications</span></h2>
            <p className="section-subtitle">
              We comply with globally recognized information security and privacy standards to ensure trust, compliance, and secure digital operations for our clients.
            </p>
          </div>

          <div className="cert-cards-grid">
            <a href="#iso-27001" className="cert-card">
              <div className="cert-tag blue-tag">Information Security</div>
              <h3>ISO/IEC 27001</h3>
              <p>Establishes best practices for managing and protecting sensitive business and customer information.</p>
            </a>

            <a href="#iso-27000" className="cert-card">
              <div className="cert-tag orange-tag">Security Overview</div>
              <h3>ISO/IEC 27000</h3>
              <p>Defines the vocabulary and foundational concepts for the entire ISO 27000 family of information security standards.</p>
            </a>

            <a href="https://cybersec.itcindia.org/iot-security" target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-tag green-tag">IoT Security</div>
              <h3>ETSI EN 303 645</h3>
              <p>Defines cybersecurity requirements for consumer IoT devices to prevent common security threats.</p>
            </a>

            <a href="#iso-27701" className="cert-card">
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
            <div className="section-label">Our Network</div>
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
            <div className="section-label">Client Endorsements</div>
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
            <div className="section-label">Laboratory Infrastructure</div>
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
            <div className="section-label">Common Questions</div>
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
              <div className="section-label">Get In Touch</div>
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
                      name="inquiryType"
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
                      <input id="fullName" name="fullName" type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="workEmail">Work Email *</label>
                      <input id="workEmail" name="email" type="email" className="form-input" placeholder="name@company.com" required />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="phoneNum">Phone Number *</label>
                      <input id="phoneNum" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="orgName">Organization / Company *</label>
                      <input id="orgName" name="organization" type="text" className="form-input" placeholder="Company Name" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Scope or Message</label>
                    <textarea id="message" name="message" rows="3" className="form-input form-textarea" placeholder="Describe your systems, timeline, or standards required..."></textarea>
                  </div>

                  <div className="form-checkbox-group">
                    <input type="checkbox" id="subscribe" name="subscribe" value="yes" defaultChecked />
                    <label htmlFor="subscribe">Subscribe to security &amp; compliance updates</label>
                  </div>

                  <input type="hidden" name="formSource" value="Home Contact" />

                  {formError && <p className="form-error" role="alert">{formError}</p>}

                  <button type="submit" className="btn btn-orange btn-full" disabled={formSubmitting}>
                    {formSubmitting ? 'Sending...' : 'Send Message'}
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
                <a href="mailto:damnart.seo@gmail.com,devkumar.swipe@gmail.com" aria-label="Email damnart.seo@gmail.com and devkumar.swipe@gmail.com">
                  <svg className="footer-email-logo" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M3 7 5.5 5v13H3z" />
                    <path fill="#EA4335" d="m3 7 2.5-2 6.5 5-2.2 2z" />
                    <path fill="#FBBC04" d="m12 10 6.5-5L21 7l-6.8 5z" />
                    <path fill="#34A853" d="M18.5 9 21 7v11h-2.5z" />
                  </svg>
                </a>
                <a href="tel:+919316473033" aria-label="Phone">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/cyber-sec-ai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg className="footer-linkedin-logo" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.22a1.55 1.55 0 1 1 .02-3.1A1.55 1.55 0 0 1 7 8.22ZM18.33 18h-2.66v-4.18c0-1-.02-2.3-1.4-2.3-1.4 0-1.61 1.09-1.61 2.22V18H10V9.4h2.55v1.17h.04c.35-.67 1.22-1.39 2.51-1.39 2.69 0 3.19 1.77 3.19 4.07Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#wapt">Web Testing (WAPT)</a></li>
                <li><a href="#api-microservices-security">API &amp; Microservices Security</a></li>
                <li><a href="#red-teaming">Red Teaming</a></li>
                <li><a href="#cloud-security-review">Cloud Security Review</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Frameworks</h4>
              <ul>
                <li><a href="#hipaa">HIPAA</a></li>
                <li><a href="#soc2-type1">SOC 2 Type I Readiness</a></li>
                <li><a href="#soc2-type2">SOC 2 Type II Readiness</a></li>
                <li><a href="#soc3">SOC 3 Readiness</a></li>
                <li><a href="#iso-27001">ISO 27001</a></li>
                <li><a href="#iso-27000">ISO 27000</a></li>
                <li><a href="#iso-27701">ISO 27701</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company &amp; Contact</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Trust &amp; Safety</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="tel:+919316473033">Phone: +91 93164 73033</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 CyberSec. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING QUICK ACTIONS ===== */}
      <div className="floating-actions" aria-label="Quick actions">
        {showBackToTop && (
          <button
            type="button"
            className="floating-btn floating-btn-top visible"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <Icon name="arrowUp" />
            <span className="floating-label">Back to top</span>
          </button>
        )}
        <a
          className="floating-btn floating-btn-whatsapp"
          href="https://wa.me/917589783899"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <Icon name="whatsapp" />
          <span className="floating-label">WhatsApp</span>
        </a>
      </div>
    </>
  )
}

export default App
