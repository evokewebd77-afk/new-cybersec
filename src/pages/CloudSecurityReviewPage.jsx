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
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793877890/c2765bc8-cf0c-4678-9395-5ffb1a3883d3_qun96b.png'

const securityRisks = [
  'Publicly exposed cloud storage containing sensitive information',
  'Excessive IAM permissions and potential privilege escalation paths',
  'Insecure cross-account and cross-tenant access configurations',
  'Exposed administrative interfaces, databases, and cloud services',
  'Insecure cloud credentials, secrets, and key management',
  'Misconfigured network security groups and firewall rules',
  'Weak cloud workload isolation and container configurations',
  'Insecure serverless functions and application integrations',
  'Vulnerable cloud-hosted applications and APIs',
  'Inadequate security logging, monitoring, and audit coverage',
  'Insecure backup, recovery, and data protection configurations',
  'Cloud security gaps within CI/CD pipelines and deployment workflows',
]

const assessmentScope = [
  {
    icon: 'layers',
    title: 'Cloud Infrastructure Security',
    desc: 'Evaluate cloud infrastructure configurations and controls for weaknesses that could expose resources or enable unauthorized access.',
    items: ['Publicly accessible cloud resources', 'Security groups, firewalls, and network access rules', 'Exposed management interfaces and services', 'Network segmentation and isolation', 'Cloud resource configurations', 'Internet-facing workloads and services', 'Infrastructure deployment settings'],
  },
  {
    icon: 'key',
    title: 'Identity and Access Management',
    desc: 'Assess whether identities, permissions, and trust relationships follow least-privilege principles.',
    items: ['User, group, role, and service account permissions', 'Excessive privileges and inappropriate role assignments', 'Privilege escalation opportunities', 'Cross-account and cross-tenant trust relationships', 'Authentication and MFA controls', 'Service identities and workload permissions', 'Access-key and credential management', 'Least-privilege implementation', 'Separation of administrative and operational access'],
  },
  {
    icon: 'lock',
    title: 'Cloud Data Security',
    desc: 'Review how sensitive information is stored, accessed, encrypted, and protected throughout the cloud environment.',
    items: ['Storage and database exposure', 'Encryption in transit and at rest', 'Key and secrets management', 'Backup and snapshot security', 'Data access permissions'],
  },
  {
    icon: 'globe',
    title: 'Cloud Network Security',
    desc: 'Review network architecture and security configurations for connectivity, segmentation, and exposure risks.',
    items: ['Virtual networks and subnet configurations', 'Security groups, firewalls, and network ACLs', 'Public IP and internet-facing resource exposure', 'Network segmentation and workload isolation', 'VPN, peering, and private connectivity', 'Insecure routing and access paths', 'Cloud metadata service and SSRF-related access risks'],
  },
  {
    icon: 'devices',
    title: 'Workload and Container Security',
    desc: 'Assess cloud-hosted virtual machines, containers, orchestration platforms, and serverless workloads.',
    items: ['Virtual machine security configurations', 'Container image vulnerabilities and exposed secrets', 'Container runtime security and workload isolation', 'Kubernetes access controls and privileged containers', 'Registry permissions and workload identities', 'Serverless function configurations', 'Software dependencies and outdated components'],
  },
  {
    icon: 'search',
    title: 'Cloud Application and API Security',
    desc: 'Assess application-layer risks that may expose cloud resources or sensitive business data.',
    items: ['Broken access control and authentication weaknesses', 'Injection and security misconfiguration', 'SSRF and insecure API endpoints', 'Sensitive data exposure', 'Vulnerable and outdated components', 'Insecure integrations and business logic'],
  },
  {
    icon: 'eye',
    title: 'Logging, Monitoring and Incident Readiness',
    desc: 'Review visibility and monitoring capabilities that support threat detection and incident investigation.',
    items: ['Cloud audit logging and retention', 'Administrative activity monitoring', 'Critical resource coverage', 'Alerting and SIEM integration', 'Investigation and response readiness'],
  },
  {
    icon: 'document',
    title: 'Cloud Governance and Security Controls',
    desc: 'Evaluate applicable cloud security policies, operational controls, and governance practices.',
    items: ['Cloud security policies and responsibilities', 'Asset inventory and resource ownership', 'Configuration, vulnerability, and patch management', 'Change management and deployment controls', 'Backup, recovery, and incident response', 'Third-party cloud dependencies and compliance gaps'],
  },
]

