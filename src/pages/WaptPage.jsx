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
  WhySection,
  usePageMeta,
} from './ServiceShared'

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793428383/42c1bcda-deea-4bd5-9392-d3c0bf4903fb_mc5jvc.png'

const owasp = [
  {
    code: 'A01',
    title: 'Broken Access Control',
    desc: 'Test whether users can access unauthorized data, functions, or resources, including privilege escalation and insecure object-level access.',
  },
  {
    code: 'A02',
    title: 'Security Misconfiguration',
    desc: 'Identify insecure application, server, platform, and security configurations that may expose the application to attack.',
  },
  {
    code: 'A03',
    title: 'Software Supply Chain Failures',
    desc: 'Review relevant risks involving software dependencies, components, and application supply-chain security, where included in scope.',
  },
  {
    code: 'A04',
    title: 'Cryptographic Failures',
    desc: 'Assess the protection of sensitive information, including encryption-related weaknesses and insecure data transmission or storage.',
  },
  {
    code: 'A05',
    title: 'Injection',
    desc: 'Test for injection vulnerabilities such as SQL injection, command injection, and other unsafe handling of untrusted input.',
  },
  {
    code: 'A06',
    title: 'Insecure Design',
    desc: 'Assess security weaknesses arising from application design, workflows, trust boundaries, and missing security requirements.',
  },
  {
    code: 'A07',
    title: 'Authentication Failures',
    desc: 'Evaluate authentication mechanisms, account security, session handling, password recovery, and related access controls.',
  },
  {
    code: 'A08',
    title: 'Software or Data Integrity Failures',
    desc: 'Review risks involving untrusted updates, unsafe deserialization, integrity validation, and related application mechanisms.',
  },
  {
    code: 'A09',
    title: 'Security Logging & Alerting Failures',
    desc: 'Assess whether relevant security events are recorded and whether logging or alerting weaknesses could hinder detection and investigation.',
  },
  {
    code: 'A10',
    title: 'Mishandling of Exceptional Conditions',
    desc: 'Identify weaknesses in error handling, failure states, and unexpected conditions that may affect application security.',
  },
]

const services = [
  {
    icon: 'key',
    title: 'Authentication & Session Management Testing',
    items: [
      'Authentication bypass testing',
      'Password and account security review',
      'Session management weaknesses',
      'Session expiration and invalidation',
      'Multi-factor authentication assessment',
      'Account recovery workflow testing',
    ],
  },
  {
    icon: 'shield',
    title: 'Authorization & Access Control Testing',
    items: [
      'Broken access control',
      'Insecure Direct Object References (IDOR)',
      'Horizontal and vertical privilege escalation',
      'Role-based access control weaknesses',
      'Unauthorized access to sensitive resources',
      'API and object-level authorization issues',
    ],
  },
  {
    icon: 'bolt',
    title: 'Injection & Input Validation Testing',
    items: [
      'SQL injection',
      'Cross-Site Scripting (XSS)',
      'Command injection',
      'Server-Side Request Forgery (SSRF)',
      'Path traversal',
      'Unsafe input and output handling',
    ],
  },
  {
    icon: 'scale',
    title: 'Business Logic Security Testing',
    items: [
      'Workflow manipulation',
      'Unauthorized transaction actions',
      'Price, quantity, or parameter manipulation',
      'Abuse of application functionality',
      'Missing validation of critical business operations',
      'Bypass of intended application restrictions',
    ],
  },
  {
    icon: 'monitor',
    title: 'Security Configuration & Deployment Review',
    items: [
      'Security header configuration',
      'TLS and secure communication settings',
      'Information disclosure through errors',
      'Debug functionality exposure',
      'Insecure default settings',
      'Unnecessary exposed resources',
    ],
  },
  {
    icon: 'layers',
    title: 'API Security Testing',
    desc: 'Where APIs are included in scope, we assess:',
    items: [
      'Authentication and authorization weaknesses',
      'Broken object-level authorization',
      'Excessive data exposure',
      'Input validation and injection risks',
      'Rate limiting and abuse controls',
      'API configuration issues',
    ],
  },
  {
    icon: 'document',
    title: 'File Upload & Sensitive Data Testing',
    items: [
      'File upload validation weaknesses',
      'Unsafe file processing',
      'Unauthorized file access',
      'Sensitive data exposure',
      'Insecure storage or transmission',
      'Improper data handling',
    ],
  },
]

