import Icon from '../components/Icon'
import {
  AudienceSection,
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

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793858626/848ee798-907b-4ff5-b85f-af19e299a36e_mkpxki.webp'
const frameworkImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793858789/39a6a7ae-4565-439f-bb9b-f6d8e6b65442_gglqxa.webp'

const services = [
  {
    icon: 'globe',
    title: 'External Attack Simulation',
    desc:
      'Assess your organization’s internet-facing environment from an external attacker’s perspective.',
    items: [
      'Reviewing exposed assets and services',
      'Identifying potential attack paths',
      'Evaluating perimeter security controls',
      'Testing approved external security weaknesses',
      'Assessing exposure of critical systems',
    ],
  },
  {
    icon: 'monitor',
    title: 'Internal Network Attack Simulation',
    desc:
      'Evaluate the security of your internal environment under an approved assumed-breach scenario.',
    items: [
      'Network segmentation and access controls',
      'Privilege and identity management',
      'Internal security weaknesses',
      'Detection of suspicious activity',
      'Potential paths to sensitive systems',
    ],
  },
  {
    icon: 'document',
    title: 'Web Application & API Attack Simulation',
    desc:
      'Assess selected applications and APIs for weaknesses that could support an attack objective.',
    items: [
      'Authentication and authorization weaknesses',
      'Access control issues',
      'Session management risks',
      'Business logic vulnerabilities',
      'API security weaknesses',
      'Security misconfigurations',
    ],
  },
  {
    icon: 'handshake',
    title: 'Human Security Assessment',
    desc:
      'Evaluate employee awareness and organizational response to approved social-engineering simulations.',
    items: [
      'Controlled simulations',
      'Assessment of reporting behaviour',
      'Review of awareness and response processes',
      'Recommendations for targeted security training',
    ],
  },
  {
    icon: 'layers',
    title: 'Cloud & Identity Attack Simulation',
    desc:
      'Assess selected cloud environments and identity systems for security weaknesses and attack paths.',
    items: [
      'Identity and access management',
      'Privileged access controls',
      'Cloud configuration risks',
      'Logging and monitoring coverage',
      'Cross-environment access paths',
      'Protection of sensitive resources',
    ],
  },
  {
    icon: 'search',
    title: 'Detection & Response Validation',
    desc:
      'Evaluate how effectively your security team identifies, investigates, and responds to simulated adversary activity.',
    items: [
      'Alert generation and visibility',
      'Security monitoring coverage',
      'Incident escalation procedures',
      'Investigation and containment processes',
      'Coordination between technical and response teams',
    ],
  },
]

const frameworks = [
  {
    icon: 'target',
    title: 'OWASP Top 10',
    desc: 'Common and critical web application security risks',
  },
  {
    icon: 'search',
    title: 'OWASP WSTG',
    desc: 'Structured web application security testing guidance',
  },
  {
    icon: 'document',
    title: 'NIST SP 800-115',
    desc: 'Technical guidance for information security testing and assessment',
  },
  {
    icon: 'target',
    title: 'MITRE ATT&CK',
    desc: 'Adversary tactics and techniques for realistic attack scenarios',
  },
  {
    icon: 'shield',
    title: 'OWASP ASVS',
    desc: 'Application security verification requirements, where applicable',
  },
  {
    icon: 'document',
    title: 'OSSTMM',
    desc: 'Operational security testing methodology, where relevant',
  },
  {
    icon: 'badge',
    title: 'CWE',
    desc: 'Common weakness references for classifying technical findings',
  },
]

const process = [
  {
    title: 'Scope & Objectives',
    desc: 'Understand business priorities, critical assets, threat concerns, and assessment objectives.',
  },
  {
    title: 'Rules of Engagement',
    desc:
      'Define authorized targets, testing windows, permitted techniques, safety boundaries, communication channels, and stop conditions.',
  },
  {
    title: 'Threat Modelling & Planning',
    desc: 'Develop relevant attack scenarios based on environment and agreed threat assumptions.',
  },
  {
    title: 'Controlled Adversary Simulation',
    desc: 'Conduct approved testing to evaluate security controls and identify realistic attack paths.',
  },
  {
    title: 'Detection & Response Evaluation',
    desc:
      'Review which activities were detected, how alerts were handled, and how response processes performed.',
  },
  {
    title: 'Reporting & Recommendations',
    desc:
      'Document findings, evidence, business impact, attack paths, and prioritized remediation actions.',
  },
  {
    title: 'Retesting & Improvement',
    desc: 'Validate agreed remediation actions and support improvement of defensive capabilities.',
  },
]

const receive = [
  {
    icon: 'badge',
    title: 'Engagement Documentation',
    items: [
      'Executive summary and assessment overview',
      'Defined scope and objectives',
      'Attack scenario and methodology summary',
    ],
  },
  {
    icon: 'search',
    title: 'Evidence-Backed Findings',
    items: [
      'Evidence-backed findings',
      'Validated attack paths and security control gaps',
      'Detection and response observations',
      'Risk and business impact analysis',
    ],
  },
  {
    icon: 'arrow',
    title: 'Recommendations & Follow-up',
    items: [
      'Prioritized remediation recommendations',
      'Improvement roadmap',
      'Retesting results, where included in scope',
    ],
  },
]

const comparison = [
  {
    feature: 'Focus',
    a: 'Finding and validating vulnerabilities within a defined scope',
    b: 'Simulating adversary objectives and testing overall defence',
  },
  {
    feature: 'Coverage',
    a: 'Typically evaluates selected systems or applications',
    b: 'May involve multiple security layers, people, processes, and technologies',
  },
  {
    feature: 'Finding type',
    a: 'Primarily vulnerability-focused findings',
    b: 'Findings include attack paths, detection gaps, and response observations',
  },
  {
    feature: 'Target knowledge',
    a: 'Often performed with more direct knowledge of the target',
    b: 'May use an agreed limited-knowledge or assumed-breach approach',
  },
  {
    feature: 'Outcome',
    a: 'Helps identify and fix technical weaknesses',
    b: 'Helps evaluate prevention, detection, and response to attacks',
  },
]

const audience = [
  'Enterprises and large organizations',
  'SaaS and technology companies',
  'Cloud service providers',
  'Financial and fintech organizations',
  'Healthcare and sensitive-data environments',
  'IT and managed service providers',
  'Organizations with mature security operations',
  'Businesses preparing to validate incident response capabilities',
]

const faqs = [
  {
    q: 'What is the purpose of Red Teaming?',
    a:
      'Red Teaming helps evaluate whether an organization can prevent, detect, and respond to realistic adversary activity. It identifies weaknesses in technical controls, monitoring, processes, and response capabilities.',
  },
  {
    q: 'How is Red Teaming different from a vulnerability assessment?',
    a:
      'A vulnerability assessment identifies and prioritizes potential weaknesses. Red Teaming uses approved attack scenarios to evaluate how weaknesses may combine into attack paths and whether defensive teams detect and respond to the activity.',
  },
  {
    q: 'Will Red Teaming disrupt our business?',
    a:
      'Testing is planned around agreed rules of engagement, safety boundaries, and testing windows. Any potentially disruptive activity must be explicitly approved and controlled.',
  },
  {
    q: 'Do you provide a report?',
    a:
      'Yes. The engagement can include an executive summary, evidence-backed findings, attack-path analysis, detection and response observations, and prioritized recommendations.',
  },
  {
    q: 'Can you test our SOC or security monitoring team?',
    a:
      'Yes. Red Teaming can be designed to evaluate security monitoring, alerting, investigation, escalation, and response capabilities within the agreed scope.',
  },
  {
    q: 'Is Red Teaming suitable for every organization?',
    a:
      'It is most valuable for organizations with defined security objectives and established controls to evaluate. A readiness discussion can help determine whether a penetration test, vulnerability assessment, or Red Team engagement is the best starting point.',
  },
]

const inquiryOptions = [
  'Red Team Assessment',
  'VAPT',
  'WAPT',
  'HIPAA Audit',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'ISO 27001',
  'ISO 27000',
  'ISO 27701',
  'Other',
]

export default function RedTeamingPage() {
  usePageMeta(
    'Red Teaming Services | Adversary Simulation | ITC India CyberSec',
    'Test your security with ITC India CyberSec Red Teaming services. Simulate realistic attack scenarios, validate security controls, and assess detection and response capabilities.',
  )

  return (
    <main className="svc-page red-team-page">
      <ServiceHero
        eyebrow="Offensive Security Services"
        title="Red Teaming"
        highlight="Services"
        quote="Test Your Defences Against Real-World Attack Scenarios"
        text="Discover how your organization would withstand a targeted cyberattack with Red Teaming services from ITC India CyberSec. Our authorized adversary simulations assess your security from an attacker’s perspective—testing whether people, processes, and technology can prevent, detect, and respond to realistic attack scenarios."
        primaryCta="Schedule a Red Team Assessment"
        secondaryCta="Talk to Our Security Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white red-team-overview-section">
        <div className="container">
          <SectionHeader
            label="Service Overview"
            title="What Is"
            highlight="Red Teaming?"
            subtitle="Red Teaming is a controlled security assessment that simulates the tactics, techniques, and procedures of real-world threat actors against an organization’s defined scope."
          />
          <div className="red-team-about">
            <div className="red-team-about-copy">
              <p>
                Unlike a traditional vulnerability assessment or penetration test, Red Teaming focuses on achieving agreed security objectives while evaluating the organization’s ability to detect and respond to simulated adversary activity.
              </p>
              <p>
                The assessment may examine technical security controls, monitoring capabilities, incident response processes, and human-related security risks—within an approved scope and rules of engagement.
              </p>
            </div>
            <div className="red-team-focus-card">
              <span className="red-team-focus-eyebrow">Assessment scope</span>
              <h3>Assessment Focus</h3>
              <ul className="red-team-focus-list">
                <li><Icon name="check" /><span>Technical security controls</span></li>
                <li><Icon name="check" /><span>Monitoring capabilities</span></li>
                <li><Icon name="check" /><span>Incident response processes</span></li>
                <li><Icon name="check" /><span>Human-related security risks</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft svc-cards-compact">
        <div className="container">
          <SectionHeader
            label="Service Offerings"
            title="Our Red Teaming"
            highlight="Services"
            subtitle="Authorized adversary simulations aligned to agreed objectives and rules of engagement."
          />
          <ServiceCardGrid services={services} />
        </div>
      </section>

      <section className="section-padding red-team-framework-section">
        <div className="container">
          <SectionHeader
            label="Industry References"
            title="Standards & Frameworks"
            highlight="We Follow"
            subtitle="Engagements are guided by recognized cybersecurity standards, testing methodologies, and adversary frameworks selected for the environment, objectives, and agreed scope."
          />
          <figure className="red-team-framework-media">
            <img
              src={frameworkImage}
              alt="Security team reviewing systems during a cybersecurity assessment"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Guided by proven security references</span>
              <strong>Grounded in your environment, objectives, and scope.</strong>
            </figcaption>
          </figure>
          <div className="red-team-framework-catalog">
            <div className="red-team-framework-catalog-heading">
              <h3>Our reference library</h3>
              <span>07 recognized resources</span>
            </div>
            <ServiceCardGrid services={frameworks} />
          </div>
          <div className="red-team-framework-note">
            <span className="red-team-framework-note-icon" aria-hidden="true">i</span>
            These references guide assessment planning, testing coverage, finding classification, and reporting. The specific frameworks applied depend on the agreed engagement scope and objectives.
          </div>
        </div>
      </section>

      <ProcessSection
        label="Engagement Methodology"
        title="Our Red Teaming"
        highlight="Methodology"
        subtitle="A controlled, step-by-step approach to authorized adversary simulation."
        steps={process}
      />

      <section className="section-padding svc-bg-soft svc-cards-compact">
        <div className="container">
          <SectionHeader
            label="Engagement Outputs"
            title="What You"
            highlight="Receive"
            subtitle="Reports are prepared to help both management and technical teams understand the results and take action."
          />
          <ServiceCardGrid services={receive} />
        </div>
      </section>

      <CompareSection
        label="Testing Approaches"
        title="Red Teaming vs."
        highlight="Penetration Testing"
        subtitle="Both approaches are valuable and can be used together as part of a broader security testing program."
        columns={['Penetration Testing', 'Red Teaming']}
        rows={comparison}
      />

      <AudienceSection
        label="Who Needs Red Teaming?"
        title="Is Your Organization"
        highlight="a Good Fit?"
        items={audience}
        callout="Red Teaming is especially useful for organizations that already have security controls in place and want to evaluate how those controls perform against realistic attack scenarios."
      />

      <ServiceFaq
        label="Red Teaming Services"
        title="Red Teaming"
        highlight="FAQs"
        subtitle="Quick answers on purpose, differences, business impact, reporting, and SOC testing."
        faqs={faqs}
      />

      <CtaBanner
        title="Strengthen Your Defences with"
        highlight="Red Teaming"
        text="Understand how your organization performs against realistic attack scenarios and identify opportunities to improve security, detection, and response. Contact ITC India CyberSec to discuss your Red Teaming objectives."
        primaryCta="Request a Red Team Assessment"
        secondaryCta="Talk to Our Security Experts"
      />

      <ServiceContact
        defaultInquiry="Red Team Assessment"
        inquiryOptions={inquiryOptions}
        heading="Discuss Your Red Teaming Objectives"
      />

      <NoteSection>
        All Red Teaming activities are conducted with prior authorization and agreed safeguards, within an approved scope and rules of engagement.
      </NoteSection>
    </main>
  )
}