const platforms = [
  {
    icon: 'devices',
    title: 'Amazon Web Services (AWS)',
    desc: 'Review the configurations and security controls relevant to the AWS services in scope.',
    items: ['IAM users, roles, policies, and trust relationships', 'S3 bucket permissions and EC2 security groups', 'VPC, subnet, and network routing configurations', 'Lambda permissions and execution roles', 'CloudTrail logging and audit coverage', 'KMS keys, Secrets Manager, and Systems Manager', 'RDS, EKS, and EC2 metadata service security'],
  },
  {
    icon: 'globe',
    title: 'Microsoft Azure',
    desc: 'Assess Azure identities, resource configurations, network boundaries, and monitoring.',
    items: ['Entra ID identities, Azure RBAC, and privileged access', 'Storage accounts, Network Security Groups, and virtual networks', 'Key Vault permissions and secrets management', 'VMs, App Service, managed identities, and service principals', 'Azure SQL and AKS configurations', 'Activity Logs and monitoring coverage'],
  },
  {
    icon: 'layers',
    title: 'Google Cloud Platform (GCP)',
    desc: 'Evaluate GCP identity, project hierarchy, workload, network, and data controls.',
    items: ['Cloud IAM roles, policies, and service accounts', 'Cloud Storage bucket permissions', 'VPC networks and firewall rules', 'Compute Engine security and service account key exposure', 'Cloud KMS, Cloud Run, and GKE configurations', 'Cloud SQL, Cloud Audit Logs, and organization policies'],
  },
]

const frameworks = [
  { icon: 'badge', title: 'CIS Benchmarks', desc: 'Cloud platform configuration security guidance for AWS, Microsoft Azure, Google Cloud, and applicable workloads.' },
  { icon: 'target', title: 'NIST Cybersecurity Framework', desc: 'Risk management guidance covering identify, protect, detect, respond, and recover.' },
  { icon: 'document', title: 'NIST SP 800-53', desc: 'Security and privacy control guidance for evaluating applicable cloud security controls.' },
  { icon: 'shield', title: 'ISO/IEC 27001', desc: 'Information security management requirements relevant to cloud governance and risk management.' },
  { icon: 'search', title: 'OWASP Top 10', desc: 'Application security guidance for common vulnerabilities in cloud-hosted web applications.' },
  { icon: 'devices', title: 'OWASP API Security Top 10', desc: 'Guidance for common API risks, including authorization, authentication, and resource exposure.' },
  { icon: 'layers', title: 'CSA Cloud Controls Matrix', desc: 'Cloud-focused security control framework for evaluating cloud security and governance practices.' },
  { icon: 'scale', title: 'SOC 2 Trust Services Criteria', desc: 'Relevant security, availability, confidentiality, processing integrity, and privacy considerations.' },
]

