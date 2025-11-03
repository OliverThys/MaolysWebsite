import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.enum(["ia", "developpement", "consulting", "autre"]),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Replace with actual email service (Resend, SendGrid, etc.)
    // For now, just log the data
    console.log("Contact form submission:", data);

    // Simulate email sending
    // await sendEmail({
    //   to: "contact@maolys.com",
    //   subject: `Nouveau contact de ${data.name}`,
    //   body: `...`,
    // });

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

