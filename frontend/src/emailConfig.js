// ─── EmailJS Configuration ─────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add Email Service → connect Gmail (samarpana2000@gmail.com) → copy Service ID
// 3. Create two Email Templates (see below for variable names used)
// 4. Go to Account → General → copy your Public Key

export const EMAILJS_PUBLIC_KEY   = 'YOUR_PUBLIC_KEY'      // Account → General
export const EMAILJS_SERVICE_ID   = 'YOUR_SERVICE_ID'      // Email Services

// Template for Contact form — use these variables in your template:
// {{from_name}}, {{from_email}}, {{phone}}, {{address}}, {{message}}
export const EMAILJS_CONTACT_TEMPLATE = 'YOUR_CONTACT_TEMPLATE_ID'

// Template for Volunteer form — use these variables in your template:
// {{from_name}}, {{from_email}}, {{phone}}, {{area}}, {{message}}
export const EMAILJS_VOLUNTEER_TEMPLATE = 'YOUR_VOLUNTEER_TEMPLATE_ID'