const methodology = [
  { title: 'Scope Definition and Cloud Discovery', desc: 'Identify cloud accounts, subscriptions, projects, regions, services, applications, boundaries, and assessment objectives.' },
  { title: 'Architecture and Attack Surface Review', desc: 'Understand architecture, trust boundaries, external exposure, workload dependencies, and potential attack paths.' },
  { title: 'Configuration and Control Assessment', desc: 'Review configurations, access policies, network controls, storage permissions, and applicable security settings.' },
  { title: 'Identity and Privilege Assessment', desc: 'Evaluate identity permissions, role assignments, trust relationships, and potential privilege risks.' },
  { title: 'Security Testing and Validation', desc: 'Perform authorized testing to validate identified weaknesses and determine their potential security impact.' },
  { title: 'Risk Analysis and Reporting', desc: 'Classify findings based on severity, exploitability, affected assets, and business impact.' },
  { title: 'Remediation Guidance', desc: 'Provide practical recommendations to help cloud and development teams address identified vulnerabilities.' },
  { title: 'Retesting and Validation', desc: 'Where included in scope, validate agreed fixes and document resolved and outstanding findings.' },
]

const attackPaths = [
  'Compromised application credentials leading to unauthorized cloud resource access',
  'Excessive IAM permissions enabling privilege escalation',
  'SSRF vulnerabilities potentially exposing cloud metadata credentials',
  'Insecure workload identities providing access to sensitive storage',
  'Publicly exposed services creating pathways to internal cloud resources',
  'Misconfigured cross-account trust enabling unauthorized access',
  'Compromised CI/CD credentials affecting cloud deployment environments',
]

const deliverables = [
  {
    icon: 'trend',
    title: 'Executive Summary',
    desc: 'A management-level overview of the cloud security posture and priority risks.',
    items: ['Overall cloud security posture', 'Key risks and business impact', 'Critical findings requiring attention', 'High-level remediation priorities'],
  },
  {
    icon: 'document',
    title: 'Technical Assessment Report',
    desc: 'Evidence-based findings and guidance for security, cloud, and engineering teams.',
    items: ['Detailed vulnerability descriptions and affected resources', 'Severity and business impact analysis', 'Supporting evidence and screenshots', 'Validation and reproduction details for validated findings', 'Attack-path details where applicable', 'Practical remediation recommendations'],
  },
  {
    icon: 'layers',
    title: 'Additional Deliverables, Based on Scope',
    desc: 'Optional supporting material tailored to the agreed assessment requirements.',
    items: ['Cloud asset and exposure inventory', 'Configuration assessment checklist', 'Application and API findings', 'Framework control mapping', 'Remediation tracking and retest report'],
  },
]

const audience = [
  'Organizations migrating workloads to the cloud',
  'Businesses operating AWS, Azure, or GCP environments',
  'SaaS companies managing cloud-hosted applications',
  'Enterprises operating hybrid or multi-cloud infrastructure',
  'Organizations handling sensitive or regulated information',
  'Businesses preparing for audits or compliance assessments',
]

const strengths = [
  { icon: 'search', title: 'Technical, Evidence-Based Assessments', desc: 'Identify and validate security weaknesses rather than relying solely on automated configuration scores.' },
  { icon: 'layers', title: 'Cloud and Application Security Coverage', desc: 'Include infrastructure, identity, workloads, APIs, and cloud-hosted applications within the agreed scope.' },
  { icon: 'badge', title: 'Recognized Security Guidelines', desc: 'Use applicable CIS, NIST, OWASP, ISO, and cloud security guidance to structure assessments.' },
  { icon: 'target', title: 'Business-Focused Risk Analysis', desc: 'Prioritize findings according to technical severity, potential impact, and exposure of critical assets.' },
  { icon: 'document', title: 'Actionable Remediation Guidance', desc: 'Help administrators, developers, and security teams understand how to address identified weaknesses.' },
  { icon: 'shield', title: 'Independent Security Assessment', desc: 'Provide an objective review within the authorized assessment scope.' },
]

