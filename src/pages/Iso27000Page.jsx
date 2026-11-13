import {
  AudienceSection,
  CheckList,
  CtaBanner,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  ServiceContact,
  ServiceHero,
  usePageMeta,
} from './ServiceShared'

const heroImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793867792/bb197450-fc00-48c6-a6e5-fc300000c9a9_mwb4e2.webp'
const outcomesImage =
  'https://res.cloudinary.com/didtfhfme/image/upload/v1793867983/22d38259-9ced-47e0-bcaa-95ba095cc449_uk8nh3.webp'

const standards = [
  {
    icon: 'badge',
    title: 'ISO/IEC 27001',
    desc: 'Requirements for establishing, implementing, maintaining, and continually improving an ISMS.',
    items: ['ISMS requirements', 'Risk-based controls', 'Certification audit criteria'],
  },
  {
    icon: 'document',
    title: 'ISO/IEC 27002',
    desc: 'Guidance on information security controls and their implementation.',
    items: ['Control guidance', 'Implementation considerations', 'Organizational practices'],
  },
  {
    icon: 'scale',
    title: 'ISO/IEC 27005',
    desc: 'Guidance for managing information security risks in support of an ISMS.',
    items: ['Risk identification', 'Risk analysis and evaluation', 'Risk treatment'],
  },
  {
    icon: 'eye',
    title: 'ISO/IEC 27701',
    desc: 'Privacy information management guidance for organizations handling personal information.',
    items: ['PII protection', 'Privacy management controls', 'Privacy obligations mapping'],
  },
]

const strategicValue = [
  { icon: 'target', title: 'Deeper security insight', desc: 'Use complementary standards to connect ISMS requirements, control guidance, and risk decisions.' },
  { icon: 'globe', title: 'A shared security language', desc: 'Build consistent terminology for teams, customers, suppliers, and assurance partners.' },
  { icon: 'document', title: 'Clearer governance', desc: 'Strengthen policies, accountability, and documented decision-making across the organization.' },
  { icon: 'trend', title: 'Scalable security maturity', desc: 'Adapt the standards to your context and evolve the program as your organization grows.' },
  { icon: 'handshake', title: 'Credible assurance', desc: 'Support stakeholder confidence with a coherent, risk-informed security program.' },
]

const roadmap = [
  { title: 'Knowledge Scoping', desc: 'Identify the ISO/IEC 27000-family standards relevant to your business, obligations, and security goals.' },
  { title: 'Current Posture Review', desc: 'Assess existing governance, controls, risk practices, and documented information.' },
  { title: 'Strategy Architecture', desc: 'Build a practical roadmap connecting applicable requirements, guidance, ownership, and priorities.' },
  { title: 'Control Implementation', desc: 'Support teams in adopting appropriate organizational and technical safeguards.' },
  { title: 'Internal Readiness', desc: 'Review evidence, responsibilities, and processes before an independent audit or assessment.' },
  { title: 'Ongoing Optimization', desc: 'Use monitoring, reviews, and lessons learned to continually improve the security program.' },
]

const strategicCoverage = [
  { icon: 'document', title: 'Standard Terminology', desc: 'Establish a common vocabulary for information security and assurance activities.' },
  { icon: 'scale', title: 'Risk Governance', desc: 'Connect leadership decisions with consistent risk assessment and treatment.' },
  { icon: 'refresh', title: 'Operational Resilience', desc: 'Integrate security operations, incident preparedness, and continuity considerations.' },
  { icon: 'globe', title: 'Compliance Mapping', desc: 'Map applicable standards and requirements to relevant legal and customer obligations.' },
  { icon: 'devices', title: 'Asset Stewardship', desc: 'Apply appropriate ownership, classification, and protection throughout information lifecycles.' },
  { icon: 'shield', title: 'Legal & Privacy Alignment', desc: 'Consider privacy, contractual, and regulatory requirements in security governance.' },
]

const audience = [
  'Enterprise security teams',
  'Chief Information Security Officers',
  'Legal and compliance leads',
  'Boards and executive leadership',
  'Product security and integrity groups',
]