const standards = [
  { title: 'OWASP Top 10:2025', desc: 'Major web application security risk categories.' },
  { title: 'OWASP WSTG', desc: 'Web Security Testing Guide — structured web application testing methodology.' },
  { title: 'OWASP ASVS', desc: 'Application Security Verification Standard — application security verification requirements.' },
  { title: 'NIST SP 800-115', desc: 'Technical guidance for information security testing and assessment.' },
  { title: 'CWE', desc: 'Common Weakness Enumeration for vulnerability classification.' },
]

const methodology = [
  { title: 'Scope & Application Discovery', desc: 'Understand the application, technology stack, user roles, functionality, and testing boundaries.' },
  { title: 'Test Planning & Threat Modelling', desc: 'Identify critical assets, trust boundaries, sensitive workflows, and potential attack scenarios.' },
  { title: 'Automated Security Testing', desc: 'Use appropriate tools to identify potential vulnerabilities and areas requiring deeper investigation.' },
  { title: 'Manual Penetration Testing', desc: 'Test application functionality, access controls, business logic, and security-sensitive workflows.' },
  { title: 'Vulnerability Validation', desc: 'Validate findings, assess potential impact, and review false positives.' },
  { title: 'Reporting & Remediation Guidance', desc: 'Provide evidence-backed findings with severity ratings, technical details, impact, and recommended fixes.' },
  { title: 'Remediation & Retesting', desc: 'Validate fixes and confirm whether reported vulnerabilities have been addressed, where retesting is included in scope.' },
]

const deliverables = [
  'Web Application Penetration Testing Report',
  'Executive summary',
  'Scope and testing methodology',
  'OWASP Top 10 mapping, where applicable',
  'Validated vulnerability findings',
  'Severity and risk ratings',
  'Technical evidence and Proof of Concept (PoC), where appropriate',
  'Business and technical impact analysis',
  'Remediation recommendations',
  'Retesting results, where included in scope',
]

const audience = [
  'SaaS and software companies',
  'E-commerce platforms',
  'Banking and fintech applications',
  'Healthcare portals',
  'Government and enterprise web applications',
  'Customer and employee portals',
  'Business-critical web platforms',
  'Organizations preparing for security or compliance assessments',
]

const whyChoose = [
  { title: 'OWASP-Guided Testing', desc: 'Use recognized application security references to support testing coverage.' },
  { title: 'Manual & Automated Assessment', desc: 'Combine tool-assisted testing with expert analysis of application behaviour and business logic.' },
  { title: 'Evidence-Based Findings', desc: 'Receive validated vulnerabilities with technical evidence and clear impact analysis.' },
  { title: 'Practical Remediation Guidance', desc: 'Help developers understand the root cause and recommended corrective action.' },
  { title: 'Business-Focused Reporting', desc: 'Understand how vulnerabilities may affect users, sensitive data, and business operations.' },
  { title: 'Retesting Support', desc: 'Validate remediation efforts and confirm whether identified issues have been addressed.' },
]

