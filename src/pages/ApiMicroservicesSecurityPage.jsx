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

const heroImage = 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1600/v1793942079/69b8c67b-6ca3-46e1-937d-f14abb866c85_gkcdiy.png'
const pageBannerImage = 'https://res.cloudinary.com/didtfhfme/image/upload/v1793942605/4a8354ea-7dd8-470b-a081-edaba63c8171_umbaat.png'
const pageBannerImageOptimized = 'https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1600/v1793942605/4a8354ea-7dd8-470b-a081-edaba63c8171_umbaat.png'

const securityRisks = [
  {
    icon: 'shield',
    title: 'Authentication & Authorization Testing',
    desc: 'Validate the integrity of access control decisions across application interfaces, user roles, and service identities.',
    items: [
      'JWT signing and validation weaknesses',
      'Broken object-level authorization (BOLA)',
      'Broken function-level authorization (BFLA)',
      'Privilege escalation and role bypass',
      'OAuth/OIDC misconfiguration checks',
      'Session management and token validation flaws',
    ],
  },
  {
    icon: 'lock',
    title: 'API Data Security',
    desc: 'Review how APIs process, store, and expose sensitive information across client and service boundaries.',
    items: [
      'Excessive response data exposure',
      'Sensitive information disclosure via error handling',
      'Improper filtering of user-specific data',
      'Insecure transport and encryption settings',
      'Sensitive data leakage through logs and traces',
      'Broken object property-level authorization',
    ],
  },
  {
    icon: 'search',
    title: 'Input Validation & Injection Testing',
    desc: 'Evaluate how untrusted input is processed and whether dangerous payloads can reach backend systems.',
    items: [
      'SQL and NoSQL injection',
      'Command injection and SSRF',
      'XML external entity (XXE) risks',
      'Improper input validation and tampering',
      'Unsafe deserialization patterns',
      'File upload and parameter abuse',
    ],
  },
  {
    icon: 'target',
    title: 'Business Logic & Access Control Validation',
    desc: 'Test whether application workflows and access boundaries align with intended business rules and security policies.',
    items: [
      'Unauthorized transaction manipulation',
      'Workflow bypass and state tampering',
      'Resource ownership validation',
      'Replay and duplicate request handling',
      'Privilege misuse in business functions',
      'Inconsistent authorization across endpoints',
    ],
  },
  {
    icon: 'layers',
    title: 'Microservices Security Assessment',
    desc: 'Review service-to-service trust, internal API exposure, and workload identity controls in distributed systems.',
    items: [
      'Service-to-service authentication gaps',
      'Unprotected internal API endpoints',
      'Weak mTLS and token propagation',
      'Insecure routing and service discovery',
      'Excessive internal service privileges',
      'Cloud-native workload and identity security review',
    ],
  },
  {
    icon: 'monitor',
    title: 'Gateway & Configuration Review',
    desc: 'Assess API gateway, infrastructure, and deployment settings that influence exposure, rate limiting, and protections.',
    items: [
      'Rate limiting and abuse controls',
      'TLS and secure communication settings',
      'CORS and security configuration review',
      'Gateway-to-backend authentication enforcement',
      'API versioning and deprecated endpoint exposure',
      'Administrative endpoint exposure and misconfiguration',
    ],
  },
]

const processSteps = [
  {
    title: 'Scope Definition',
    desc: 'Identify the APIs, services, endpoints, user roles, trust boundaries, and infrastructure in scope.',
  },
  {
    title: 'Threat Modelling',
    desc: 'Review architecture, data flows, service dependencies, and potential abuse scenarios relevant to the environment.',
  },
  {
    title: 'Authentication Testing',
    desc: 'Assess login, token handling, session controls, service identity assumptions, and authorization enforcement.',
  },
  {
    title: 'Vulnerability Assessment',
    desc: 'Test for OWASP API Security Top 10 risks, injection vulnerabilities, security misconfigurations, and data exposure.',
  },
  {
    title: 'Business Logic Review',
    desc: 'Evaluate workflows, transaction processes, ownership checks, and privilege boundaries for bypass opportunities.',
  },
  {
    title: 'Microservices Review',
    desc: 'Examine service-to-service communication, internal API exposure, workload identities, and container or orchestration controls.',
  },
  {
    title: 'Controlled Validation',
    desc: 'Verify the impact of identified vulnerabilities under agreed testing conditions and safety constraints.',
  },
  {
    title: 'Reporting & Remediation',
    desc: 'Provide supporting evidence, root cause analysis, risk ratings, and practical remediation guidance.',
  },
]