const inquiryOptions = [
  'ISO 27000',
  'ISO 27001',
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

export default function Iso27000Page() {
  usePageMeta(
    'ISO/IEC 27000 Series Consultancy & Strategy | ITC India CyberSec',
    'Strategic consultancy for the ISO/IEC 27000 family, including ISO/IEC 27001, 27002, 27005, and 27701, aligned to your organization and security objectives.',
  )

  return (
    <main className="svc-page iso27000-page">
      <ServiceHero
        eyebrow="Strategic Security Advisors"
        title="ISO 27000"
        highlight="Consultancy & Certification Services"
        quote="The Blueprint for Resilience. The Foundation for Trust. Your Security North Star."
        text="The ISO/IEC 27000 family provides shared terminology, requirements, and guidance for information security management. We help organizations select and apply relevant standards so security controls and governance support business objectives and protect critical information assets."
        primaryCta="Start Gap Analysis"
        secondaryCta="Talk to a Strategy Lead"
        image={heroImage}
      />

      <section className="section-padding svc-bg-white iso27000-ecosystem">
        <div className="container">
          <SectionHeader
            label="The Security Ecosystem"
            title="The ISO 27000"
            highlight="Series"
            subtitle="The ISO/IEC 27000 family is a library of related standards and guidance. It is broader than a single certification: different publications serve different information security and privacy management needs."
          />
          <ServiceCardGrid services={standards} />
        </div>
      </section>

      <section className="section-padding iso27000-value">
        <div className="container">
          <SectionHeader
            label="Strategic Value"
            title="Why Focus on the"
            highlight="Entire Ecosystem?"
            subtitle="Use the standards that fit your objectives to connect risk management, practical controls, privacy, and governance."
          />
          <ServiceCardGrid services={strategicValue} />
        </div>
      </section>

      <section className="section-padding svc-bg-white iso27000-outcomes">
        <div className="container">
          <SectionHeader
            label="Strategic Outcomes"
            title="Choose Your"
            highlight="Starting Point"
            subtitle="We can help define an initial standards map or develop a broader governance roadmap to support your security maturity goals."
          />
          <figure className="iso27000-outcome-media">
            <img
              src={outcomesImage}
              alt="Strategic information security planning and governance"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>From standards mapping to full governance</span>
              <strong>A clear strategy for your security maturity.</strong>
              <p>Turn the right standards into a practical, connected security program.</p>
              <ol className="iso27000-outcome-steps">
                <li><span>01</span>Map standards</li>
                <li><span>02</span>Align governance</li>
                <li><span>03</span>Improve continuously</li>
              </ol>
            </figcaption>
          </figure>
          <div className="iso27000-outcome-grid">
            <article className="iso27000-outcome-card">
              <span className="iso27000-outcome-index">01</span>
              <span className="iso27000-outcome-label">Standard Mapping</span>
              <h3>ISO Roadmap Definition</h3>
              <p className="iso27000-outcome-quote">“Find the standards that support your success.”</p>
              <h4>Includes</h4>
              <CheckList items={['Standard applicability review', 'Regulatory and control gap analysis', 'Executive-ready roadmap']} />
              <h4>Benefits</h4>
              <CheckList items={['Focused investment', 'Clear priorities', 'Practical next steps']} />
            </article>
            <article className="iso27000-outcome-card iso27000-outcome-featured">
              <span className="iso27000-outcome-index">02</span>
              <span className="iso27000-outcome-label">Full Governance</span>
              <h3>Integrated Security Governance</h3>
              <p className="iso27000-outcome-quote">“Connect standards, ownership, and improvement.”</p>
              <h4>Includes</h4>
              <CheckList items={['ISMS and governance alignment', 'Risk and control ownership', 'Policy and evidence structure']} />
              <h4>Benefits</h4>
              <CheckList items={['Consistent decision-making', 'Scalable oversight', 'Continuous improvement']} />
            </article>
          </div>
          <p className="iso27000-outcome-note">The standards selected and the resulting work products depend on your organization’s scope, objectives, applicable requirements, and risk profile.</p>
        </div>
      </section>

      <ProcessSection
        label="Consultancy Workflow"
        title="The Strategic"
        highlight="Roadmap"
        subtitle="A structured approach to turning the ISO/IEC 27000 family into a practical security program."
        steps={roadmap}
        className="iso27000-roadmap"
      />

      <section className="section-padding svc-bg-white iso27000-scope">
        <div className="container">
          <SectionHeader
            label="Strategic Coverage"
            title="A Connected View of"
            highlight="Information Security"
            subtitle="Apply governance and guidance across the areas that matter to your organization."
          />
          <ServiceCardGrid services={strategicCoverage} />
        </div>
      </section>

      <AudienceSection
        label="Strategic Advice"
        title="Built for Security"
        highlight="Decision Makers"
        items={audience}
        callout="Move beyond static compliance. Build a dynamic governance program informed by the ISO/IEC 27000 family and your organization’s evolving risks."
        className="iso27000-audience"
      />

      <CtaBanner
        title="Build a Security Program Around"
        highlight="Your Business"
        text="Get expert guidance on selecting and applying the ISO/IEC 27000-family standards that fit your organization’s goals."
        primaryCta="Start Gap Analysis"
        secondaryCta="Talk to a Strategy Lead"
      />

      <ServiceContact
        defaultInquiry="ISO 27000"
        inquiryOptions={inquiryOptions}
        heading="Talk to Our ISO 27000 Strategy Team"
      />
    </main>
  )
}
