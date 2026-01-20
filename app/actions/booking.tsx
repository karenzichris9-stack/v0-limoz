"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBooking(formData: FormData) {
  console.log("[v0] Booking submission started")

  try {
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const vehicleType = formData.get("vehicleType") as string
    const pickupDate = formData.get("pickupDate") as string
    const duration = formData.get("duration") as string
    const notes = formData.get("notes") as string

    // Validate required fields
    if (!fullName || !email || !phone || !vehicleType || !pickupDate || !duration) {
      console.log("[v0] Booking validation failed - missing required fields")
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    console.log("[v0] Sending booking email to karenzichris9@gmail.com")
    console.log("[v0] Vehicle type:", vehicleType)
    console.log("[v0] Pickup date:", pickupDate)

    const result = await resend.emails.send({
      from: "Limoz Rwanda <onboarding@resend.dev>",
      to: "karenzichris9@gmail.com",
      subject: `New Booking Request - ${vehicleType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f39c12; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Booking Details</h3>
            <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
            <p><strong>Pickup Date:</strong> ${pickupDate}</p>
            <p><strong>Duration:</strong> ${duration}</p>
          </div>
          
          ${
            notes
              ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Additional Notes</h3>
            <p>${notes}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This booking request was submitted through the Limoz Rwanda website.</p>
          </div>
        </div>
      `,
    })

    console.log("[v0] Email sent successfully:", result)

    return {
      success: true,
      message: "Booking request submitted successfully! We'll contact you within 24 hours.",
    }
  } catch (error) {
    console.error("[v0] Booking submission error:", error)
    if (error instanceof Error) {
      console.error("[v0] Error message:", error.message)
      console.error("[v0] Error stack:", error.stack)
    }
    return {
      success: false,
      message: "Failed to submit booking. Please try contacting us directly at +250 782 280 204.",
    }
  }
}
