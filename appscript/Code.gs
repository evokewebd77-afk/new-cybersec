const RECIPIENT_EMAIL = 'damnart.seo@gmail.com'
const SITE_NAME = 'ITC India CyberSec'

function doGet() {
  return jsonResponse({
    result: 'ok',
    message: 'Website form endpoint is live.',
  })
}

function doPost(e) {
  try {
    const data = parseRequest(e)

    const fullName = clean(data.fullName || data.name)
    const email = clean(data.email)
    const phone = clean(data.phone)
    const organization = clean(data.organization || data.company)
    const inquiryType = clean(data.inquiryType || data.inquiry)
    const message = String(data.message || '').trim()
    const formSource = clean(data.formSource || 'Website')
    const subscribe = clean(data.subscribe)

    if (!fullName || !email || !phone || !organization) {
      return jsonResponse({
        result: 'error',
        message: 'Please fill in all required fields.',
      })
    }

    if (!isValidEmail(email)) {
      return jsonResponse({
        result: 'error',
        message: 'Please enter a valid email address.',
      })
    }

    const subject = `New Website Inquiry: ${inquiryType || 'General'} - ${fullName}`

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#1a2744;line-height:1.6;max-width:640px;">
        <h2 style="margin:0 0 20px;font-size:20px;color:#1f6fe5;">New Website Inquiry</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;font-weight:bold;width:150px;">Source</td><td style="padding:8px 0;">${escapeHtml(formSource)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Full Name</td><td style="padding:8px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td style="padding:8px 0;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Organization</td><td style="padding:8px 0;">${escapeHtml(organization)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Inquiry Type</td><td style="padding:8px 0;">${escapeHtml(inquiryType || 'General')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Subscribed</td><td style="padding:8px 0;">${subscribe ? 'Yes' : 'No'}</td></tr>
        </table>
        <h3 style="margin:24px 0 8px;font-size:15px;color:#1f6fe5;">Project Scope / Message</h3>
        <p style="margin:0;padding:14px;background:#f3f5f8;border-radius:8px;white-space:pre-wrap;">${escapeHtml(message || 'No message provided.')}</p>
      </div>
    `

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email,
      name: SITE_NAME,
    })

    return jsonResponse({
      result: 'success',
      message: 'Inquiry sent successfully.',
    })
  } catch (error) {
    return jsonResponse({
      result: 'error',
      message: error.message || 'Something went wrong. Please try again.',
    })
  }
}

function parseRequest(e) {
  if (!e) return {}

  if (e.postData && e.postData.contents) {
    const type = e.postData.type || ''
    if (type.indexOf('application/json') !== -1) {
      try {
        return JSON.parse(e.postData.contents)
      } catch (error) {
        return {}
      }
    }
  }

  return e.parameter || {}
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function clean(value) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim()
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