const technologies = [
  'REST APIs',
  'GraphQL APIs',
  'SOAP Web Services',
  'gRPC',
  'WebSocket APIs',
  'JSON and XML-based interfaces',
  'OAuth 2.0',
  'OpenID Connect',
  'JSON Web Tokens (JWT)',
  'API keys',
  'SAML-based integrations',
  'Docker',
  'Kubernetes',
  'API gateways',
  'Service mesh architectures',
  'Cloud-native microservices',
  'Event-driven distributed systems',
  'Amazon Web Services (AWS)',
  'Microsoft Azure',
  'Google Cloud Platform (GCP)',
]

const audience = [
  'SaaS and software development companies',
  'Fintech and payment service providers',
  'E-commerce and digital platforms',
  'Enterprises using distributed application architectures',
  'Organizations developing mobile and web applications',
  'Businesses integrating third-party APIs',
  'Cloud-native and containerized application providers',
  'Organizations preparing for security audits or compliance assessments',
]

const faqs = [
  {
    q: 'What is API security testing?',
    a: 'API security testing identifies vulnerabilities in application interfaces that may allow unauthorized access, sensitive data exposure, or manipulation of application functionality.',
  },
  {
    q: 'What is microservices security testing?',
    a: 'It evaluates the security of individual services and their interactions, including internal APIs, authentication, authorization, communication, and service-level access controls.',
  },
  {
    q: 'Does ITC India CyberSec follow OWASP API Security Top 10?',
    a: 'Yes. We use OWASP API Security Top 10 as a key reference for identifying and testing common API security risks.',
  },
  {
    q: 'Can you test authenticated APIs?',
    a: 'Yes. Testing can include authenticated scenarios using authorized accounts with different roles and permissions.',
  },
  {
    q: 'Do you test business logic vulnerabilities?',
    a: 'Yes. Where included in scope, we evaluate application workflows, transaction logic, authorization boundaries, and business rule enforcement.',
  },
  {
    q: 'Can microservices running on Kubernetes be assessed?',
    a: 'Yes. Kubernetes and container security configurations can be included in the assessment scope.',
  },
  {
    q: 'Do you provide remediation and retesting?',
    a: 'We provide remediation recommendations and can retest identified vulnerabilities to validate fixes, where included in the engagement.',
  },
  {
    q: 'How long does an API security assessment take?',
    a: 'The timeline depends on the number of endpoints, authentication flows, application complexity, and microservices architecture. A defined timeline is provided after scoping.',
  },
]

