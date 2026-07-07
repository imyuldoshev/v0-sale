import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const { photoId, photoTitle, photoPrice, photoSize } = await req.json();

	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	if (!botToken || !chatId) {
		// If env vars are not set, return a graceful response
		return NextResponse.json(
			{ ok: false, error: 'Telegram sozlanmagan. Bot token va chat ID kerak.' },
			{ status: 503 }
		);
	}

	const message =
		`🛒 Yangi buyurtma!\n\n` +
		`📷 Asar: ${photoTitle}\n` +
		`🔢 ID: #${photoId}\n` +
		`📐 O'lcham: ${photoSize}\n` +
		`💰 Narx: ${photoPrice}\n\n` +
		`Mijoz bilan bog'lanish uchun javob bering.`;

	try {
		const res = await fetch(
			`https://api.telegram.org/bot${botToken}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: chatId,
					text: message,
					parse_mode: 'HTML',
				}),
			}
		);

		const data = await res.json();

		if (!data.ok) {
			return NextResponse.json(
				{ ok: false, error: data.description },
				{ status: 400 }
			);
		}

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ ok: false, error: 'Telegram serveriga ulanib bo\'lmadi.' },
			{ status: 500 }
		);
	}
}
