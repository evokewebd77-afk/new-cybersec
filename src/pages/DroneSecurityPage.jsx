import {
  CheckList,
  CtaBanner,
  NoteSection,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceHero,
  WhySection,
  usePageMeta,
} from './ServiceShared'

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1600/v1793944598/ed904119-b6ef-4060-bda8-e72805cc014b_acrpoo.png'

const scope = [
  {
    icon: 'document',
    title: 'Drone Hardware & Firmware Security',
    items: [
      'Firmware extraction and security analysis',
      'Secure boot and firmware integrity validation',
      'Debug interface exposure',
      'Hardcoded credentials and sensitive information',
      'Firmware update mechanism security',
    ],
  },
  {
    icon: 'wifi',
    title: 'Wireless Communication Security',
    items: [
      'Wi-Fi and Bluetooth security',
      'Drone-to-controller communication',
      'Authentication and pairing mechanisms',
      'Encryption and key management',
      'Replay and message manipulation testing',
      'Unauthorized control command testing',
    ],
  },
  {
    icon: 'target',
    title: 'Flight Control & Navigation Security',
    items: [
      'Security of control command interfaces',
      'GPS and navigation data integrity',
      'Unauthorized command injection scenarios',
      'Flight mode and control access restrictions',
      'Resilience against communication disruption',
    ],
  },
  {
    icon: 'monitor',
    title: 'Ground Control Station Security',
    items: [
      'Desktop and mobile control application testing',
      'Authentication and authorization weaknesses',
      'Insecure local data storage',
      'API and backend security',
      'Sensitive operational data exposure',
    ],
  },
  {
    icon: 'globe',
    title: 'Cloud & Fleet Management Security',
    items: [
      'Drone registration and device identity',
      'Fleet management platform security',
      'Access control and role permissions',
      'Telemetry and flight data protection',
      'Cloud APIs and remote management security',
    ],
  },
]

const etsiProvisions = [
  'Secure authentication and password practices',
  'Secure firmware updates',
  'Protection of sensitive security parameters',
  'Secure communication',
  'Attack surface minimization',
  'Software integrity',
  'Personal and operational data protection',
  'Vulnerability disclosure processes',
  'Secure device installation and maintenance',
  'Input validation and resilience',
]

const methodology = [
  { title: 'Drone Architecture & Scope Identification', desc: 'Map the drone ecosystem, components, interfaces, and assessment boundaries.' },
  { title: 'Threat Modelling & Attack Surface Mapping', desc: 'Identify trust boundaries, entry points, and realistic attack scenarios.' },
  { title: 'Firmware & Hardware Security Analysis', desc: 'Inspect firmware, debug interfaces, secure boot, and update mechanisms.' },
  { title: 'Wireless Communication Security Testing', desc: 'Assess pairing, authentication, encryption, and control-link resilience.' },
  { title: 'Flight Control & Navigation Interface Assessment', desc: 'Review command interfaces, navigation integrity, and access restrictions.' },
  { title: 'Ground Control Application & API Testing', desc: 'Test control applications, local storage, APIs, and backend services.' },
  { title: 'Cloud & Fleet Management Security Review', desc: 'Review device identity, access control, telemetry, and remote management.' },
  { title: 'Risk Assessment, Reporting & Remediation Validation', desc: 'Document findings with severity ratings and verify fixes after remediation.' },
]

const deliverables = [
  'Drone Security Assessment Report',
  'Firmware Security Analysis',
  'Wireless Communication Security Findings',
  'Flight Control and Navigation Security Findings',
  'Ground Control Station Assessment',
  'ETSI EN 303 645 Applicability and Assessment Checklist',
  'Risk Classification and Remediation Recommendations',
  'Retest Report, where included in scope',
]

const whyChoose = [
  { title: 'Specialized Connected-Device Assessment', desc: 'Testing focused on the hardware, firmware, communication, and cloud layers of drone ecosystems.' },
  { title: 'ETSI EN 303 645-Aligned IoT Review', desc: 'Assessments consider applicable consumer IoT cybersecurity provisions for connected components.' },
  { title: 'Firmware, Hardware & Wireless Testing', desc: 'Combine device-level analysis with communication and application security testing.' },
  { title: 'Evidence-Based Reporting', desc: 'Receive validated findings supported by technical evidence and clear impact analysis.' },
  { title: 'Practical Remediation Guidance', desc: 'Help engineering teams understand root causes and recommended corrective actions.' },
  { title: 'Scope Tailored to Product Architecture', desc: 'Assessment coverage is defined around your drone platform and operational requirements.' },
]

const inquiryOptions = [
  'Drone Security Testing',
  'IoT Security Testing',
  'VAPT',
  'WAPT',
  'API Security Testing',
  'Cloud Security Review',
  'Other Security Assessment',
]

