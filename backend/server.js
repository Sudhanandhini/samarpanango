require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// ── Contact Form ──────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, address, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' })

  try {
    await transporter.sendMail({
      from: `"Samarpana Website" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2 style="color:#1a3c2e">New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Phone</td><td style="padding:8px">${phone || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Address</td><td style="padding:8px">${address || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Message</td><td style="padding:8px">${message}</td></tr>
        </table>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Contact mail error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// ── Volunteer Form ────────────────────────────────────────────────────────────
app.post('/api/volunteer', async (req, res) => {
  const { name, email, phone, area, message } = req.body
  if (!name || !email) return res.status(400).json({ error: 'Missing required fields' })

  try {
    await transporter.sendMail({
      from: `"Samarpana Website" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Volunteer Application from ${name}`,
      html: `
        <h2 style="color:#1a3c2e">New Volunteer Registration</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Phone</td><td style="padding:8px">${phone || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Area of Interest</td><td style="padding:8px">${area || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Message</td><td style="padding:8px">${message || '—'}</td></tr>
        </table>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Volunteer mail error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
})
