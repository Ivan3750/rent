export async function POST(req) {
  try {
    const { name, phone, email, service, message } = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, message: "Navn og telefon er påkrævet" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const telegramMessage = [
      "📩 Ny kontaktformular!",
      `Navn: ${name}`,
      `Telefon: ${phone}`,
      email ? `Email: ${email}` : null,
      service ? `Ydelse: ${service}` : null,
      message ? `Besked: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Telegram API error:", data);
      throw new Error("Telegram API error");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Telegram send error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending form" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}