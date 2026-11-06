import Icon from '../components/Icon'
import {
  AudienceSection,
  CheckList,
  CompareSection,
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

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793855974/0f059114-201b-49fc-ab82-50e61bf5264f_dp4ogd.png'

const criteria = [
  {
    icon: 'shield',
    title: 'Security',
    desc: 'Protect systems and information against unauthorized access, disclosure, and damage.',
  },
  {
    icon: 'globe',
    title: 'Availability',
    desc: 'Support system availability in line with applicable service commitments.',
  },
  {
    icon: 'refresh',
    title: 'Processing Integrity',
    desc: 'Ensure system processing is complete, valid, accurate, timely, and authorized.',
  },
  {
    icon: 'lock',
    title: 'Confidentiality',
    desc: 'Protect information designated as confidential.',
  },
  {
    icon: 'eye',
    title: 'Privacy',
    desc: 'Address the collection, use, retention, disclosure, and disposal of personal information according to applicable commitments and criteria.',
  },
]

const services = [
  {
    icon: 'target',
    title: 'SOC Readiness Assessment',
    desc: 'We assess your current security practices, systems, policies, and processes to identify gaps against the applicable Trust Services Criteria.',
    items: [
      'Review of your services and system scope',
      'Evaluation of existing controls',
      'Identification of documentation gaps',
      'Risk and remediation prioritization',
      'Readiness roadmap development',
    ],
  },
  {
    icon: 'document',
    title: 'Policies & Documentation',
    desc: 'We help develop and customize policies and procedures aligned with your organization’s operations and security requirements.',
    items: [
      'Information Security Policy',
      'Access Control Policy',
      'Risk Management Policy',
      'Incident Response Plan',
      'Business Continuity and Disaster Recovery Plan',
      'Change Management Policy',
      'Vendor Risk Management Policy',
      'Data Classification and Handling Policy',
      'Asset Management Policy',
      'Employee Security Handbook',
    ],
  },
  {
    icon: 'shield',
    title: 'Security Control Implementation',
    desc: 'We support the implementation and improvement of practical controls that strengthen your control environment.',
    items: [
      'Identity and access management',
      'Multi-factor authentication',
      'Vulnerability management',
      'Security monitoring and logging',
      'Incident response processes',
      'Secure development and change management',
      'Backup and recovery controls',
      'Employee onboarding and offboarding',
      'Vendor risk management',
      'Security awareness training',
    ],
  },
  {
    icon: 'scale',
    title: 'Risk Assessment & Remediation',
    desc: 'We help identify risks affecting your systems and services, evaluate their potential impact, and establish a remediation plan.',
    items: [
      'Asset identification and classification',
      'Risk register development',
      'Risk treatment planning',
      'Control mapping',
      'Remediation tracking',
      'Periodic risk reviews',
    ],
  },
  {
    icon: 'search',
    title: 'Evidence Preparation',
    desc: 'We help establish repeatable evidence collection processes to support the independent examination.',
    items: [
      'Access reviews',
      'Security training records',
      'Vulnerability assessment and remediation records',
      'Change approvals',
      'Incident response records',
      'Backup and recovery test results',
      'Vendor assessments',
      'Monitoring and review logs',
      'Policy acknowledgements',
    ],
  },
  {
    icon: 'badge',
    title: 'Examination Readiness Support',
    desc: 'We help review your readiness before the independent CPA examination.',
    items: [
      'Readiness and evidence review',
      'Control-owner coordination',
      'Audit walkthrough preparation',
      'Evidence organization',
      'Support in responding to auditor requests',
      'Remediation tracking for identified gaps',
    ],
  },
]

const process = [
  { title: 'Scope & Discovery', desc: 'Understand your services, systems, data flows, customers, and business commitments.' },
  { title: 'Gap Assessment', desc: 'Review existing controls and documentation against the applicable Trust Services Criteria.' },
  { title: 'Readiness Roadmap', desc: 'Define remediation priorities, responsibilities, and target timelines.' },
  { title: 'Documentation & Control Implementation', desc: 'Develop required documentation and support implementation of security controls.' },
  { title: 'Evidence Process Setup', desc: 'Establish processes to collect and maintain relevant evidence.' },
  { title: 'Readiness Review', desc: 'Review controls, documentation, and evidence before the independent examination.' },
  { title: 'Independent Examination Coordination', desc: 'Support your team with auditor requests and examination preparation.' },
  { title: 'Continuous Compliance', desc: 'Maintain controls, evidence, and corrective actions for ongoing assurance.' },
]

const audience = [
  'SaaS and software companies',
  'Cloud service providers',
  'IT and managed service providers',
  'AI and technology organizations',
  'Fintech and digital platforms',
  'BPO and business process service providers',
  'Organizations handling customer or confidential data',
  'Businesses seeking public-facing security assurance',
]


const comparisonRows = [
  { feature: 'Report Audience', a: 'Detailed report intended for specified users', b: 'General-use report intended for broader distribution' },
  { feature: 'Information Depth', a: 'Includes detailed system and control information', b: 'Provides a more concise, public-facing summary' },
  { feature: 'Testing Detail', a: 'Includes details of the auditor’s testing and results', b: 'Does not include detailed testing descriptions and results' },
  { feature: 'Typical Use', a: 'Often used for customer/vendor due diligence', b: 'Often used for public trust and assurance' },
]

const faqs = [
  {
    q: 'Is SOC 3 a certification?',
    a: 'No. SOC 3 is an independent attestation report issued by a qualified CPA firm following an examination.',
  },
  {
    q: 'Can SOC 3 be shared publicly?',
    a: 'SOC 3 is designed as a general-use report and can generally be distributed more broadly than a restricted-use SOC 2 report.',
  },
  {
    q: 'Is SOC 3 the same as SOC 2 Type II?',
    a: 'No. SOC 2 Type II provides detailed information about the system and the auditor’s testing. SOC 3 is a more concise, general-use report based on an examination of controls against applicable Trust Services Criteria.',
  },
  {
    q: 'Does ITC India CyberSec issue the SOC 3 report?',
    a: 'ITC India CyberSec provides readiness, consulting, documentation, implementation, and examination-preparation support. The formal examination and report must be performed and issued by an independent qualified CPA firm.',
  },
  {
    q: 'How long does SOC 3 readiness take?',
    a: 'The timeline depends on your organization’s scope, existing controls, documentation, and remediation requirements. The examination period and reporting timeline should be agreed with the independent CPA firm.',
  },
  {
    q: 'Can we prepare for SOC 2 and SOC 3 together?',
    a: 'Organizations may discuss both deliverables with their independent CPA firm, since SOC 3 is commonly based on the same underlying examination as SOC 2. The scope and deliverables depend on the engagement.',
  },
  {
    q: 'Who can benefit from SOC 3?',
    a: 'SOC 3 is suitable for organizations that want public-facing assurance for customers, prospects, and business partners, including SaaS, cloud, IT, AI, fintech, and business process service providers.',
  },
]

const inquiryOptions = [
  'SOC 3 Readiness',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
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

export default function Soc3Page() {
  usePageMeta(
    'SOC 3 Readiness & Compliance Support | ITC India CyberSec',
    'Prepare for SOC 3 with ITC India CyberSec. Get readiness assessment, policies, security control implementation, evidence preparation, and examination support.',
  )

  return (
    <main className="svc-page">
      <ServiceHero
        eyebrow="SOC 3 Readiness & Compliance Support"
        title="Build Trust with a Public-Facing"
        highlight="SOC 3 Report"
        quote="Demonstrate your commitment to security and customer trust."
        text="ITC India CyberSec helps organizations strengthen security controls, prepare documentation, establish evidence processes, and get ready for an independent SOC examination. A SOC 3 report provides a concise, general-use view of an organization’s controls against applicable Trust Services Criteria."
        primaryCta="Discuss Your SOC 3 Readiness"
        secondaryCta="Get a Readiness Assessment"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding SOC 3"
            title="What Is"
            highlight="SOC 3?"
            subtitle="SOC 3 is a System and Organization Controls report intended for general use."
          />
          <div className="svc-overview-grid">
            <div className="svc-intro-card">
              <p>
                SOC 3 addresses controls relevant to one or more of the AICPA Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Unlike SOC 2 reports, SOC 3 reports are designed for broader distribution and do not include detailed control testing descriptions and results.
              </p>
              <p>
                Organizations commonly use SOC 3 reports to provide customers, prospects, and business partners with public-facing assurance about their control environment without sharing the detailed information included in a SOC 2 report.
              </p>
              <p>
                SOC 3 is an independent attestation report, not a certification. The examination and report are performed and issued by an independent qualified CPA firm.
              </p>
            </div>

            <aside className="svc-glance-card">
              <div className="section-label">At a glance</div>
              <h3 className="svc-glance-title">Readiness and examination preparation</h3>
              <CheckList
                items={[
                  'Scope review and gap assessment',
                  'Policies, procedures, and control documentation',
                  'Repeatable evidence collection processes',
                  'Independent examination coordination',
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
            title="Our SOC 3"
            highlight="Readiness Services"
            subtitle="ITC India CyberSec supports organizations through the preparation activities required for a SOC 3 examination."
          />
          <ServiceCardGrid services={services} />
        </div>
      </section>

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Trust Services Criteria"
            title="SOC 3"
            highlight="Trust Services Criteria"
            subtitle="SOC 3 engagements may address one or more of the following criteria, depending on the organization’s scope and commitments."
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

      <ProcessSection
        label="Our Process"
        title="Our SOC 3"
        highlight="Readiness Process"
        subtitle="A structured path from discovery through continuous compliance."
        steps={process}
      />

      <CompareSection
        label="SOC 2 vs SOC 3"
        title="SOC 2 and SOC 3:"
        highlight="What’s the Difference?"
        subtitle="SOC 3 is commonly based on the same underlying examination as a SOC 2 Type II engagement. Organizations should discuss the appropriate reporting deliverables and scope with their independent CPA firm."
        columns={['SOC 2', 'SOC 3']}
        rows={comparisonRows}
        callout="SOC 3 provides a concise, general-use view for broader distribution."
      />

      <AudienceSection
        label="Ideal For"
        title="Who Can Benefit"
        highlight="from SOC 3?"
        items={audience}
        callout="Businesses seeking public-facing security assurance can use SOC 3 to demonstrate trust to customers and partners."
      />

      <ServiceFaq
        title="SOC 3 Readiness"
        highlight="FAQs"
        subtitle="Quick answers on SOC 3 reporting, public sharing, prerequisites, and examination support."
        faqs={faqs}
      />

      <CtaBanner
        title="Start Your SOC 3"
        highlight="Readiness Journey"
        text="Strengthen your security practices and prepare to demonstrate trust to customers and business partners."
        primaryCta="Schedule a Readiness Consultation"
        secondaryCta="Discuss Your SOC 3 Readiness"
      />

      <ServiceContact defaultInquiry="SOC 3 Readiness" inquiryOptions={inquiryOptions} heading="Discuss Your SOC 3 Readiness" />

      <NoteSection>
        ITC India CyberSec provides SOC 3 readiness, consulting, documentation, implementation, and examination-preparation support. The formal SOC 3 examination and report must be performed and issued by an independent qualified CPA firm. Readiness support does not guarantee a particular audit opinion or report outcome.
      </NoteSection>
    </main>
  )
}
