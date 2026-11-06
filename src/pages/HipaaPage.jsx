import Icon from '../components/Icon'
import {
  AudienceSection,
  CtaBanner,
  NoteSection,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceFaq,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793857021/624fc0ed-7f05-4a63-ab05-31474cab4f39_fhrala.png'
const stakesImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793857404/e941a85d-a2ba-4861-9e80-c7fc617bb224_vzzfgj.png'

const principles = [
  {
    icon: 'eye',
    title: 'Confidentiality',
    desc: 'Ensuring that highly sensitive patient data is never exposed.',
  },
  {
    icon: 'shield',
    title: 'Integrity',
    desc: 'Ensuring that medical data is accurate and not maliciously altered.',
  },
  {
    icon: 'bolt',
    title: 'Availability',
    desc: 'Ensuring that critical healthcare data is accessible when needed.',
  },
]

const stakes = [
  {
    icon: 'shield',
    title: 'Protect sensitive patient data (PHI)',
    desc: 'Safeguard protected health information across systems, applications, and workflows.',
  },
  {
    icon: 'lock',
    title: 'Prevent data breaches and cyberattacks',
    desc: 'Reduce the likelihood and impact of unauthorized access, disclosure, and disruption.',
  },
  {
    icon: 'scale',
    title: 'Meet rigorous regulatory and legal requirements',
    desc: 'Align safeguards and documentation with applicable HIPAA requirements.',
  },
  {
    icon: 'handshake',
    title: 'Build trust with enterprise healthcare clients',
    desc: 'Demonstrate a credible security and privacy posture during vendor due diligence.',
  },
  {
    icon: 'trend',
    title: 'Improve your overall cybersecurity posture',
    desc: 'Strengthen access control, monitoring, incident response, and data protection practices.',
  },
]

const safeguards = [
  {
    icon: 'document',
    title: 'Administrative Safeguards',
    desc: 'Policies and procedures to manage security risks.',
    items: [
      'Risk analysis & risk management',
      'Employee training & awareness',
      'Access management policies',
      'Incident response planning',
    ],
  },
  {
    icon: 'monitor',
    title: 'Technical Safeguards',
    desc: 'Technology controls to protect data.',
    items: [
      'Access control & authentication',
      'Encryption of sensitive data',
      'Audit logs & monitoring',
      'Secure data transmission',
    ],
  },
  {
    icon: 'layers',
    title: 'Physical Safeguards',
    desc: 'Protection of physical systems and infrastructure.',
    items: [
      'Secure facilities and devices',
      'Workstation security',
      'Device & media controls',
      'Physical access restrictions',
    ],
  },
]

const process = [
  { title: 'HIPAA Gap Assessment', desc: 'Identify compliance gaps and risks.' },
  { title: 'Risk Analysis & Mitigation', desc: 'Evaluate vulnerabilities and implement controls.' },
  { title: 'Policy & Documentation Setup', desc: 'Create HIPAA-compliant policies and procedures.' },
  { title: 'Technical Security Implementation', desc: 'Apply encryption, access controls, and monitoring.' },
  { title: 'Audit Preparation', desc: 'Ensure readiness for compliance checks and evidence requests.' },
  { title: 'Continuous Compliance Support', desc: 'Maintain controls through ongoing monitoring and updates.' },
]

const coverage = [
  {
    icon: 'lock',
    title: 'PHI Data Protection',
    desc: 'Secure encryption protocols for health data.',
  },
  {
    icon: 'key',
    title: 'Secure API & App Handling',
    desc: 'Vulnerability management for health applications.',
  },
  {
    icon: 'shield',
    title: 'Access Control',
    desc: 'Identity management and strict access protocols.',
  },
  {
    icon: 'search',
    title: 'Logging & Audit Trails',
    desc: 'System tracking for full accountability.',
  },
  {
    icon: 'globe',
    title: 'Cloud Security',
    desc: 'Securing AWS, Azure, and GCP environments.',
  },
  {
    icon: 'refresh',
    title: 'Incident Response',
    desc: 'Breach handling and recovery strategies.',
  },
]

const audience = [
  'Healthcare Providers',
  'Hospitals & Clinics',
  'HealthTech Startups',
  'Telemedicine Platforms',
  'SaaS Platforms handling PHI',
]

const faqs = [
  {
    q: 'What is HIPAA compliance?',
    a: 'HIPAA compliance means meeting the administrative, technical, and physical safeguard requirements of the Health Insurance Portability and Accountability Act when creating, receiving, maintaining, or transmitting protected health information.',
  },
  {
    q: 'Is HIPAA mandatory in India?',
    a: 'HIPAA is a US federal law. It applies to organizations in India when they handle PHI for US-covered entities or are otherwise contractually required to meet HIPAA. Many global healthcare clients also require HIPAA-aligned controls.',
  },
  {
    q: 'What is PHI?',
    a: 'Protected Health Information is individually identifiable health information held or transmitted by a covered entity or business associate, including information about health status, care, or payment for care.',
  },
  {
    q: 'How long does HIPAA compliance take?',
    a: 'Timelines depend on your organization size, scope, existing controls, and documentation. A focused readiness program can take several weeks to a few months, while larger or multi-system environments may require longer.',
  },
]

const inquiryOptions = [
  'HIPAA Audit',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'ISO 27001',
  'ISO 27000',
  'ISO 27701',
  'WAPT',
  'VAPT',
  'AI/ML Testing',
  'IoT Testing',
  'Other',
]

export default function HipaaPage() {
  usePageMeta(
    'HIPAA Compliance & Audit Services | ITC India CyberSec',
    'Protect healthcare data, ensure HIPAA compliance, and build patient trust with ITC India CyberSec. Get gap assessments, risk analysis, documentation, technical safeguards, and audit readiness support.',
  )

  return (
    <main className="svc-page hipaa-page">
      <ServiceHero
        eyebrow="Healthcare Data Security"
        title="HIPAA Compliance &"
        highlight="Audit Services"
        quote="Protect Healthcare Data. Ensure Compliance. Build Patient Trust."
        text="Handling healthcare data comes with strict security and privacy responsibilities. At CyberSec ITC India, we help organizations achieve HIPAA compliance by securing sensitive health information and aligning with regulatory requirements."
        primaryCta="Get HIPAA Compliant"
        secondaryCta="Avoid Penalties Today"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Global Healthcare Standard"
            title="What Is"
            highlight="HIPAA?"
            subtitle="HIPAA is a global standard for protecting Protected Health Information (PHI). It ensures that organizations handling healthcare data maintain strict security measures."
          />
          <div className="soc3-highlight-grid">
            {principles.map((item) => (
              <div key={item.title} className="soc3-highlight-card">
                <Icon name={item.icon} className="soc3-highlight-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NoteSection>
        HIPAA compliance is critical for any organization dealing with patient or health-related data.
      </NoteSection>

      <section className="section-padding svc-bg-soft hipaa-stakes">
        <div className="container">
          <div className="hipaa-stakes-layout">
            <div className="hipaa-stakes-head">
              <SectionHeader
                label="The Stakes"
                title="Why HIPAA Compliance"
                highlight="Is Important"
                subtitle="Failure to comply with HIPAA can lead to heavy financial penalties, legal consequences, devastating data breaches, and a total loss of patient trust."
              />
            </div>

            <div className="hipaa-stakes-side">
              <figure className="hipaa-stakes-media">
                <img
                  src={stakesImage}
                  alt="Financial, legal, and reputational risks of HIPAA non-compliance"
                  loading="lazy"
                />
                <figcaption>Financial, legal, and reputational exposure.</figcaption>
              </figure>

              <aside className="hipaa-stakes-summary">
                <span className="hipaa-stakes-summary-label">Risk exposure</span>
                <p>Financial penalties, legal consequences, and lasting damage to patient trust.</p>
                <div className="hipaa-stakes-tags">
                  <span>Financial</span>
                  <span>Legal</span>
                  <span>Reputation</span>
                </div>
              </aside>
            </div>

            <div className="hipaa-stakes-list">
              {stakes.map((item) => (
                <article key={item.title} className="hipaa-stake-card">
                  <span className="hipaa-stake-icon"><Icon name={item.icon} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-white svc-cards-compact">
        <div className="container">
          <SectionHeader
            label="Core Protections"
            title="Core HIPAA"
            highlight="Safeguards"
            subtitle="HIPAA compliance is built around three essential safeguard pillars."
          />
          <ServiceCardGrid services={safeguards} />
        </div>
      </section>

      <ProcessSection
        className="hipaa-process"
        label="How We Work"
        title="Our HIPAA"
        highlight="Compliance Process"
        subtitle="We guide you from assessment to total compliance readiness."
        steps={process}
      />

      <section className="section-padding svc-bg-soft svc-cards-compact">
        <div className="container">
          <SectionHeader
            label="What We Cover"
            title="What We"
            highlight="Cover"
            subtitle="Comprehensive evaluations to ensure full PHI life-cycle protection."
          />
          <ServiceCardGrid services={coverage} />
        </div>
      </section>

      <AudienceSection
        className="svc-audience-compact"
        label="Who Needs HIPAA?"
        title="Is Your Organization"
        highlight="Subject to HIPAA?"
        items={audience}
        callout="If you handle patient data in any shape or form, HIPAA compliance is absolutely mandatory."
      />

      <CtaBanner
        title="Secure Your Healthcare"
        highlight="Data Today"
        text="Do not risk devastating patient data breaches or severe regulatory penalties."
        primaryCta="Get a Free HIPAA Consultation"
        secondaryCta="Talk to a Compliance Expert"
      />

      <ServiceFaq
        label="HIPAA Audit"
        title="HIPAA Audit"
        highlight="FAQs"
        subtitle="Quick answers on HIPAA compliance, PHI, applicability, and readiness timelines."
        faqs={faqs}
      />

      <ServiceContact
        defaultInquiry="HIPAA Audit"
        inquiryOptions={inquiryOptions}
        heading="Discuss Your HIPAA Compliance"
      />

      <NoteSection>
        ITC India CyberSec provides HIPAA readiness, consulting, documentation, control implementation, and audit-preparation support. HIPAA compliance depends on your organization's scope, systems, and obligations. Readiness support does not guarantee a particular audit outcome or regulatory determination.
      </NoteSection>
    </main>
  )
}
