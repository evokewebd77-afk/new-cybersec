import {
  AudienceSection,
  CheckList,
  CtaBanner,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793869197/cf008c5c-ad6c-4b0f-99ad-b1f80cbb214d_hjsv4l.webp'

const privacyControls = [
  {
    icon: 'check',
    title: 'Consent Management',
    desc: 'Establish clear, transparent ways to obtain and manage consent where it applies.',
    items: ['Granular choices', 'Preference management', 'Documented opt-out handling'],
  },
  {
    icon: 'eye',
    title: 'Data Subject Rights',
    desc: 'Create processes to receive, assess, and respond to privacy requests.',
    items: ['Access requests', 'Erasure requests', 'Data portability'],
  },
  {
    icon: 'globe',
    title: 'Sovereignty & Transfers',
    desc: 'Understand personal information flows and assess applicable transfer obligations.',
    items: ['Cross-border data mapping', 'Transfer safeguards', 'Data localization considerations'],
  },
  {
    icon: 'lock',
    title: 'Encryption & Anonymity',
    desc: 'Apply safeguards that reduce exposure and help protect personal information.',
    items: ['Pseudonymization', 'Hashing', 'Data masking'],
  },
]

const benefits = [
  { icon: 'scale', title: 'Demonstrable accountability', desc: 'Organize privacy responsibilities, controls, and evidence to support applicable obligations.' },
  { icon: 'handshake', title: 'Greater stakeholder trust', desc: 'Show customers and partners that privacy practices are managed systematically.' },
  { icon: 'shield', title: 'Better-managed privacy risk', desc: 'Identify and address risks to personal information across relevant processes.' },
  { icon: 'badge', title: 'A stronger market position', desc: 'Support assurance conversations with a structured privacy management approach.' },
  { icon: 'target', title: 'Reduced potential impact', desc: 'Improve preparedness to prevent, identify, and respond to privacy incidents.' },
]

const journey = [
  { title: 'Privacy Gap Analysis', desc: 'Review existing privacy and information security practices against applicable ISO/IEC 27701 requirements.' },
  { title: 'PII Mapping', desc: 'Identify personal information, processing activities, data flows, and relevant roles across the agreed scope.' },
  { title: 'Policy & Process Alignment', desc: 'Review privacy notices, processing agreements, rights handling, and related governance procedures.' },
  { title: 'Control Implementation', desc: 'Support suitable privacy-by-design practices and technical safeguards, such as masking and encryption.' },
  { title: 'Internal Readiness Review', desc: 'Check implementation, evidence, and corrective actions before an independent certification audit.' },
  { title: 'Certification Audit Support', desc: 'Prepare for the certification process and coordinate readiness activities with the independent certification body.' },
]

const coverage = [
  { icon: 'globe', title: 'Privacy Law Alignment', desc: 'Map privacy management practices to applicable obligations, such as GDPR and CCPA, based on your context.' },
  { icon: 'lock', title: 'Sensitive Data Protection', desc: 'Apply appropriate safeguards to personal information that presents elevated privacy or security risks.' },
  { icon: 'target', title: 'Privacy by Design', desc: 'Consider privacy risks and safeguards during system, product, and process design.' },
  { icon: 'handshake', title: 'Processor Management', desc: 'Define responsibilities and assess privacy risks across processors and service providers.' },
  { icon: 'shield', title: 'Incident Preparedness', desc: 'Establish processes for assessing and managing incidents involving personal information.' },
  { icon: 'refresh', title: 'Data Lifecycle', desc: 'Address retention, use, access, and secure disposal throughout the information lifecycle.' },
]

const audience = [
  'Advertising technology platforms',
  'E-commerce organizations',
  'Health technology providers',
  'Cloud and data service providers',
  'Social networks and digital platforms',
]

const inquiryOptions = [
  'ISO 27701',
  'ISO 27001',
  'ISO 27000',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'HIPAA Audit',
  'WAPT',
  'VAPT',
  'AI/ML Testing',
  'IoT Testing',
  'Drone Testing',
  'Other',
]

export default function Iso27701Page() {
  usePageMeta(
    'ISO/IEC 27701 Privacy Certification Readiness | ITC India CyberSec',
    'Prepare for ISO/IEC 27701 with privacy gap analysis, PII mapping, PIMS governance, control implementation, and certification audit readiness support.',
  )

  return (
    <main className="svc-page iso27701-page">
      <ServiceHero
        eyebrow="Privacy Information Management"
        title="ISO 27701"
        highlight="Privacy Certification"
        quote="Beyond Security. Into Total Privacy. Compliance for the Data Age."
        text="ISO/IEC 27701 provides requirements and guidance for a Privacy Information Management System (PIMS). We help organizations understand their personal information processing, strengthen privacy governance, and prepare for relevant certification requirements."
        primaryCta="Start PIMS Audit"
        secondaryCta="Talk to a Privacy Expert"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white iso27701-overview">
        <div className="container">
          <SectionHeader
            label="The Privacy Extension"
            title="What Is"
            highlight="ISO 27701?"
            subtitle="ISO/IEC 27701 extends privacy information management practices alongside an information security management system. It helps organizations structure privacy controls and responsibilities for personal information."
          />
          <ServiceCardGrid services={privacyControls} />
        </div>
      </section>

      <section className="section-padding iso27701-value">
        <div className="container">
          <SectionHeader
            label="Unified Compliance"
            title="The Power of ISO 27001"
            highlight="+ ISO 27701"
            subtitle="Security and privacy work together. An aligned ISMS and PIMS can help connect information security controls with the management of personal information."
          />
          <ServiceCardGrid services={benefits} />
        </div>
      </section>

      <section className="section-padding svc-bg-white iso27701-roadmap">
        <div className="container">
          <SectionHeader
            label="Privacy Roadmap"
            title="Choose Your Path to"
            highlight="Privacy Readiness"
            subtitle="Start with a clear view of personal information and privacy gaps, then extend the work into a broader PIMS implementation and certification readiness program."
          />
          <div className="iso27001-stage-grid">
            <article className="iso27001-stage-card">
              <span className="iso27001-stage-number">01</span>
              <span className="iso27001-stage-label">Stage 1 · PII Audit</span>
              <h3>PII Analysis &amp; Inventory</h3>
              <p className="iso27001-stage-quote">“Map where personal information is collected, used, and shared.”</p>
              <div className="iso27001-stage-details">
                <div>
                  <h4>Audit Focus</h4>
                  <CheckList items={['Data flow mapping', 'Privacy gap review', 'PII risk register']} />
                </div>
                <div>
                  <h4>Value</h4>
                  <CheckList items={['Improved data visibility', 'Privacy risk awareness', 'Prioritized next steps']} />
                </div>
              </div>
            </article>
            <article className="iso27001-stage-card iso27001-stage-featured">
              <span className="iso27001-stage-number">02</span>
              <span className="iso27001-stage-label">Stage 2 · Full PIMS</span>
              <h3>PIMS Implementation &amp; Readiness</h3>
              <p className="iso27001-stage-quote">“Connect privacy governance, controls, and evidence.”</p>
              <div className="iso27001-stage-details">
                <div>
                  <h4>Focus</h4>
                  <CheckList items={['PIMS scope and responsibilities', 'Privacy policies and controls', 'Monitoring and review']} />
                </div>
                <div>
                  <h4>Value</h4>
                  <CheckList items={['Consistent privacy practices', 'Organized audit evidence', 'Certification readiness']} />
                </div>
              </div>
            </article>
          </div>
          <p className="iso27001-stage-note">Certification is granted by an independent certification body following its audit. Readiness support helps prepare your PIMS but does not guarantee certification.</p>
        </div>
      </section>

      <ProcessSection
        label="How We Work"
        title="Your PIMS"
        highlight="Journey"
        subtitle="A structured, risk-aware approach to preparing your privacy management system for assessment."
        steps={journey}
        className="iso27701-journey"
      />

      <section className="section-padding svc-bg-white iso27701-coverage">
        <div className="container">
          <SectionHeader
            label="PIMS Coverage"
            title="A Practical Approach to"
            highlight="Privacy Management"
            subtitle="Define controls and responsibilities around the personal information, processing activities, and obligations in your agreed scope."
          />
          <ServiceCardGrid services={coverage} />
        </div>
      </section>

      <AudienceSection
        label="Who Needs It?"
        title="For Organizations Handling"
        highlight="Personal Information"
        items={audience}
        callout="If your organization processes personal information, a structured PIMS can help demonstrate how privacy risks and responsibilities are managed."
        className="iso27701-audience"
      />

      <CtaBanner
        title="Build Trust Through"
        highlight="Privacy Management"
        text="Start with a PII audit or plan a broader PIMS readiness engagement tailored to your processing activities and obligations."
        primaryCta="Start PIMS Audit"
        secondaryCta="Talk to a Privacy Expert"
      />

      <ServiceContact
        defaultInquiry="ISO 27701"
        inquiryOptions={inquiryOptions}
        heading="Talk to Our ISO 27701 Privacy Experts"
      />
    </main>
  )
}