const faqs = [
  {
    q: 'What is OWASP Top 10-aligned WAPT?',
    a: 'It is a web application penetration test that uses applicable OWASP Top 10 risk categories to help structure testing coverage. The assessment also considers application-specific functionality and risks.',
  },
  {
    q: 'Is OWASP Top 10 a certification?',
    a: 'No. OWASP Top 10 is a security risk awareness document, not a certification scheme. ITC India CyberSec can provide a penetration testing report based on the agreed assessment scope.',
  },
  {
    q: 'Which OWASP Top 10 version do you follow?',
    a: 'Our assessment can be aligned with the applicable OWASP Top 10 version, including OWASP Top 10:2025, based on the engagement requirements.',
  },
  {
    q: 'Do you follow NIST standards?',
    a: 'Our testing methodology may also draw on NIST SP 800-115 guidance for technical security testing and assessment, where applicable.',
  },
  {
    q: 'Do you perform manual testing?',
    a: 'Yes. Manual testing is used to assess application logic, access controls, workflows, and vulnerabilities that automated tools may miss.',
  },
  {
    q: 'Will we receive a report?',
    a: 'Yes. The report can include validated findings, severity ratings, technical evidence, PoCs where appropriate, impact analysis, and remediation recommendations.',
  },
  {
    q: 'Can you retest vulnerabilities after remediation?',
    a: 'Yes. Retesting can be included to validate fixes for reported vulnerabilities.',
  },
]

const inquiryOptions = [
  'WAPT',
  'VAPT',
  'API Security Testing',
  'Mobile App Security Testing',
  'SOC 2 Type I Readiness',
  'SOC 2 Type II Readiness',
  'SOC 3 Readiness',
  'ISO 27001',
  'HIPAA Audit',
  'AI/ML Testing',
  'IoT Testing',
  'Other',
]