export default function ApiMicroservicesSecurityPage() {
  usePageMeta(
    'API & Microservices Security Testing | ITC India CyberSec',
    'Secure your APIs and microservices with ITC India CyberSec. Identify OWASP API Top 10 vulnerabilities, authorization flaws, insecure communication, and application security risks.'
  )

  return (
    <>
      <ServiceHero
        eyebrow="API Security Assessment"
        title="Secure Your APIs."
        highlight="Protect Every Service."
        quote="Modern applications rely on APIs and interconnected microservices to exchange data, process transactions, and deliver business-critical functionality."
        text="ITC India CyberSec provides comprehensive API and Microservices Security Testing to identify vulnerabilities across application interfaces, service-to-service communication, authentication mechanisms, authorization controls, and distributed application architectures."
        primaryCta="Request an Assessment"
        secondaryCta="Talk to Our Security Experts"
        image={heroImage}
      />

      <section className="section-padding svc-visual-section">
        <div className="container">
          <div className="svc-visual-grid">
            <div className="svc-visual-copy">
              <div className="section-label">Security Overview</div>
              <h2 className="section-title">
                Protecting <span className="highlight-text">Distributed Applications</span>
              </h2>
              <p className="svc-visual-text">
                APIs and microservices connect critical data, transactions, and business logic across
                multiple trust boundaries. A single authorization gap can expose data or functionality
                far beyond its intended scope.
              </p>
              <p className="svc-visual-text">
                Our assessment reviews authentication, authorization, data exposure, business logic, and
                service-to-service communication to identify risks before they affect your business.
              </p>
              <CheckList
                items={[
                  'Authentication and authorization validation',
                  'API data exposure review',
                  'Microservices trust and communication testing',
                  'OWASP API Security Top 10 coverage',
                ]}
              />
            </div>

            <div className="svc-visual-media">
              <img
                src={pageBannerImageOptimized}
                alt="API and microservices security assessment overview"
                width="1672"
                height="941"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = pageBannerImage
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="Assessment Focus"
            title="API & Microservices"
            highlight="Security Risks We Identify"
            subtitle="APIs and microservices introduce unique security challenges due to distributed architectures, multiple trust boundaries, and interconnected service dependencies."
          />
          <ServiceCardGrid services={securityRisks} />
        </div>
      </section>

      <ProcessSection
        id="api-microservices-process"
        label="Methodology"
        title="Assessment"
        highlight="Process"
        subtitle="Our testing is designed to identify exploitable weaknesses, validate their impact, and support practical remediation across distributed application layers."
        steps={processSteps}
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="Technology Stack"
            title="Technologies & Architectures"
            highlight="Covered"
            subtitle="Our assessments support modern API and microservices environments across diverse protocols, identity standards, and cloud-native platforms."
          />
          <div className="soc3-audience-list">
            {technologies.map((item) => (
              <span key={item} className="soc3-audience-pill">
                <span className="soc3-pill-check">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.2 16.7 19 6.9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {item}
              </span>
            ))}
          </div>
          <div className="soc3-callout">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="soc3-callout-icon"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" /></svg>
            <span>Assessment coverage includes REST, GraphQL, gRPC, SOAP, service mesh, cloud-native workloads, and secure API gateway configurations.</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="Who Needs This"
            title="Who Needs"
            highlight="API & Microservices Security Testing?"
            subtitle="Our services are suitable for organizations building or operating modern, distributed digital services."
          />
          <div className="soc3-audience-list">
            {audience.map((item) => (
              <span key={item} className="soc3-audience-pill">
                <span className="soc3-pill-check">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.2 16.7 19 6.9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <NoteSection>
        Our objective is to determine how identified vulnerabilities could be exploited and what impact they may have on application functionality, sensitive data, and business operations.
      </NoteSection>

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="Why"
            highlight="ITC India CyberSec?"
            subtitle="We combine OWASP-aligned testing methodology, manual expertise, and microservices-aware review to deliver evidence-backed findings and actionable remediation support."
          />
          <div className="soc3-why-grid">
            <div className="soc3-why-card">
              <span className="soc3-why-index">01</span>
              <h3>OWASP-Aligned Security Testing</h3>
              <p>Assessments follow applicable OWASP API Security Top 10 and OWASP Top 10 guidance to surface common and critical application risks.</p>
            </div>
            <div className="soc3-why-card">
              <span className="soc3-why-index">02</span>
              <h3>Manual &amp; Automated Testing</h3>
              <p>A combination of security tools and manual validation helps identify technical and business logic vulnerabilities.</p>
            </div>
            <div className="soc3-why-card">
              <span className="soc3-why-index">03</span>
              <h3>Deep Authorization Testing</h3>
              <p>We focus on object-level, function-level, and service-level access control weaknesses across endpoints and identities.</p>
            </div>
            <div className="soc3-why-card">
              <span className="soc3-why-index">04</span>
              <h3>Microservices-Aware Assessment</h3>
              <p>We review internal APIs, service identities, communication channels, and distributed application components end to end.</p>
            </div>
            <div className="soc3-why-card">
              <span className="soc3-why-index">05</span>
              <h3>Evidence-Based Reporting</h3>
              <p>Findings are supported by reproducible steps, technical evidence, risk analysis, and remediation guidance.</p>
            </div>
            <div className="soc3-why-card">
              <span className="soc3-why-index">06</span>
              <h3>Actionable Remediation Support</h3>
              <p>We provide practical recommendations that help developers and security teams resolve vulnerabilities effectively.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaq
        label="Frequently Asked Questions"
        title="API & Microservices"
        highlight="FAQs"
        subtitle="Common questions about API, application, and microservices security assessment scope and outcomes."
        faqs={faqs}
      />

      <CtaBanner
        title="Secure Your APIs."
        highlight="Strengthen Your Application Security."
        text="Identify vulnerabilities across your APIs and microservices before they become security incidents. Partner with ITC India CyberSec for a structured, evidence-based API & Microservices Security Assessment."
        primaryCta="Request an Assessment"
        secondaryCta="Contact Our Experts"
      />

      <ServiceContact
        defaultInquiry="API & Microservices Security"
        inquiryOptions={[
          'API & Microservices Security',
          'Web Application Security',
          'Cloud Security Review',
          'Red Teaming',
          'SOC 2 Audit',
          'ISO 27001',
          'Other Security Assessment',
        ]}
        heading="Request an API Security Assessment"
      />
    </>
  )
}
