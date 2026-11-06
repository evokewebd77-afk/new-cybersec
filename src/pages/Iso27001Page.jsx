import {
  AudienceSection,
  CheckList,
  CtaBanner,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceFaq,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793861733/327999c7-95d8-4218-9dc7-db7b0d1bbde5_eincyx.png'
const coverageImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793862231/306eb048-4efd-4d89-bf8e-1adf879e80c1_fz3pz6.png'

const principles = [
  {
    icon: 'lock',
    title: 'Confidentiality',
    desc: 'Make sure information is available only to people who are authorized to access it.',
    items: ['Access control', 'Data encryption', 'Secure disposal'],
  },
  {
    icon: 'scale',
    title: 'Integrity',
    desc: 'Safeguard the accuracy and completeness of information and its processing.',
    items: ['Change management', 'Input validation', 'Data consistency'],
  },
  {
    icon: 'bolt',
    title: 'Availability',
    desc: 'Keep information and associated assets accessible to authorized users when needed.',
    items: ['Disaster recovery', 'Incident response', 'System availability'],
  },
  {
    icon: 'target',
    title: 'Risk Management',
    desc: 'Systematically identify, assess, and treat information security risks.',
    items: ['Gap analysis', 'Risk assessment', 'Treatment plans'],
  },
]

const benefits = [
  { icon: 'globe', title: 'Global recognition', desc: 'Demonstrate an information security program aligned with an internationally recognized standard.' },
  { icon: 'handshake', title: 'Enterprise opportunities', desc: 'Support customer and supplier due diligence with a structured, independently assessed ISMS.' },
  { icon: 'shield', title: 'Reduced security risk', desc: 'Identify risks and prioritize appropriate safeguards across people, processes, and technology.' },
  { icon: 'lock', title: 'Stronger data protection', desc: 'Establish repeatable practices for protecting sensitive business and customer information.' },
  { icon: 'trend', title: 'Confident onboarding', desc: 'Respond to security expectations with clear policies, defined controls, and organized evidence.' },
]

const journey = [
  { title: 'Gap Analysis', desc: 'Assess current practices, identify gaps against applicable ISO 27001 requirements, and establish priorities.' },
  { title: 'ISMS Design', desc: 'Define the ISMS scope, governance, policies, risk methodology, and control responsibilities.' },
  { title: 'Implementation', desc: 'Support the rollout of appropriate technical and organizational controls and address identified risks.' },
  { title: 'Staff Training', desc: 'Build awareness of information security responsibilities and relevant procedures across the organization.' },
  { title: 'Internal Audit', desc: 'Review ISMS implementation and effectiveness, and track corrective actions before certification.' },
  { title: 'Certification Audit Support', desc: 'Organize evidence and coordinate readiness for the independent audit conducted by a certification body.' },
]

const auditScope = [
  { icon: 'target', title: 'Governance', desc: 'Leadership, ISMS objectives, accountability, and strategic alignment.' },
  { icon: 'devices', title: 'Asset Security', desc: 'Identification, ownership, classification, and protection of information assets.' },
  { icon: 'lock', title: 'Physical Security', desc: 'Appropriate safeguards for premises, work areas, and equipment.' },
  { icon: 'handshake', title: 'Supplier Risk', desc: 'Security expectations and risk management for third-party relationships.' },
  { icon: 'monitor', title: 'Operations', desc: 'Secure day-to-day operation, access management, change, and incident handling.' },
  { icon: 'scale', title: 'Legal & Compliance', desc: 'Applicable legal, regulatory, contractual, and customer requirements.' },
]

const coverage = [
  { icon: 'document', title: 'SOC 2 / SOC 3', desc: 'Readiness and compliance support for service organizations.', items: ['Gap assessment', 'Type I and Type II support', 'Continuous compliance and SOC 3 reporting'] },
  { icon: 'shield', title: 'HIPAA', desc: 'Security and privacy safeguards for protected health information.', items: ['Risk assessment', 'Administrative safeguards', 'Technical and physical safeguards'] },
  { icon: 'globe', title: 'Web Testing', desc: 'Assess websites and web applications for security weaknesses.', items: ['OWASP Top 10 risks', 'Authentication and session security', 'Business logic issues'] },
  { icon: 'devices', title: 'Application Testing', desc: 'Security testing for mobile applications, APIs, and data handling.', items: ['Android and iOS applications', 'API security', 'Data storage and encryption'] },
  { icon: 'layers', title: 'IoT Testing', desc: 'Evaluate connected devices and their supporting software.', items: ['Firmware analysis', 'Device communication security', 'Hardware attack surface'] },
  { icon: 'target', title: 'Drone Testing', desc: 'Assess the cybersecurity of drone software and communications.', items: ['Communication security', 'GPS spoofing risks', 'Command interface security'] },
  { icon: 'search', title: 'AI/ML Testing', desc: 'Identify security risks affecting AI models and their data pipelines.', items: ['Model vulnerabilities', 'Adversarial input risks', 'Data poisoning risks'] },
]

const audience = [
  'Technology and SaaS enterprises',
  'Healthcare organizations and health technology providers',
  'Financial institutions and fintech companies',
  'Government contractors and suppliers',
  'Startups preparing for enterprise customers',
  'Organizations seeking a structured information security program',
]

const faqs = [
  {
    q: 'What is ISO/IEC 27001 certification?',
    a: 'ISO/IEC 27001 specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). An independent certification body assesses the ISMS against the standard.',
  },
  {
    q: 'How long does certification take?',
    a: 'Timing depends on the organization’s scope, size, existing controls, and readiness. A gap assessment can help identify the work required and establish a realistic implementation schedule.',
  },
  {
    q: 'Is ISO/IEC 27001 globally recognized?',
    a: 'Yes. ISO/IEC 27001 is an internationally recognized information security management standard. Certification is issued by an independent certification body following its audit process.',
  },
]

const inquiryOptions = [
  'ISO 27001',
  'ISO 27000',
  'ISO 27701',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'HIPAA Audit',
  'WAPT',
  'VAPT',
  'AI/ML Testing',
  'IOT Testing (Software only)',
  'Drone Testing (Software only)',
  'Customized Tools',
  'Other',
]

export default function Iso27001Page() {
  usePageMeta(
    'ISO/IEC 27001 Consultancy & Certification Readiness | ITC India CyberSec',
    'Prepare for ISO/IEC 27001 with ISMS gap assessment, risk management, documentation, control implementation, internal audit, and certification readiness support.',
  )

  return (
    <main className="svc-page iso27001-page">
      <ServiceHero
        eyebrow="Global Compliance Leaders"
        title="ISO 27001"
        highlight="Consultancy & Certification Services"
        quote="Secure Your Digital Future. Build Unbreakable Trust. Lead with Compliance."
        text="ITC India helps organizations prepare for ISO/IEC 27001 by turning information security into a practical, risk-led management system. Strengthen your security practices, protect business and customer information, and demonstrate your commitment to continual improvement."
        primaryCta="Start Your Audit"
        secondaryCta="Talk to Our Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white iso27001-overview">
        <div className="container">
          <SectionHeader
            label="Global Security Standard"
            title="What Is"
            highlight="ISO 27001?"
            subtitle="ISO/IEC 27001 is the international benchmark for an Information Security Management System (ISMS), helping organizations manage information security risks through people, processes, and technology."
          />
          <ServiceCardGrid services={principles} />
        </div>
      </section>

      <section className="section-padding iso27001-benefits">
        <div className="container">
          <SectionHeader
            label="The Leadership Edge"
            title="Why ISO Certification"
            highlight="Matters"
            subtitle="A well-implemented ISMS can support customer confidence, business resilience, and consistent information security practices."
          />
          <ServiceCardGrid services={benefits} />
        </div>
      </section>

      <section className="section-padding svc-bg-white iso27001-stages">
        <div className="container">
          <SectionHeader
            label="Certification Stages"
            title="Choose the Support"
            highlight="You Need"
            subtitle="Build your ISMS readiness in practical stages, from understanding current gaps to preparing for an independent certification audit."
          />
          <div className="iso27001-stage-grid">
            <article className="iso27001-stage-card">
              <span className="iso27001-stage-number">01</span>
              <span className="iso27001-stage-label">Phase 1 · Readiness</span>
              <h3>Gap Analysis &amp; Strategy</h3>
              <p className="iso27001-stage-quote">“Know where you stand before you build.”</p>
              <div className="iso27001-stage-details">
                <div>
                  <h4>Focus</h4>
                  <CheckList items={['Policy and process review', 'Asset and scope mapping', 'Risk assessment']} />
                </div>
                <div>
                  <h4>Deliverables</h4>
                  <CheckList items={['Gap assessment findings', 'Prioritized implementation roadmap', 'Readiness recommendations']} />
                </div>
              </div>
            </article>
            <article className="iso27001-stage-card iso27001-stage-featured">
              <span className="iso27001-stage-number">02</span>
              <span className="iso27001-stage-label">Phase 2 · Achievement</span>
              <h3>ISMS Implementation &amp; Audit Readiness</h3>
              <p className="iso27001-stage-quote">“Build, operate, and prepare your ISMS for independent assessment.”</p>
              <div className="iso27001-stage-details">
                <div>
                  <h4>Focus</h4>
                  <CheckList items={['ISMS design and documentation', 'Control implementation', 'Training and internal audit']} />
                </div>
                <div>
                  <h4>Deliverables</h4>
                  <CheckList items={['Implemented ISMS documentation', 'Evidence and corrective-action support', 'Certification audit preparation']} />
                </div>
              </div>
            </article>
          </div>
          <p className="iso27001-stage-note">Certification is granted by an independent certification body after its audit; readiness support does not guarantee certification.</p>
        </div>
      </section>

      <ProcessSection
        label="Precision Workflow"
        title="The ISO"
        highlight="Journey"
        subtitle="We guide you through each stage of the ISO/IEC 27001 lifecycle with a clear, risk-led process."
        steps={journey}
        className="iso27001-journey"
      />

      <section className="section-padding svc-bg-white iso27001-scope">
        <div className="container">
          <SectionHeader
            label="Audit Scope"
            title="A Management System"
            highlight="Across Your Organization"
            subtitle="The specific ISMS scope is defined with your organization and should reflect its context, boundaries, information, and applicable requirements."
          />
          <ServiceCardGrid services={auditScope} />
        </div>
      </section>

      <AudienceSection
        label="Who We Serve"
        title="ISO 27001 for"
        highlight="Organizations Like Yours"
        items={audience}
        callout="Whether you are responding to customer requirements or strengthening internal security, the ISMS should be tailored to your organization’s context, scope, and risks."
        className="iso27001-audience"
      />

      <section className="section-padding svc-bg-white iso27001-coverage">
        <div className="container">
          <SectionHeader
            label="Comprehensive Service Coverage"
            title="Security & Compliance"
            highlight="Across Your Business"
            subtitle="Explore complementary audit and security testing services to support a broader information security program."
          />
          <div className="iso27001-coverage-layout">
            <figure className="iso27001-coverage-media">
              <img
                src={coverageImage}
                alt="Cybersecurity and compliance services supporting an organization's information security program"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>One connected security program</span>
                <strong>Compliance and testing, aligned to your business.</strong>
              </figcaption>
            </figure>
            <div className="iso27001-coverage-services">
              <div className="iso27001-coverage-services-heading">
                <h3>Explore our services</h3>
                <span>01—07</span>
              </div>
              <ServiceCardGrid services={coverage} />
            </div>
          </div>
        </div>
      </section>

      <ServiceFaq
        title="ISO 27001"
        highlight="FAQs"
        subtitle="Answers to common questions about ISO/IEC 27001 and certification readiness."
        faqs={faqs}
      />

      <CtaBanner
        title="Build Trust with"
        highlight="ISO/IEC 27001"
        text="Start with a clear view of your current ISMS, the gaps to address, and a practical path toward certification readiness."
        primaryCta="Start Your Audit"
        secondaryCta="Talk to Our Experts"
      />

      <ServiceContact
        defaultInquiry="ISO 27001"
        inquiryOptions={inquiryOptions}
        heading="Talk to Our ISO 27001 Experts"
      />
    </main>
  )
}
