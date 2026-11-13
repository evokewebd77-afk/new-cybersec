import {
  CheckList,
  CtaBanner,
  NoteSection,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1794472448/a82c37b1-ae89-41a1-978f-51e14ddbd22d_ncolul.webp'

const scope = [
  {
    icon: 'devices',
    title: 'Device & Hardware Security',
    items: [
      'Debug interface exposure, including UART, JTAG, and SWD',
      'Unauthorized physical access and device tampering',
      'Secure boot and hardware security mechanisms',
      'Sensitive data stored on device memory',
    ],
  },
  {
    icon: 'devices',
    title: 'Firmware Security',
    items: [
      'Firmware extraction and analysis',
      'Hardcoded credentials and secrets',
      'Insecure update mechanisms',
      'Outdated software components and known vulnerabilities',
      'Firmware integrity and authenticity validation',
    ],
  },
  {
    icon: 'devices',
    title: 'Network & Communication Security',
    items: [
      'Wi-Fi, Bluetooth, BLE, Zigbee, and other applicable protocols',
      'Insecure communication and weak encryption',
      'Device pairing and authentication weaknesses',
      'Man-in-the-middle attack scenarios',
      'Unnecessary exposed network services',
    ],
  },
  {
    icon: 'devices',
    title: 'Application & API Security',
    items: [
      'Mobile application security',
      'Device-to-cloud communication',
      'API authentication and authorization',
      'Insecure data handling',
      'OWASP-based application security testing',
    ],
  },
]

const etsiProvisions = [
  'No universal default passwords',
  'Vulnerability disclosure and reporting mechanisms',
  'Secure software updates',
  'Secure storage of sensitive security parameters',
  'Secure communications',
  'Minimization of exposed attack surfaces',
  'Software integrity protection',
  'Protection of personal data',
  'Resilience against outages',
  'Security monitoring and telemetry',
  'Secure user data deletion',
  'Secure installation and maintenance',
  'Input data validation',
]

const methodology = [
  { title: 'Product & Architecture Review', desc: 'Understand the device, its components, connectivity, and supporting ecosystem.' },
  { title: 'Threat Modelling & Attack Surface Identification', desc: 'Map trust boundaries, entry points, and realistic attack scenarios.' },
  { title: 'Hardware & Firmware Analysis', desc: 'Inspect interfaces, memory, firmware images, and update mechanisms.' },
  { title: 'Wireless & Communication Security Testing', desc: 'Assess pairing, authentication, encryption, and protocol implementation.' },
  { title: 'Application, API & Cloud Security Testing', desc: 'Review mobile apps, device APIs, backend services, and platform configurations.' },
  { title: 'ETSI EN 303 645 Provision Assessment', desc: 'Evaluate applicable provisions against the product and assessment scope.' },
  { title: 'Risk Classification & Reporting', desc: 'Document validated findings with severity ratings and business impact.' },
  { title: 'Remediation Validation & Retesting', desc: 'Verify fixes and confirm whether reported issues have been addressed.' },
]
const inquiryOptions = [
  'IoT Security Testing',
  'Drone Security Testing',
  'VAPT',
  'WAPT',
  'API Security Testing',
  'Cloud Security Review',
  'Other Security Assessment',
]

export default function IotSecurityPage() {
  usePageMeta(
    'IoT Security Testing | Connected Device Cybersecurity | ITC India CyberSec',
    'Secure your connected devices and IoT ecosystem with ITC India CyberSec. IoT security testing across hardware, firmware, wireless communication, applications, APIs, and cloud platforms.'
  )

  return (
    <main className="svc-page">
      <ServiceHero
        eyebrow="IoT Security Testing"
        title="Secure Every Connected Device"
        highlight="Protect the IoT Ecosystem"
        text="ITC India CyberSec provides comprehensive Internet of Things (IoT) security testing to identify vulnerabilities in connected devices, firmware, communication protocols, mobile applications, cloud platforms, and device management systems. Our assessments follow ETSI EN 303 645 consumer IoT cybersecurity provisions, along with relevant OWASP and industry security guidelines, to help manufacturers and organizations identify security weaknesses, protect sensitive data, and strengthen the security of connected products."
        primaryCta="Request an IoT Security Assessment"
        secondaryCta="Talk to Our Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding IoT Security"
            title="About"
            highlight="IoT Security Testing"
            subtitle="Connected devices introduce security risks across hardware, software, communication interfaces, and cloud-connected services."
          />
          <div className="svc-visual-grid svc-iot-intro-grid">
            <div className="svc-intro-card">
              <p>
                Weak authentication, insecure firmware, exposed interfaces, and improper data
                protection can create opportunities for unauthorized access and compromise.
              </p>
              <p>
                ITC India CyberSec conducts structured IoT security assessments to evaluate device
                security throughout its connected ecosystem. Our testing focuses on identifying
                vulnerabilities in device configurations, firmware, wireless communications, APIs,
                mobile applications, and associated cloud services.
              </p>
              <p>
                We use ETSI EN 303 645 as a security baseline for applicable consumer IoT products,
                helping organizations evaluate essential cybersecurity practices and improve product
                security.
              </p>
            </div>
            <div className="svc-visual-media svc-iot-intro-media">
              <img
                src="https://res.cloudinary.com/didtfhfme/image/upload/v1794473272/4df0a98f-9727-4e80-895f-424d6d5bfdf9_nkb0ks.webp"
                alt="Connected smart devices protected by IoT security"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Scope of Assessment"
            title="Scope of"
            highlight="IoT Security Testing"
            subtitle="Assessment coverage spans the device, its connectivity, applications, and connected cloud services."
          />
          <ServiceCardGrid services={scope} />
        </div>
      </section>

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="ETSI EN 303 645"
            title="ETSI EN 303 645-Based"
            highlight="Security Assessment"
            subtitle="Our IoT security assessments consider the applicable provisions of ETSI EN 303 645, including:"
          />
          <div className="svc-etsi-grid">
            <div className="svc-etsi-image">
              <img
                src="https://res.cloudinary.com/didtfhfme/image/upload/v1794474014/99e8c616-2049-428e-b9a1-676d9e9937c1_m5frqa.webp"
                alt="IoT security specialist assessing connected devices against cybersecurity standards"
              />
            </div>
            <div className="svc-deliverables-card">
              <CheckList items={etsiProvisions} />
            </div>
          </div>
          <div className="soc3-callout">
            <span>
              The standard provides baseline cybersecurity and data protection provisions for
              consumer IoT devices. Applicability is determined according to the product and
              assessment scope.
            </span>
          </div>
        </div>
      </section>

      <ProcessSection
        label="Our Methodology"
        title="IoT Assessment"
        highlight="Methodology"
        subtitle="A structured assessment lifecycle from architecture review and threat modelling to reporting and remediation validation."
        steps={methodology}
      />

      <CtaBanner
        title="Build Secure."
        highlight="Protect Your Connected World."
        text="Protect your connected devices and IoT ecosystems with comprehensive security testing from ITC India CyberSec."
        primaryCta="Request an IoT Security Assessment"
        secondaryCta="Talk to Our Experts"
      />

      <ServiceContact
        defaultInquiry="IoT Security Testing"
        inquiryOptions={inquiryOptions}
        heading="Request an IoT Security Assessment"
      />

      <NoteSection>
        ITC India CyberSec provides structured IoT security testing aligned with applicable ETSI EN
        303 645 provisions and recognized industry guidelines. Assessment coverage is tailored to the
        agreed product scope and does not guarantee that every possible vulnerability will be
        identified.
      </NoteSection>
    </main>
  )
}
