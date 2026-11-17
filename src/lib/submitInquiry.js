const APPS_SCRIPT_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbytzBGrV1nYK8uJtMXN16xgOh-gzAnE7vO2_SeaDaM9PyEHz7gfyri_9Jsa_qeXpl59/exec'

export async function submitInquiry(form) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    throw new Error('Form is not connected yet. Please email cybersec@itcindia.org directly.')
  }

  const payload = new URLSearchParams(new FormData(form))

  const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: payload.toString(),
  })

  if (!response.ok) {
    throw new Error('Unable to send your message right now. Please try again.')
  }

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (data && data.result === 'error') {
    throw new Error(data.message || 'Unable to send your message right now.')
  }
}
