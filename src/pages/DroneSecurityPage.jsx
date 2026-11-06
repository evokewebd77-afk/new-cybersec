import Icon from '../components/Icon'
import {
  AudienceSection,
  CheckList,
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
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1600/v1793944598/ed904119-b6ef-4060-bda8-e72805cc014b_acrpoo.png'
const importanceImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1200/v1793945506/daf77378-d374-48e9-80a4-deaeea63a517_og9vse.png'

const coverage = [
  {
    icon: 'drone',
    title: 'Drone',
    desc: 'Drone hardware and firmware',
  },
  {
    icon: 'monitor',
    title: 'Controller',
    desc: 'Ground control stations and operator applications',
  },
  {
    icon: 'wifi',
    title: 'WiFi',
    desc: 'Communication channels (RF, Wi-Fi, LTE/5G)',
  },
  {
    icon: 'layers',
    title: 'Cloud',
    desc: 'Cloud platforms, APIs, and backend services',
  },
]

const risks = [
  'Loss of control or drone seizure',
  'GPS spoofing or signal manipulation',
  'Leakage of video, telemetry, or location data',
  'Unauthorized firmware modification',
  'Regulatory and compliance failures',
]

const benefits = [
  'Protect sensitive data and operations',
  'Prevent unauthorized drone access or misuse',
  'Ensure safe and reliable drone operations',
  'Meet regulatory and industry security requirements',
  'Build trust with customers and regulators',
]

const services = [
  {
    icon: 'drone',
    title: 'Drone Hardware & Firmware Security',
    desc: 'Complete firmware and hardware security assessment.',
    items: [
      'Firmware analysis and integrity validation',
      'Secure boot and firmware update mechanism testing',
      'Debug ports and hardware exposure checks',
      'Storage and memory protection assessment',
    ],
  },
  {
    icon: 'wifi',
    title: 'Communication & Control Link Testing',
    desc: 'Secure communication protocols and signal integrity.',
    items: [
      'RF, Wi-Fi, LTE/5G communication security testing',
      'Encryption and authentication validation',
      'Command injection and replay attack testing',
      'GPS spoofing and signal interference risk analysis',
    ],
  },
  {
    icon: 'monitor',
    title: 'Ground Control & Mobile Application Security',
    desc: 'Mobile and desktop control software testing.',
    items: [
      'Mobile and desktop control software testing',
      'Authentication, authorization, and session management',
      'Insecure local storage and API misuse',
      'Reverse engineering and tampering risks',
    ],
  },
  {
    icon: 'layers',
    title: 'Backend, Cloud & API Security',
    desc: 'Cloud infrastructure and API security assessment.',
    items: [
      'API authentication and authorization testing',
      'Cloud configuration and access control review',
      'Data exposure and logging gaps',
      'Identity and access management (IAM) assessment',
    ],
  },
]

const process = [
  {
    title: 'Scope Definition',
    desc: 'Drone ecosystem mapping and boundaries.',
  },
  {
    title: 'Threat Modeling',
    desc: 'Attack surface analysis and risk identification.',
  },
  {
    title: 'Automated & Manual Testing',
    desc: 'Automated and manual security testing.',
  },
  {
    title: 'Controlled Exploitation',
    desc: 'Impact validation and proof of concept.',
  },
  {
    title: 'Risk Scoring',
    desc: 'Risk scoring using CVSS.',
  },
  {
    title: 'Reporting & Retesting',
    desc: 'Detailed reporting with remediation guidance and retesting support.',
  },
]

const standards = [
  {
    title: 'OWASP Top 10 for IoT',
    desc: 'Common and critical security risks across connected device ecosystems.',
  },
  {
    title: 'ETSI EN 303 645',
    desc: 'Global cybersecurity baseline for consumer IoT and connected products.',
  },
  {
    title: 'NIST IoT Cybersecurity Framework',
    desc: 'Guidance for managing cybersecurity risk across IoT devices.',
  },
  {
    title: 'NIST SP 800-53',
    desc: 'Security and privacy controls for information systems and organizations.',
  },
  {
    title: 'ISO/IEC 27001 & ISO/IEC 27002',
    desc: 'Information security management systems and control guidance.',
  },
  {
    title: 'ISO/IEC 62443',
    desc: 'Security requirements for industrial automation and IoT/OT environments.',
  },
  {
    title: 'MITRE ATT&CK',
    desc: 'Adversary tactics and techniques for IoT and enterprise environments.',
  },
  {
    title: 'CVE & CVSS Risk Scoring',
    desc: 'Vulnerability identification and standardized severity scoring.',
  },
]

const deliverables = [
  'Executive summary for management',
  'Detailed vulnerability findings',
  'Risk severity and impact analysis',
  'Proof of Concept (PoC) evidence',
  'Step-by-step remediation recommendations',
  'Compliance mapping (OWASP IoT, ETSI EN 303 645)',
  'Retesting support after fixes',
]

const reportSections = [
  'Executive Summary',
  'Technical Findings',
  'Risk Analysis',
  'Remediation Steps',
]

const audience = [
  'Drone manufacturers and OEMs',
  'Drone operators and service providers',
  'Logistics and delivery companies',
  'Agriculture and industrial drone users',
  'Smart city and surveillance projects',
  'Government, defense, and public safety agencies',
  'Research institutions and technology startups',
]

const faqs = [
  {
    q: 'Do you hack or damage the drone during testing?',
    a: 'No. Testing is performed within an agreed scope using controlled, non-destructive techniques. The objective is to identify and validate vulnerabilities without causing intentional damage to the drone or its operations.',
  },
  {
    q: 'What parts of a drone system are tested?',
    a: 'The assessment can cover drone hardware and firmware, communication and control links, ground control stations, mobile and desktop applications, backend services, APIs, and cloud platforms.',
  },
  {
    q: 'Why is drone security important?',
    a: 'Drones are connected systems that carry sensitive data and control critical operations. A security weakness can lead to loss of control, data leakage, unauthorized access, safety incidents, or compliance failures.',
  },
  {
    q: 'Which standards and compliances do you follow?',
    a: 'Assessments may reference OWASP Top 10 for IoT, ETSI EN 303 645, NIST IoT Cybersecurity Framework, NIST SP 800-53, ISO/IEC 27001 and 27002, ISO/IEC 62443, MITRE ATT&CK, and CVE/CVSS scoring depending on the agreed scope.',
  },
  {
    q: 'Is Drone Security Testing mandatory for compliance?',
    a: 'Requirements vary by industry, jurisdiction, and the standards an organization follows. Testing can support compliance and due diligence, but the specific obligations should be confirmed against the applicable regulatory framework.',
  },
  {
    q: 'How long does a Drone Security Assessment take?',
    a: 'The timeline depends on the number of devices, firmware variants, communication interfaces, applications, and backend systems in scope. A defined timeline is provided after the scoping discussion.',
  },
  {
    q: 'Will drone operations be affected during testing?',
    a: 'Testing is planned around agreed windows and safety constraints. Some scenarios may require controlled operation or a test environment, and all activities are coordinated in advance to minimize operational impact.',
  },
  {
    q: 'What will we receive after the assessment?',
    a: 'You receive an audit-ready Drone Security Report that includes an executive summary, detailed findings, risk severity and impact analysis, PoC evidence, remediation recommendations, compliance mapping, and retesting support.',
  },
  {
    q: 'Who should opt for Drone Security Testing?',
    a: 'It is recommended for drone manufacturers and OEMs, operators and service providers, logistics and delivery companies, industrial and agricultural users, smart city projects, government agencies, and research institutions.',
  },
  {
    q: 'Do you test firmware and mobile applications?',
    a: 'Yes. Firmware analysis and mobile or desktop control application testing can be included within the agreed assessment scope.',
  },
]

const inquiryOptions = [
  'Drone Security Testing',
  'IoT Device Testing',
  'VAPT',
  'WAPT',
  'Cloud Security Review',
  'Red Teaming',
  'Other Security Assessment',
]

export default function DroneSecurityPage() {
  usePageMeta(
    'Drone Security Testing | UAV & UAS Cybersecurity | ITC India CyberSec',
    'Secure your drone ecosystem with ITC India CyberSec. Drone security testing across UAV hardware, firmware, communication links, ground control systems, mobile apps, APIs, and cloud platforms.'
  )

  return (
    <main className="svc-page drone-page">
      <ServiceHero
        eyebrow="Drone & UAV Security"
        title="Secure Your Drone Ecosystem"
        highlight="Before It Becomes a Cyber Risk"
        quote="Drones are powerful tools for automation, surveillance, delivery, and data collection—but they are also connected IoT systems that can be targeted by cyber attackers."
        text="At CyberSec ITC India, our Drone Security Testing services help organizations identify, validate, and remediate security vulnerabilities across UAV hardware, firmware, communication links, ground control systems, mobile applications, APIs, and cloud platforms. Our goal is simple: ensure your drones are secure, compliant, and safe to operate in real-world environments."
        primaryCta="Book a Free Consultation"
        secondaryCta="Talk to Our Security Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding Drone Security"
            title="What is"
            highlight="Drone Security Testing?"
            subtitle="Find vulnerabilities in drones before they can be exploited."
          />
          <div className="svc-intro-card drone-intro-card">
            <p>
              Drone Security Testing is a comprehensive cybersecurity assessment of unmanned aerial
              vehicle (UAV) systems and their supporting infrastructure.
            </p>
            <p>
              As drones are increasingly used in logistics, agriculture, surveillance, smart cities,
              and critical infrastructure, they have become attractive targets for cyber threats,
              including seizing, spoofing, data leakage, and unauthorized access.
            </p>
          </div>

          <div className="drone-coverage-grid">
            {coverage.map((item) => (
              <article className="drone-coverage-card" key={item.title}>
                <span className="drone-coverage-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <p className="drone-overview-note">
            By simulating real-world attack scenarios, we uncover weaknesses that could be exploited
            and provide clear remediation guidance to strengthen your drone security posture.
          </p>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Critical Importance"
            title="Why Drone Security Testing"
            highlight="is Important"
            subtitle="A single security flaw in a drone system can lead to:"
          />
          <div className="drone-importance-layout">
            <figure className="drone-importance-media">
              <img
                src={importanceImage}
                alt="Drone security risks and assessment controls"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="drone-importance-stack">
              <article className="drone-importance-card">
                <h3>Potential Risks</h3>
                <ul className="svc-list drone-risk-list">
                  {risks.map((risk) => (
                    <li key={risk}>
                      <Icon name="shield" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="drone-importance-card">
                <h3>How Testing Helps</h3>
                <CheckList items={benefits} />
              </article>
            </div>
          </div>
          <div className="soc3-callout">
            <Icon name="shield" className="soc3-callout-icon" />
            <span>In high-risk environments, drone security is mission-critical.</span>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-white svc-cards-compact drone-services-section">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Our Drone Security"
            highlight="Testing Services"
            subtitle="Comprehensive security assessment for your entire drone ecosystem."
          />
          <ServiceCardGrid services={services} />
        </div>
      </section>

      <ProcessSection
        id="drone-process"
        label="Our Process"
        title="How We Perform"
        highlight="Drone Security Testing"
        subtitle="CyberSec ITC India follows a hybrid testing methodology that combines automated analysis with in-depth manual testing."
        steps={process}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Standards & Frameworks"
            title="Aligned With"
            highlight="Industry Standards"
            subtitle="Our assessments may reference recognized IoT, security, and risk frameworks selected for your environment and agreed scope."
          />
          <div className="svc-standards-grid">
            {standards.map((item) => (
              <article className="svc-standard-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="What You Get"
            title="What You Get After"
            highlight="the Assessment"
            subtitle="You receive a clear, actionable, and audit-ready Drone Security Report designed for both technical teams and leadership."
          />
          <div className="svc-overview-grid">
            <div className="svc-deliverables-card">
              <CheckList items={deliverables} />
            </div>
            <aside className="drone-report-card">
              <div className="drone-report-head">
                <span className="drone-report-icon"><Icon name="document" /></span>
                <div>
                  <span>Drone Security Report</span>
                  <strong>Assessment Deliverable</strong>
                </div>
              </div>
              <ul>
                {reportSections.map((item) => (
                  <li key={item}>
                    <span className="drone-report-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <AudienceSection
        label="Who Should Opt"
        title="Who Should Opt for"
        highlight="Drone Security Testing?"
        items={audience}
        callout="If your drones are connected, autonomous, or data-driven, security testing is essential."
      />

      <ServiceFaq
        label="Frequently Asked Questions"
        title="Drone Security"
        highlight="FAQs"
        subtitle="Common questions about drone security testing scope, standards, timelines, and reporting."
        faqs={faqs}
      />

      <CtaBanner
        title="Secure Your Drone Ecosystem"
        highlight="Before It Becomes a Cyber Risk"
        text="Identify and remediate vulnerabilities across your UAV hardware, firmware, communication links, applications, and cloud services. Partner with ITC India CyberSec for a structured Drone Security Assessment."
        primaryCta="Book a Free Consultation"
        secondaryCta="Contact Our Experts"
      />

      <ServiceContact
        defaultInquiry="Drone Security Testing"
        inquiryOptions={inquiryOptions}
        heading="Request a Drone Security Assessment"
      />

      <NoteSection>
        Our goal is simple: ensure your drones are secure, compliant, and safe to operate in real-world environments.
      </NoteSection>
    </main>
  )
}