export default function DroneSecurityPage() {
  usePageMeta(
    'Drone & UAV Security Testing | ITC India CyberSec',
    'Secure your drones and UAV ecosystems with ITC India CyberSec. Drone security testing across flight control systems, firmware, wireless communication, ground control stations, mobile apps, and cloud platforms.'
  )

  return (
    <main className="svc-page drone-page">
      <ServiceHero
        eyebrow="Drone & UAV Security Testing"
        title="Secure Your Drones"
        highlight="Protect Your Mission"
        text="ITC India CyberSec provides specialized security testing for drones and Unmanned Aerial Vehicles (UAVs), identifying vulnerabilities across flight control systems, firmware, wireless communication, ground control stations, mobile applications, and cloud-connected drone platforms. Our assessments incorporate applicable ETSI EN 303 645 cybersecurity provisions for connected IoT components, alongside relevant application, firmware, and communication security testing methodologies. We help drone manufacturers and technology providers strengthen device security, protect operational data, and reduce cybersecurity risks across connected drone ecosystems."
        primaryCta="Request a Drone Security Assessment"
        secondaryCta="Talk to Our Experts"
        image={heroImage}
        asideTitle="Testing aligned to recognized standards"
        asideItems={[
          'ETSI EN 303 645-aligned IoT review',
          'Flight control and navigation testing',
          'Wireless communication security',
          'Ground control and cloud platform review',
        ]}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding Drone Security"
            title="About"
            highlight="Drone Security Testing"
            subtitle="Modern drones rely on interconnected systems across hardware, firmware, communication, and cloud services."
          />
          <div className="svc-intro-card">
            <p>
              Drones rely on interconnected systems, including flight controllers, GPS modules,
              wireless communication links, ground control stations, mobile applications, and
              cloud-based fleet management platforms.
            </p>
            <p>
              Security weaknesses in these components may lead to unauthorized access, sensitive
              data exposure, compromised communication, or disruption of drone operations.
            </p>
            <p>
              ITC India CyberSec conducts structured drone security assessments to identify
              vulnerabilities across hardware, firmware, communication interfaces, control
              applications, and connected services. Our testing evaluates cybersecurity controls
              designed to protect drone systems against unauthorized access, insecure
              configurations, firmware manipulation, and communication-based attacks.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Scope of Assessment"
            title="Scope of"
            highlight="Drone Security Testing"
            subtitle="Assessment coverage spans the drone, its communication links, control stations, and connected cloud services."
          />
          <ServiceCardGrid services={scope} />
        </div>
      </section>

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="ETSI EN 303 645"
            title="ETSI EN 303 645-Based"
            highlight="Drone Security Review"
            subtitle="For applicable connected consumer IoT components within drone ecosystems, our review can assess relevant ETSI EN 303 645 provisions, including:"
          />
          <div className="svc-deliverables-card">
            <CheckList items={etsiProvisions} />
          </div>
          <div className="soc3-callout">
            <span>
              Important scope note: ETSI EN 303 645 is a consumer IoT cybersecurity baseline, not
              a drone-specific aviation safety or certification standard. Its applicability to a
              drone depends on the product, intended use, and components being assessed.
            </span>
          </div>
        </div>
      </section>

      <ProcessSection
        label="Our Methodology"
        title="Drone Security Testing"
        highlight="Methodology"
        subtitle="All testing is conducted within an agreed authorization and safety scope, using controlled environments and non-disruptive methods wherever possible."
        steps={methodology}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="What You Get"
            title="Assessment"
            highlight="Deliverables"
            subtitle="At the end of the engagement, you receive a clear, actionable, and audit-ready Drone Security Assessment."
          />
          <div className="svc-deliverables-card">
            <CheckList items={deliverables} />
          </div>
        </div>
      </section>

      <WhySection items={whyChoose} />

      <CtaBanner
        title="Build Secure."
        highlight="Fly Confidently."
        text="Protect your connected devices and drone ecosystems with comprehensive security testing from ITC India CyberSec."
        primaryCta="Request a Drone Security Assessment"
        secondaryCta="Talk to Our Experts"
      />

      <ServiceContact
        defaultInquiry="Drone Security Testing"
        inquiryOptions={inquiryOptions}
        heading="Request a Drone Security Assessment"
      />

      <NoteSection>
        ITC India CyberSec provides structured drone security testing aligned with applicable ETSI
        EN 303 645 provisions and recognized industry guidelines. Assessment coverage is tailored to
        the agreed product scope and does not guarantee that every possible vulnerability will be
        identified.
      </NoteSection>
    </main>
  )
}