const faqs = [
  {
    q: 'What is a Cloud Security Review?',
    a: 'A Cloud Security Review is a structured assessment of cloud infrastructure, configurations, identities, networks, workloads, and security controls to identify vulnerabilities and reduce cloud-related security risks.',
  },
  {
    q: 'What is the difference between a Cloud Security Review and Cloud Penetration Testing?',
    a: 'A Cloud Security Review focuses on configuration weaknesses, access controls, cloud security posture, and control gaps. Cloud Penetration Testing focuses on authorized exploitation to validate vulnerability impact. Both can be combined based on the agreed scope.',
  },
  {
    q: 'Do you follow OWASP Top 10?',
    a: 'Yes. We use applicable OWASP Top 10 guidance when assessing application-layer vulnerabilities in cloud-hosted web applications and relevant OWASP API Security Top 10 guidance for APIs.',
  },
  {
    q: 'Which cloud platforms do you assess?',
    a: 'We assess Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid or multi-cloud environments.',
  },
  {
    q: 'Do you require cloud access for the assessment?',
    a: 'Required access depends on scope. Read-only configuration access may be used for posture reviews, while application testing or controlled validation may require additional authorized access.',
  },
  {
    q: 'Will the assessment affect our cloud services?',
    a: 'Testing is planned according to agreed scope and rules of engagement. Non-disruptive methods are prioritized, and potentially impactful activities require explicit authorization and safeguards.',
  },
  {
    q: 'Do you provide remediation support?',
    a: 'We provide detailed remediation recommendations and can validate implemented fixes through retesting where included in the engagement.',
  },
  {
    q: 'How long does a Cloud Security Review take?',
    a: 'The timeline depends on the number of cloud accounts, services, workloads, applications, and the depth of assessment. We provide a defined timeline after scoping.',
  },
]

const inquiryOptions = [
  'Cloud Security Review',
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
  'IoT Testing',
  'Drone Testing',
  'Other',
]

