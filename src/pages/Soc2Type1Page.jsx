import Icon from '../components/Icon'
import {
  AudienceSection,
  CheckList,
  CtaBanner,
  NoteSection,
  ProcessSection,
  SectionHeader,
  ServiceContact,
  ServiceFaq,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793852573/1caa10a9-48a1-45ea-bdf0-05d46ab2ca1b_sthrkh.png'

const serviceImage = {
  src: 'https://res.cloudinary.com/didtfhfme/image/upload/v1793784462/da45355a-19e6-4028-a2f7-d179bec5f336_lz2cw9.png',
  alt: 'Compliance and security controls aligned with SOC 2 Trust Services Criteria',
}

const criteria = [
  {
    icon: 'shield',
    title: 'Security',
    desc: 'Protect systems and information against unauthorized access, disclosure, and damage through access controls, monitoring, risk management, and security practices.',
  },
  {
    icon: 'globe',
    title: 'Availability',
    desc: 'Support reliable system operation through resilience planning, monitoring, backup strategies, and business continuity measures.',
  },
  {
    icon: 'refresh',
    title: 'Processing Integrity',
    desc: 'Help ensure that system processing is complete, accurate, timely, and authorized according to defined business requirements.',
  },
  {
    icon: 'lock',
    title: 'Confidentiality',
    desc: 'Protect confidential information through classification, access restrictions, encryption, and secure handling practices.',
  },
  {
    icon: 'eye',
    title: 'Privacy',
    desc: 'Support appropriate collection, use, retention, disclosure, and disposal of personal information in accordance with applicable commitments and policies.',
  },
]

const services = [
  {
    icon: 'target',
    title: 'SOC 2 Type I Readiness Assessment',
    desc: 'Understand where your organization stands before beginning a formal SOC 2 Type I examination. We assess your existing security practices, policies, systems, and controls against the applicable SOC 2 Trust Services Criteria.',
    items: [
      'SOC 2 scope definition and system boundary assessment',
      'Trust Services Criteria applicability assessment',
      'Security gap analysis and risk assessment',
      'Review of existing policies and procedures',
      'Control design and implementation assessment',
      'Remediation roadmap with prioritized actions',
      'Readiness review before formal examination',
    ],
  },
  {
    icon: 'document',
    title: 'SOC 2 Documentation & Policy Development',
    desc: 'Develop the documentation required to support your SOC 2 program and demonstrate consistent security practices. Documentation is tailored to your size, business model, technology environment, and audit scope.',
    items: [
      'Information Security Policy',
      'Risk Assessment and Risk Management Policy',
      'Access Control and Identity Management Policy',
      'Incident Response and Management Policy',
      'Business Continuity and Disaster Recovery Policy',
      'Change Management Policy',
      'Asset Management Policy',
      'Vendor and Third-Party Risk Management Policy',
      'Data Classification and Data Protection Policy',
      'Secure Development and Vulnerability Management Policies',
      'Employee Security Handbook',
      'Supporting procedures, registers, and control documentation',
    ],
  },
  {
    icon: 'shield',
    title: 'Security Control Implementation',
    desc: 'We help organizations move beyond documentation by implementing practical security controls that support SOC 2 readiness. Our technical team works with your infrastructure and development teams to strengthen security and address identified gaps.',
    items: [
      'Identity and access management',
      'Multi-factor authentication (MFA)',
      'Privileged access management',
      'Endpoint security and hardening',
      'Vulnerability assessment and penetration testing (VAPT)',
      'Security monitoring and logging',
      'Backup and recovery controls',
      'Cloud security configuration reviews',
      'Secure software development practices',
      'Incident response planning and testing',
      'Risk remediation and security improvements',
    ],
  },
  {
    icon: 'search',
    title: 'SOC 2 Evidence & Audit Preparation',
    desc: 'Prepare organized, relevant, and traceable evidence to support your SOC 2 examination. We help establish evidence collection processes, assign control ownership, and prepare your team for auditor requests.',
    items: [
      'Evidence collection planning',
      'Control-to-evidence mapping',
      'Review of screenshots, logs, records, and supporting documents',
      'Control owner and responsibility mapping',
      'Internal walkthroughs and readiness checks',
      'Audit request preparation',
      'Remediation tracking',
      'Coordination with the independent CPA audit firm',
    ],
  },
  {
    icon: 'refresh',
    title: 'SOC 2 Type II Readiness & Ongoing Compliance',
    desc: 'After Type I readiness, organizations can continue strengthening their compliance program and prepare for SOC 2 Type II. We support repeatable processes, ongoing evidence collection, control monitoring, and readiness for an observation period so controls remain consistent for future independent examinations.',
  },
]

const approach = [
  { title: 'Discovery & Scope Definition', desc: 'Understand your business, services, systems, infrastructure, customer commitments, and SOC 2 objectives.' },
  { title: 'Gap Assessment', desc: 'Evaluate existing policies, processes, and security controls against applicable SOC 2 requirements.' },
  { title: 'Documentation & Control Design', desc: 'Develop required policies, procedures, risk registers, and control documentation.' },
  { title: 'Implementation & Remediation', desc: 'Work with your team to implement technical and organizational controls and address identified gaps.' },
  { title: 'Evidence Preparation & Readiness Review', desc: 'Review control evidence, validate implementation, and prepare your organization for the formal examination.' },
  { title: 'Independent Audit Coordination', desc: 'Support your organization during the independent SOC 2 examination conducted by a qualified CPA firm.' },
  { title: 'Continuous Compliance Support', desc: 'Help maintain controls, monitor evidence, and prepare for future SOC 2 Type II examinations.' },
]

const audience = [
  'SaaS and software development companies',
  'Cloud service providers',
  'IT and technology service organizations',
  'AI and machine learning companies',
  'Fintech and digital payment technology providers',
  'BPOs and business process service providers',
  'Organizations handling sensitive customer information',
  'Startups preparing to enter enterprise markets',
  'Businesses responding to customer security and compliance requirements',
]

const faqs = [
  {
    q: 'What is SOC 2 Type I readiness?',
    a: "SOC 2 Type I readiness is the process of assessing and preparing an organization's policies, systems, and controls before a formal examination of control design and implementation at a specific point in time.",
  },
  {
    q: 'Does ITC India CyberSec provide end-to-end SOC 2 support?',
    a: 'Yes. We support scope definition, gap assessment, documentation, security control implementation, evidence preparation, remediation, and coordination with the independent audit firm.',
  },
  {
    q: 'Can a startup prepare for SOC 2?',
    a: 'Yes. SOC 2 readiness can be tailored to startups and growing businesses based on their systems, customer commitments, risks, and operational complexity.',
  },
  {
    q: 'How long does SOC 2 Type I readiness take?',
    a: 'The timeline depends on your existing security maturity, scope, documentation, and control gaps. A readiness assessment helps establish a realistic implementation plan.',
  },
  {
    q: 'Is SOC 2 a certification?',
    a: 'SOC 2 is an independent attestation examination, not a certification. A qualified independent CPA firm conducts the examination and issues the SOC 2 report.',
  },
  {
    q: 'Can we move from SOC 2 Type I to Type II?',
    a: 'Yes. Organizations can build on their Type I work by operating controls consistently, collecting evidence over the required period, and preparing for a Type II examination.',
  },
]

const inquiryOptions = [
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'ISO 27001',
  'ISO 27000',
  'ISO 27701',
  'HIPAA Audit',
  'WAPT',
  'VAPT',
  'AI/ML Testing',
  'IoT Testing',
  'Other',
]

export default function Soc2Type1Page() {
  usePageMeta(
    'SOC 2 Type I Readiness & Compliance Services | ITC India CyberSec',
    'Prepare for SOC 2 Type I with ITC India CyberSec. Get readiness assessment, policies, security controls, evidence preparation, and audit support.',
  )

  return (
    <main className="svc-page">
      <ServiceHero
        eyebrow="SOC 2 Compliance & Readiness Services"
        title="Prepare for SOC 2 Type I"
        highlight="with Confidence"
        quote="Get SOC 2 Ready. Build Trust. Accelerate Business Growth."
        text="Build customer trust, strengthen your security posture, and prepare your organization for SOC 2 attestation with ITC India CyberSec. We help SaaS companies, technology providers, cloud-based businesses, and service organizations establish the policies, processes, and security controls needed for SOC 2 readiness."
        primaryCta="Get SOC 2 Consultation"
        secondaryCta="Start Your Readiness Assessment"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding SOC 2"
            title="What Is"
            highlight="SOC 2?"
            subtitle="SOC 2 is an assurance framework developed by the American Institute of Certified Public Accountants (AICPA) to evaluate how service organizations manage and protect information."
          />
          <div className="svc-overview-grid">
            <div className="svc-intro-card">
              <p>
                SOC 2 focuses on controls related to security, availability, processing integrity, confidentiality, and privacy. It helps organizations demonstrate their commitment to protecting customer data, managing risks, and maintaining reliable business operations.
              </p>
              <p>
                For companies working with enterprise customers, SaaS platforms, and international clients, SOC 2 readiness can help address security expectations and strengthen confidence during vendor assessments.
              </p>
            </div>

            <aside className="svc-glance-card">
              <div className="section-label">At a glance</div>
              <h3 className="svc-glance-title">
                End-to-End <span className="highlight-text">Type I Readiness</span>
              </h3>
              <p>
                From initial gap assessment to control implementation, documentation, evidence preparation, and audit coordination, our team provides end-to-end support throughout your SOC 2 journey.
              </p>
              <CheckList
                items={[
                  'Scope definition and gap assessment',
                  'Tailored policies and documentation',
                  'Practical security control implementation',
                  'Evidence preparation and audit coordination',
                ]}
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft svc-services-compact">
        <div className="container">
          <SectionHeader
            label="Our SOC 2 Services"
            title="Readiness, Implementation"
            highlight="& Audit Support"
            subtitle="From scope definition through independent audit coordination, we help you build a practical, evidence-ready SOC 2 program."
          />
          <div className="svc-services-layout">
            <figure className="svc-services-visual">
              <img src={serviceImage.src} alt={serviceImage.alt} loading="lazy" />
              <figcaption className="svc-services-visual-content">
                <span className="svc-services-visual-kicker">SOC 2 Readiness</span>
                <strong>From scope definition to audit support</strong>
              </figcaption>
            </figure>

            <div className="svc-service-list">
              {services.map((service, index) => (
                <article className="svc-service-item" key={service.title}>
                  <div className="svc-service-summary">
                    <span className="svc-service-icon"><Icon name={service.icon} /></span>
                    <span className="svc-service-title">
                      <span className="svc-service-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="svc-service-name">{service.title}</span>
                    </span>
                  </div>
                  <div className="svc-service-body">
                    {service.desc && <p>{service.desc}</p>}
                    {service.items && <CheckList items={service.items} />}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-white svc-trust-criteria">
        <div className="container">
          <SectionHeader
            label="Trust Services Criteria"
            title="The Five SOC 2"
            highlight="Trust Services Criteria"
            subtitle="We help organizations assess and implement controls aligned with the applicable Trust Services Criteria. Security is the foundational criterion. The other criteria are included based on your services, commitments, and examination scope."
          />
          <div className="svc-trust-grid">
            {criteria.map((item, index) => (
              <article
                key={item.title}
                className={`svc-trust-card${index === 0 ? ' svc-trust-card-featured' : ''}`}
              >
                <div className="svc-trust-card-top">
                  <span className="svc-trust-icon"><Icon name={item.icon} /></span>
                  {index === 0
                    ? <span className="svc-trust-badge">Foundational</span>
                    : <span className="svc-trust-index">{String(index + 1).padStart(2, '0')}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        label="Our Approach"
        title="Our SOC 2"
        highlight="Readiness Approach"
        subtitle="A structured path from discovery to continuous compliance."
        steps={approach}
      >
        <div className="svc-video-block">
          <video
            src="https://res.cloudinary.com/didtfhfme/video/upload/v1793678933/grok-video-4e3f1a02-cropped_xjhk4h.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </ProcessSection>

      <AudienceSection
        label="Ideal For"
        title="Who Needs SOC 2"
        highlight="Readiness Services?"
        items={audience}
        callout="Whether you are preparing for your first SOC 2 examination or strengthening an existing security program, we help create a structured and practical path forward."
        className="svc-audience-compact"
      />

      <ServiceFaq
        title="SOC 2 Type I Readiness"
        highlight="FAQs"
        subtitle="Quick answers on readiness, scope, timelines, and the difference between attestation and certification."
        faqs={faqs}
      />

      <CtaBanner
        title="Start Your SOC 2 Journey with"
        highlight="ITC India CyberSec"
        text="Prepare your organization for enterprise security expectations with a structured SOC 2 readiness program."
        primaryCta="Contact Our SOC 2 Experts"
        secondaryCta="Request a Readiness Assessment"
      />

      <ServiceContact defaultInquiry="SOC 2 Type I Readiness" inquiryOptions={inquiryOptions} heading="Contact Our SOC 2 Experts" />

      <NoteSection>
        ITC India CyberSec provides SOC 2 readiness, consulting, implementation, and audit preparation support. The formal SOC 2 examination and report issuance must be performed by an independent qualified CPA firm. Readiness support does not guarantee a particular audit opinion or report outcome.
      </NoteSection>
    </main>
  )
}
