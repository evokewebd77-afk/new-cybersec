import { useEffect, useState } from 'react'
import Icon from '../components/Icon'

export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

export function SectionHeader({ label, title, highlight, subtitle }) {
  return (
    <div className="section-header">
      <div className="section-label">{label}</div>
      <h2 className="section-title">
        {title}{highlight && <> <span className="highlight-text">{highlight}</span></>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export function ServiceHero({ eyebrow, title, highlight, quote, text, primaryCta, secondaryCta, image, asideTitle, asideItems }) {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('svc-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="svc-hero">
      <div className="svc-hero-bg" aria-hidden="true">
        <img src={image} alt="" />
        <div className="svc-hero-overlay" />
      </div>
      <div className="container">
        <div className={`svc-hero-grid ${asideItems ? '' : 'svc-hero-grid-solo'}`}>
          <div className="svc-hero-content">
            <div className="svc-eyebrow">{eyebrow}</div>
            <h1 className="svc-hero-title">
              {title}<br />
              <span className="highlight-text">{highlight}</span>
            </h1>
            {quote && <p className="svc-hero-quote">&ldquo;{quote}&rdquo;</p>}
            <p className="svc-hero-text">{text}</p>
            <div className="svc-hero-actions">
              <a href="#svc-contact" className="btn btn-orange" onClick={scrollToContact}>{primaryCta}</a>
              <a href="#svc-contact" className="btn btn-glass" onClick={scrollToContact}>{secondaryCta}</a>
            </div>
          </div>

          {asideItems && (
            <aside className="svc-hero-aside">
              <span className="svc-hero-aside-kicker">At a glance</span>
              <h2>{asideTitle}</h2>
              <ul>
                {asideItems.map((item) => (
                  <li key={item}>
                    <span className="svc-hero-aside-check"><Icon name="check" /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

export function CheckList({ items }) {
  return (
    <ul className="svc-list">
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : String(item)}>
          <Icon name="check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCardGrid({ services }) {
  return (
    <div className="svc-card-grid">
      {services.map((service, index) => (
        <article className="svc-card" key={service.title}>
          <div className="svc-card-head">
            <span className="svc-card-icon"><Icon name={service.icon} /></span>
            <span className="svc-card-number">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3>{service.title}</h3>
          {service.desc && <p>{service.desc}</p>}
          {service.items && <CheckList items={service.items} />}
        </article>
      ))}
    </div>
  )
}

export function ProcessSection({ id, label, title, highlight, subtitle, steps, children, className = '' }) {
  return (
    <section id={id} className={`section-padding soc3-process ${className}`.trim()}>
      <div className="container">
        <SectionHeader label={label} title={title} highlight={highlight} subtitle={subtitle} />
        {children}
        <div className="soc3-process-grid">
          {steps.map((step, index) => (
            <div key={step.title} className="soc3-step-card">
              <span className="soc3-step-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompareSection({ label, title, highlight, subtitle, columns, rows, callout }) {
  return (
    <section className="section-padding soc3-compare">
      <div className="container">
        <SectionHeader label={label} title={title} highlight={highlight} subtitle={subtitle} />
        <div className="soc3-table-wrap">
          <table className="soc3-table">
            <thead>
              <tr>
                <th>Feature</th>
                {columns.map((column) => <th key={column}>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td data-label="Feature">{row.feature}</td>
                  <td data-label={columns[0]} className="soc3-col-soc2">{row.a}</td>
                  <td data-label={columns[1]} className="soc3-col-soc3">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {callout && (
          <div className="soc3-callout">
            <Icon name="badge" className="soc3-callout-icon" />
            <span>{callout}</span>
          </div>
        )}
      </div>
    </section>
  )
}

export function AudienceSection({ label, title, highlight, items, callout, className = '' }) {
  return (
    <section className={`section-padding soc3-audience ${className}`.trim()}>
      <div className="container">
        <SectionHeader label={label} title={title} highlight={highlight} />
        <div className="soc3-audience-list">
          {items.map((item) => (
            <span key={item} className="soc3-audience-pill">
              <span className="soc3-pill-check"><Icon name="check" /></span> {item}
            </span>
          ))}
        </div>
        {callout && (
          <div className="soc3-callout">
            <Icon name="arrow" className="soc3-callout-icon" />
            <span>{callout}</span>
          </div>
        )}
      </div>
    </section>
  )
}

export function WhySection({ items }) {
  return (
    <section className="section-padding soc3-why">
      <div className="container">
        <SectionHeader
          label="Your Compliance Partner"
          title="Why Choose"
          highlight="ITC India CyberSec?"
        />
        <div className="soc3-why-grid">
          {items.map((item, index) => (
            <div key={item.title} className="soc3-why-card">
              <span className="soc3-why-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner({ title, highlight, text, primaryCta, secondaryCta }) {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('svc-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="soc3-cta">
      <div className="container">
        <div className="soc3-cta-inner">
          <h2>{title} <span>{highlight}</span></h2>
          <p>{text}</p>
          <div className="soc3-cta-actions">
            <a href="#svc-contact" className="btn btn-orange" onClick={scrollToContact}>{primaryCta}</a>
            <a href="#svc-contact" className="btn btn-glass" onClick={scrollToContact}>{secondaryCta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function NoteSection({ children }) {
  return (
    <section className="svc-note-section">
      <div className="container">
        <p className="svc-note">{children}</p>
      </div>
    </section>
  )
}

export function ServiceFaq({ label = 'Common Questions', title, highlight = 'FAQs', subtitle, faqs }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section-padding faq-section">
      <div className="container">
        <SectionHeader label={label} title={title} highlight={highlight} subtitle={subtitle} />
        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div key={item.q} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span>{item.q}</span>
                <span className="faq-toggle-icon">{openFaq === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceContact({
  defaultInquiry,
  inquiryOptions,
  heading = 'Contact Our Experts',
  extraFields = [],
  messageLabel = 'Describe your requirements',
  messagePlaceholder = 'Describe your requirements...',
}) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState(defaultInquiry)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <section id="svc-contact" className="section-padding about-contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Contact Us</div>
          <h2 className="section-title">{heading}</h2>
          <p className="section-subtitle">
            Reach out for audits, compliance, or cybersecurity consultations.
          </p>
        </div>

        <div className="about-contact-card">
          {formSubmitted ? (
            <div className="form-success-box">
              <span className="success-icon"><Icon name="check" /></span>
              <h3>Thank you for reaching out!</h3>
              <p>Our cybersecurity and audit team has received your inquiry and will contact you within 24 business hours.</p>
            </div>
          ) : (
            <form className="inquiry-form" onSubmit={handleFormSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="svcFullName">Full Name</label>
                  <input id="svcFullName" type="text" className="form-input" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="svcEmail">Email Address</label>
                  <input id="svcEmail" type="email" className="form-input" placeholder="Email Address" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="svcPhone">Phone Number</label>
                  <input id="svcPhone" type="tel" className="form-input" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="svcOrg">Company / Organization</label>
                  <input id="svcOrg" type="text" className="form-input" placeholder="Company / Organization" required />
                </div>
              </div>

              {extraFields.length > 0 && (
                <div className="form-row-2">
                  {extraFields.map((field) => (
                    <div className="form-group" key={field.id}>
                      <label htmlFor={field.id}>{field.label}</label>
                      {field.type === 'select' ? (
                        <select
                          id={field.id}
                          className="form-input form-select"
                          defaultValue=""
                          required={field.required}
                        >
                          <option value="" disabled>Select an option</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.id}
                          type={field.type || 'text'}
                          className="form-input"
                          placeholder={field.placeholder || field.label}
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="svcInquiry">Select an inquiry type</label>
                <select
                  id="svcInquiry"
                  className="form-input form-select"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select an inquiry type</option>
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="svcMessage">{messageLabel}</label>
                <textarea
                  id="svcMessage"
                  rows="4"
                  className="form-input form-textarea"
                  placeholder={messagePlaceholder}
                ></textarea>
              </div>

              <div className="form-checkbox-group">
                <input type="checkbox" id="svcSubscribe" defaultChecked />
                <label htmlFor="svcSubscribe">Subscribe to security &amp; compliance updates</label>
              </div>

              <button type="submit" className="btn btn-orange btn-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
