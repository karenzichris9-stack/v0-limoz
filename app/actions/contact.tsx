"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  console.log("[v0] Contact form submission started")

  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[v0] Contact form validation failed - missing required fields")
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    console.log("[v0] Sending contact email to karenzichris9@gmail.com")

    const result = await resend.emails.send({
      from: "Limoz Rwanda <onboarding@resend.dev>",
      to: "karenzichris9@gmail.com",
      subject: `Contact Form: ${subject || "New Message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f39c12; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject || "No subject"}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p>${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was submitted through the Limoz Rwanda contact form.</p>
          </div>
        </div>
      `,
    })

    console.log("[v0] Contact email sent successfully:", result)

    return {
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    if (error instanceof Error) {
      console.error("[v0] Error message:", error.message)
    }
    return {
      success: false,
      error: "Failed to send message. Please try again or contact us directly at +250 782 280 204.",
    }
  }
}