export default function CloudSecurityReviewPage() {
  usePageMeta(
    'Cloud Security Review Services | ITC India CyberSec',
    "Identify cloud misconfigurations, excessive permissions, exposed resources, and security vulnerabilities with ITC India CyberSec's Cloud Security Review services for AWS, Azure, and Google Cloud.",
  )

  return (
    <main className="svc-page cloud-review-page">
      <ServiceHero
        eyebrow="Cloud Security Review Services"
        title="Secure Your Cloud"
        highlight="Infrastructure"
        quote="Reduce Risk. Strengthen Resilience."
        text="Cloud environments power critical business operations, applications, and sensitive data. Misconfigurations, excessive permissions, exposed services, and insecure workloads can create risks that traditional security assessments may overlook. Our review combines configuration analysis, control evaluation, and authorized security testing to assess potential business impact."
        primaryCta="Request a Cloud Security Review"
        secondaryCta="Talk to Our Security Experts"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white cloud-review-risks">
        <div className="container">
          <SectionHeader
            label="Cloud Security Risks"
            title="Find Gaps Across Your"
            highlight="Cloud Environment"
            subtitle="We assess configuration, access, exposure, and cloud-native controls against your architecture and business risks."
          />
          <div className="cloud-review-risk-card">
            <CheckList items={securityRisks} />
          </div>
          <p className="cloud-review-note">Our objective is to determine not only whether a weakness exists, but also how it could affect the confidentiality, integrity, and availability of your cloud environment.</p>
        </div>
      </section>

      <section className="section-padding cloud-review-scope">
        <div className="container">
          <SectionHeader
            label="Assessment Scope"
            title="A Connected Review of"
            highlight="Cloud Security"
            subtitle="Assessment activities are tailored to the services, architecture, access, and objectives agreed for your engagement."
          />
          <ServiceCardGrid services={assessmentScope} />
          <p className="cloud-review-note">Where authorized, we validate whether identified permission weaknesses could lead to unauthorized access or privilege escalation. Application security testing may be scoped separately or included as part of the cloud assessment based on engagement requirements.</p>
        </div>
      </section>

      <section className="section-padding svc-bg-white cloud-review-platforms">
        <div className="container">
          <SectionHeader
            label="Cloud Platforms"
            title="Assess AWS, Azure, and"
            highlight="Google Cloud"
            subtitle="Coverage is determined by the cloud services, architecture, and access provided for the engagement."
          />
          <ServiceCardGrid services={platforms} />
        </div>
      </section>

      <section className="section-padding cloud-review-frameworks">
        <div className="container">
          <SectionHeader
            label="Standards and Frameworks"
            title="Guided by Recognized"
            highlight="Security Practices"
            subtitle="We use applicable industry guidelines, including CIS Benchmarks, NIST guidance, and OWASP Top 10 for cloud-hosted applications and APIs."
          />
          <ServiceCardGrid services={frameworks} />
          <p className="cloud-review-note">Framework mapping follows the agreed scope and applicable requirements. A Cloud Security Review is not, by itself, a certification or formal compliance attestation.</p>
        </div>
      </section>

      <ProcessSection
        label="Our Methodology"
        title="A Structured Cloud"
        highlight="Security Review"
        subtitle="From defining scope to validating remediation, each stage is planned around authorized access and agreed rules of engagement."
        steps={methodology}
        className="cloud-review-methodology"
      />

      <section className="section-padding svc-bg-white cloud-review-attack-paths">
        <div className="container">
          <SectionHeader
            label="Cloud Attack Path Analysis"
            title="Understand How Risks"
            highlight="Can Connect"
            subtitle="Individual weaknesses can combine across identities, workloads, applications, and data resources. We assess relevant paths within the authorized scope."
          />
          <div className="cloud-review-path-card">
            <CheckList items={attackPaths} />
            <p>Attack-path validation is performed only within the authorized assessment scope and using controlled testing methods.</p>
          </div>
        </div>
      </section>

      <section className="section-padding cloud-review-deliverables">
        <div className="container">
          <SectionHeader
            label="Assessment Deliverables"
            title="Clear Reporting for Leaders"
            highlight="and Technical Teams"
            subtitle="Receive a structured report that explains what was identified, why it matters, and how to prioritize next steps."
          />
          <ServiceCardGrid services={deliverables} />
        </div>
      </section>

      <AudienceSection
        label="Who Needs a Cloud Security Review?"
        title="Support Your Cloud"
        highlight="Security Objectives"
        items={audience}
        callout="Protect cloud infrastructure, applications, and sensitive information with an assessment tailored to your environment."
        className="cloud-review-audience"
      />

      <section className="section-padding svc-bg-white cloud-review-strengths">
        <div className="container">
          <SectionHeader
            label="Why ITC India CyberSec?"
            title="Independent, Practical"
            highlight="Cloud Security Expertise"
          />
          <ServiceCardGrid services={strengths} />
        </div>
      </section>

      <ServiceFaq
        title="Cloud Security Review"
        highlight="FAQs"
        subtitle="Answers to common questions about cloud security assessment and readiness."
        faqs={faqs}
      />

      <CtaBanner
        title="Strengthen Your"
        highlight="Cloud Security"
        text="Identify cloud risks before they become business incidents. Our team can help validate security gaps and prioritize remediation across your cloud environment."
        primaryCta="Request a Cloud Security Review"
        secondaryCta="Talk to Our Security Experts"
      />

      <ServiceContact
        defaultInquiry="Cloud Security Review"
        inquiryOptions={inquiryOptions}
        heading="Discuss Your Cloud Security Review"
        extraFields={[
          {
            id: 'svcCloudPlatform',
            label: 'Cloud Platform',
            type: 'select',
            required: true,
            options: ['AWS', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Hybrid or multi-cloud', 'Not sure yet'],
          },
          {
            id: 'svcCloudAccounts',
            label: 'Number of Cloud Accounts or Projects',
            type: 'text',
            placeholder: 'For example, 3 accounts or 5 projects',
          },
        ]}
        messageLabel="Assessment Requirements"
        messagePlaceholder="Tell us about your cloud environment, assessment goals, and any specific requirements..."
      />
    </main>
  )
}
