import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { convexSignature, nuraSignature, convexName, nuraName, nuraPersonalId, signedAt } = body;

    const signedDate = new Date(signedAt).toLocaleDateString("sq-AL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
              color: white;
              padding: 30px;
              border-radius: 10px;
              text-align: center;
              margin-bottom: 30px;
            }
            .signature-section {
              margin: 30px 0;
              padding: 20px;
              border: 2px solid #e5e7eb;
              border-radius: 8px;
              background: #f9fafb;
            }
            .signature-image {
              max-width: 400px;
              border: 1px solid #d1d5db;
              border-radius: 4px;
              background: white;
              padding: 10px;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Marrëveshje Bashkëpunimi</h1>
            <p>Convex SHPK x Nura Legacy</p>
          </div>

          <p><strong>Data e Nënshkrimit:</strong> ${signedDate}</p>

          <div class="signature-section">
            <h3>1. Nënshkrimi Korporativ - Nura Legacy</h3>
            <p><strong>Përfaqësues:</strong> ${convexName}</p>
            <img src="${convexSignature}" alt="Nura Legacy Signature" class="signature-image" />
          </div>

          <div class="signature-section" style="background: #fef3c7; border-color: #f59e0b;">
            <h3>2. Garanci Personale - Bledar Gjata (Person Fizik)</h3>
            <p><strong>Emri i Plotë:</strong> ${nuraName}</p>
            <p><strong>Numri Personal:</strong> ${nuraPersonalId || 'N/A'}</p>
            <img src="${nuraSignature}" alt="Personal Guarantee Signature" class="signature-image" />
          </div>

          <div class="footer">
            <p>Ky dokument është gjeneruar automatikisht nga sistemi i nënshkrimit të kontratave.</p>
            <p>Për çdo pyetje, ju lutem kontaktoni palët përkatëse.</p>
          </div>
        </body>
      </html>
    `;

    // Send email using Gmail SMTP with Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''),
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    try {
      const emailResult = await transporter.sendMail({
        from: `"Kontrata App" <${process.env.GMAIL_USER}>`,
        to: 'erion.ahmeti057@gmail.com, erion.ahmeti@convex.icu',
        subject: 'Kontratë e Nënshkruar - Convex x Nura Legacy',
        html: htmlContent,
      });

      console.log("Email sent successfully via Gmail:", emailResult.messageId);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log the data even if email fails
      console.log("=== CONTRACT SIGNED ===");
      console.log("Date:", signedDate);
      console.log("Nura Legacy Rep:", convexName);
      console.log("Personal Name:", nuraName);
      console.log("Personal ID:", nuraPersonalId);
      console.log("======================");
    }

    return NextResponse.json({ 
      success: true,
      message: 'Contract processed. Email will be sent shortly.'
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
