  import Icon from '../components/Icon'
import {
  AudienceSection,
  CheckList,
  CompareSection,
  CtaBanner,
  NoteSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceFaq,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793853962/deeaa4f2-cdf2-44dd-88ad-edf839667d0d_he4wfa.png'

const criteria = [
  {
    icon: 'shield',
    title: 'Security',
    desc: 'Protect systems and information against unauthorized access, disclosure, and damage.',
  },
  {
    icon: 'globe',
    title: 'Availability',
    desc: 'Support the availability of systems and services according to applicable commitments.',
  },
  {
    icon: 'refresh',
    title: 'Processing Integrity',
    desc: 'Ensure system processing is complete, valid, accurate, timely, and authorized.',
  },
  {
    icon: 'lock',
    title: 'Confidentiality',
    desc: 'Protect information designated as confidential throughout its lifecycle.',
  },
  {
    icon: 'eye',
    title: 'Privacy',
    desc: 'Address the collection, use, retention, disclosure, and disposal of personal information in accordance with applicable commitments and criteria.',
  },
]

const services = [
  {
    icon: 'target',
    title: 'SOC 2 Readiness Assessment',
    desc: 'We review your existing security practices, systems, processes, and documentation to identify gaps against the applicable SOC 2 Trust Services Criteria.',
    items: [
      'Current control maturity',
      'Missing or incomplete policies and procedures',
      'Security risks and compliance gaps',
      'Evidence and audit-readiness requirements',
      'Remediation priorities',
    ],
  },
  {
    icon: 'document',
    title: 'SOC 2 Policies & Documentation',
    desc: 'We help develop and customize documentation based on your services, size, systems, and risk profile. Documentation is tailored to your organization rather than provided as generic templates.',
    items: [
      'Information Security Policy',
      'Access Control Policy',
      'Risk Assessment and Management Policy',
      'Incident Response Plan',
      'Business Continuity and Disaster Recovery Plan',
      'Change Management Policy',
      'Vendor Risk Management Policy',
      'Data Classification and Handling Policy',
      'Employee Security Handbook',
      'Asset Management and Acceptable Use Policies',
    ],
  },
  {
    icon: 'shield',
    title: 'Security Control Implementation',
    desc: 'We support the implementation and improvement of controls required for your SOC 2 scope.',
    items: [
      'Identity and access management',
      'Multi-factor authentication',
      'Asset and vulnerability management',
      'Security monitoring and logging',
      'Incident response processes',
      'Secure development and change management',
      'Backup and recovery practices',
      'Employee onboarding and offboarding controls',
      'Vendor and third-party risk management',
      'Security awareness and training',
    ],
  },
  {
    icon: 'scale',
    title: 'Risk Assessment & Remediation',
    desc: 'We help identify and evaluate risks affecting your systems, services, and information assets.',
    items: [
      'Asset identification and classification',
      'Risk analysis and treatment planning',
      'Control mapping to identified risks',
      'Remediation tracking',
      'Risk register development',
      'Review of residual risks and management actions',
    ],
  },
  {
    icon: 'search',
    title: 'Evidence Collection & Audit Preparation',
    desc: 'SOC 2 Type II requires evidence that controls operated effectively during the examination period. We help establish evidence collection processes and organize supporting records.',
    items: [
      'Access reviews and user access records',
      'Security awareness training records',
      'Vulnerability scans and remediation evidence',
      'Change management approvals',
      'Incident response records',
      'Backup and recovery test evidence',
      'Vendor assessments',
      'Monitoring and review logs',
      'Policies, procedures, and control-owner records',
    ],
  },
  {
    icon: 'badge',
    title: 'Type II Examination Readiness Support',
    desc: 'Before the independent examination, we help review the organization’s readiness, identify outstanding gaps, and prepare teams for the audit process.',
    items: [
      'Readiness review and gap closure',
      'Control-owner interviews and walkthrough preparation',
      'Evidence completeness checks',
      'Audit request coordination',
      'Support during auditor queries',
      'Remediation planning for identified exceptions',
    ],
  },
]

const approach = [
  { title: 'Discovery & Scope Definition', desc: 'Understand your services, systems, customers, data flows, and business requirements.' },
  { title: 'Gap Assessment', desc: 'Evaluate existing controls and documentation against the applicable SOC 2 criteria.' },
  { title: 'Readiness Roadmap', desc: 'Develop a prioritized remediation plan with control owners, responsibilities, and target dates.' },
  { title: 'Documentation & Control Implementation', desc: 'Create or improve policies, procedures, and operational security controls.' },
  { title: 'Evidence Process Setup', desc: 'Establish repeatable processes for collecting and maintaining evidence throughout the examination period.' },
  { title: 'Readiness Review', desc: 'Review control implementation, evidence, and unresolved gaps before the independent examination.' },
  { title: 'Independent Examination Support', desc: 'Help coordinate auditor requests and support your team during the examination process.' },
  { title: 'Continuous Compliance', desc: 'Maintain controls, evidence, and corrective actions for ongoing compliance.' },
]

const audience = [
  'SaaS and software development companies',
  'Cloud service providers',
  'IT and managed service providers',
  'AI and technology companies',
  'Fintech and digital platforms',
  'BPO and business process service providers',
  'Organizations handling customer or confidential data',
  'Startups and growing businesses serving enterprise customers',
]

const comparisonRows = [
  { feature: 'Evaluation Scope', a: 'Evaluates control design as of a specific date', b: 'Evaluates control design and operating effectiveness over a defined period' },
  { feature: 'Control Question', a: 'Focuses on whether controls are suitably designed', b: 'Includes testing to determine whether controls operated effectively' },
  { feature: 'Time Perspective', a: 'Provides a point-in-time view', b: 'Provides evidence of control operation over time' },
  { feature: 'Typical Use', a: 'May be used as an initial readiness milestone', b: 'Commonly requested for ongoing assurance by customers and partners' },
]

const faqs = [
  {
    q: 'What is SOC 2 Type II readiness?',
    a: 'SOC 2 Type II readiness is the process of assessing, improving, and preparing an organization’s controls and documentation before an independent SOC 2 Type II examination.',
  },
  {
    q: 'What is the difference between SOC 2 Type I and Type II?',
    a: 'Type I evaluates whether controls are suitably designed as of a specific date. Type II also evaluates whether those controls operated effectively over a defined period.',
  },
  {
    q: 'How long does SOC 2 Type II readiness take?',
    a: 'The timeline depends on your organization’s size, scope, existing controls, documentation, and remediation needs. The examination period is determined with the independent auditor and is separate from the readiness work. We help establish a practical timeline based on your current maturity and target requirements.',
  },
  {
    q: 'Does ITC India CyberSec issue the SOC 2 Type II report?',
    a: 'ITC India CyberSec provides readiness, consulting, documentation, implementation, and audit-preparation support. The formal SOC 2 Type II examination and report must be completed by an independent qualified CPA firm.',
  },
  {
    q: 'Can startups prepare for SOC 2 Type II?',
    a: 'Yes. Startups can begin by defining the scope of their services, assessing risks, implementing appropriate controls, and establishing evidence collection processes. The readiness plan should be proportionate to the organization’s size and risk profile.',
  },
  {
    q: 'Do we need to maintain evidence throughout the examination period?',
    a: 'Yes. SOC 2 Type II involves testing controls over a defined period, so organizations should maintain consistent, organized evidence that demonstrates how applicable controls operated.',
  },
  {
    q: 'Can you help us after the readiness assessment?',
    a: 'Yes. Support can continue through documentation updates, control implementation, evidence preparation, readiness reviews, and coordination during the independent examination.',
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

export default function Soc2Type2Page() {
  usePageMeta(
    'SOC 2 Type II Readiness & Compliance Services | ITC India CyberSec',
    'Prepare for SOC 2 Type II with ITC India CyberSec. Get end-to-end readiness assessment, policies, security controls, evidence preparation, and audit support.',
  )

  return (
    <main className="svc-page">
      <ServiceHero
        eyebrow="SOC 2 Type II Readiness & Compliance Services"
        title="Prepare for SOC 2 Type II"
        highlight="with Confidence"
        quote="From initial assessment to audit readiness, we support your SOC 2 journey at every stage."
        text="Build trust with customers, strengthen your security controls, and prepare your organization for a SOC 2 Type II examination with end-to-end readiness support from ITC India CyberSec. We help organizations assess security gaps, develop policies and procedures, implement practical controls, maintain evidence, and prepare for an independent SOC 2 Type II examination."
        primaryCta="Get a SOC 2 Readiness Assessment"
        secondaryCta="Talk to Our Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding the Report"
            title="What Is"
            highlight="SOC 2 Type II?"
            subtitle="SOC 2 is an independent examination framework used to evaluate controls relevant to the security, availability, processing integrity, confidentiality, and privacy of information systems."
          />
          <div className="svc-overview-grid">
            <div className="svc-intro-card">
              <p>
                A SOC 2 Type II report evaluates whether an organization’s controls are suitably designed and operating effectively over a defined period of time. The examination includes testing of controls and review of supporting evidence by an independent service auditor.
              </p>
              <p>
                SOC 2 Type II is commonly requested by enterprise customers, technology partners, and organizations that need assurance about how their service providers manage data and security risks.
              </p>
              <p>
                SOC 2 is an attestation report, not a certification. The formal examination and report must be issued by an independent qualified CPA firm.
              </p>
            </div>

            <aside className="svc-glance-card">
              <div className="section-label">At a glance</div>
              <h3 className="svc-glance-title">Built for operating effectiveness</h3>
              <CheckList
                items={[
                  'Readiness assessment and remediation roadmap',
                  'Policies, procedures, and control documentation',
                  'Evidence processes for the examination period',
                  'Audit coordination and ongoing compliance support',
                ]}
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Our SOC 2 Type II"
            highlight="Readiness Services"
            subtitle="ITC India CyberSec provides practical, end-to-end support to help organizations prepare for SOC 2 Type II."
          />
          <ServiceCardGrid services={services} />
        </div>
      </section>

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Trust Services Criteria"
            title="SOC 2"
            highlight="Trust Services Criteria"
            subtitle="SOC 2 engagements are scoped around one or more of the following criteria. The Security criterion is included in SOC 2 engagements. Other criteria are selected based on the organization’s services, commitments, and customer requirements."
          />
          <div className="soc3-highlight-grid">
            {criteria.map((item) => (
              <div key={item.title} className="soc3-highlight-card">
                <Icon name={item.icon} className="soc3-highlight-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding soc3-process svc-approach-split">
        <div className="container">
          <div className="svc-approach-layout">
            <div className="svc-approach-main">
              <SectionHeader
                label="Our Approach"
                title="Our SOC 2 Type II"
                highlight="Readiness Approach"
                subtitle="Eight coordinated steps from discovery through continuous compliance."
              />
              <div className="svc-approach-steps">
                {approach.map((step, index) => (
                  <div className="svc-approach-step" key={step.title}>
                    <span className="svc-approach-step-num">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceSection
        label="Ideal For"
        title="Who Needs"
        highlight="SOC 2 Type II?"
        items={audience}
        callout="Whether you are preparing for your first SOC 2 examination or improving an existing compliance program, we help you build a practical readiness roadmap."
      />

      <CompareSection
        label="SOC 2 Type I vs SOC 2 Type II"
        title="SOC 2 Type I"
        highlight="vs SOC 2 Type II"
        subtitle="For organizations seeking deeper assurance, Type II readiness includes preparing controls and evidence to demonstrate consistent operation throughout the examination period."
        columns={['SOC 2 Type I', 'SOC 2 Type II']}
        rows={comparisonRows}
        callout="Type I provides a point-in-time view. Type II provides evidence of control operation over time."
      />

      <ServiceFaq
        title="SOC 2 Type II Readiness"
        highlight="FAQs"
        subtitle="Quick answers on readiness, evidence, timelines, and the independent examination."
        faqs={faqs}
      />

      <CtaBanner
        title="Start Your SOC 2 Type II"
        highlight="Readiness Journey"
        text="Prepare your organization to demonstrate security, build customer confidence, and strengthen your compliance program with ITC India CyberSec."
        primaryCta="Schedule a SOC 2 Readiness Consultation"
        secondaryCta="Talk to Our Experts"
      />

      <ServiceContact defaultInquiry="SOC 2 Type II Readiness" inquiryOptions={inquiryOptions} heading="Contact Our SOC 2 Type II Experts" />

      <NoteSection>
        ITC India CyberSec provides SOC 2 Type II readiness, consulting, documentation, implementation, and audit-preparation support. The formal SOC 2 Type II examination and report must be completed by an independent qualified CPA firm. Readiness support does not guarantee a particular audit opinion or report outcome.
      </NoteSection>
    </main>
  )
}