export default function WaptPage() {
  usePageMeta(
    'OWASP Top 10 Web Application Penetration Testing | ITC India CyberSec',
    'ITC India CyberSec provides OWASP Top 10-aligned WAPT services with manual and automated testing, validated findings, security reports, and remediation support.',
  )

  return (
    <main className="svc-page">
      <ServiceHero
        eyebrow="OWASP Top 10-Aligned Web Application Penetration Testing"
        title="Secure Your Web Applications"
        highlight="with Expert Security Testing"
        quote="Identify vulnerabilities. Validate security. Strengthen your application."
        text="Protect your web applications from real-world cyber threats with Web Application Penetration Testing (WAPT) services from ITC India CyberSec. Our authorized security assessments evaluate web applications for vulnerabilities, insecure configurations, access control weaknesses, and business logic flaws. We combine automated security testing with manual penetration testing to identify and validate security risks."
        primaryCta="Request a WAPT Assessment"
        secondaryCta="Talk to Our Security Experts"
        image={heroImage}
        asideTitle="Testing aligned to recognized standards"
        asideItems={[
          'OWASP Top 10 and OWASP WSTG',
          'OWASP ASVS and NIST SP 800-115',
          'Manual testing and automated tooling',
          'Validated findings with remediation guidance',
        ]}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Understanding WAPT"
            title="What Is Web Application"
            highlight="Penetration Testing?"
            subtitle="Web Application Penetration Testing is an authorized security assessment designed to identify and validate vulnerabilities in web applications by simulating realistic attack techniques within an agreed scope."
          />
          <div className="svc-intro-card">
            <p>
              WAPT helps determine whether weaknesses in application functionality, authentication, authorization, data handling, configuration, or business logic could be exploited to compromise systems or information.
            </p>
            <p>
              At ITC India CyberSec, we assess applications using a combination of automated tools and manual testing techniques. Our approach focuses on validating findings, understanding their potential impact, and providing practical recommendations to help your team remediate security issues.
            </p>
            <p>
              Our testing is guided by recognized application security references, including the OWASP Top 10, OWASP Web Security Testing Guide (WSTG), OWASP ASVS, and NIST SP 800-115, as applicable to the agreed scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="OWASP Top 10:2025"
            title="OWASP Top 10-Aligned"
            highlight="Security Testing"
            subtitle="Our WAPT engagements can be structured around the applicable categories from the OWASP Top 10:2025, based on the application’s technology, functionality, and assessment scope."
          />
          <div className="svc-owasp-grid">
            {owasp.map((item) => (
              <article className="svc-owasp-card" key={item.code}>
                <span className="svc-owasp-code">{item.code}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="soc3-callout">
            <span>Testing coverage is tailored to the application and engagement scope. OWASP Top 10 alignment does not by itself constitute certification or guarantee that every possible vulnerability will be identified.</span>
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Our Web Application"
            highlight="Penetration Testing Services"
            subtitle="Assessment coverage is tailored to your application, technology stack, user roles, and business-critical workflows."
          />
          <ServiceCardGrid services={services} />
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Standards & Methodologies"
            title="Standards & Methodologies"
            highlight="We Follow"
            subtitle="Our WAPT assessments may be guided by recognized application security standards and testing references."
          />
          <div className="svc-standards-grid">
            {standards.map((standard) => (
              <article className="svc-standard-card" key={standard.title}>
                <h3>{standard.title}</h3>
                <p>{standard.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        label="Our Methodology"
        title="Our WAPT"
        highlight="Methodology"
        subtitle="A structured testing lifecycle from scoping and threat modelling to validation, reporting, and retesting."
        steps={methodology}
      />

      <section className="section-padding svc-bg-white">
        <div className="container">
          <SectionHeader
            label="Reporting"
            title="WAPT"
            highlight="Deliverables"
            subtitle="At the end of the engagement, clients may receive a formal penetration testing report designed for both management and technical teams."
          />
          <div className="svc-deliverables-card">
            <CheckList items={deliverables} />
          </div>
        </div>
      </section>

      <section className="section-padding svc-bg-soft">
        <div className="container">
          <SectionHeader
            label="Assessment & Certification"
            title="WAPT Assessment"
            highlight="& Certification"
            subtitle="ITC India CyberSec provides OWASP Top 10-aligned Web Application Penetration Testing, security assessment, reporting, and remediation support."
          />
          <div className="svc-prose-card">
            <p>
              Following the assessment, we provide a formal penetration testing report documenting the scope, methodology, findings, and recommendations. Any certificate or statement of assessment completion is subject to the applicable engagement scope and ITC India CyberSec’s authorized service procedures.
            </p>
            <p>
              <strong>OWASP does not certify individual websites or issue an OWASP Top 10 certification.</strong> OWASP Top 10 is a security risk awareness document, not a certification program. If your organization requires a specific compliance assessment, assurance statement, or certification, the applicable scheme and issuing authority should be confirmed separately.
            </p>
          </div>
        </div>
      </section>

      <AudienceSection
        label="Ideal For"
        title="Who Needs"
        highlight="WAPT?"
        items={audience}
        callout="WAPT is recommended before production releases, after significant application changes, and periodically as part of an ongoing application security program."
      />

      <WhySection items={whyChoose} />

      <ServiceFaq
        title="OWASP Top 10 WAPT"
        highlight="FAQs"
        subtitle="Quick answers on OWASP alignment, testing methodology, reporting, and retesting."
        faqs={faqs}
      />

      <CtaBanner
        title="Secure Your Web Application with"
        highlight="ITC India CyberSec"
        text="Identify security weaknesses, validate application security, and reduce the risk of web-based attacks with OWASP Top 10-aligned WAPT."
        primaryCta="Request a WAPT Assessment"
        secondaryCta="Talk to Our Security Experts"
      />

      <ServiceContact defaultInquiry="WAPT" inquiryOptions={inquiryOptions} heading="Request a WAPT Assessment" />

      <NoteSection>
        ITC India CyberSec provides OWASP Top 10-aligned web application penetration testing, security assessment, reporting, and remediation support. OWASP Top 10 is a security risk awareness document, not a certification program. Testing coverage is tailored to the agreed scope and does not guarantee that every possible vulnerability will be identified.
      </NoteSection>
    </main>
  )
}
