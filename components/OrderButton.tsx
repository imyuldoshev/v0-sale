'use client';

import { useState } from 'react';
import type { Photo } from '@/lib/photos';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'no-config';

export default function OrderButton({ photo }: { photo: Photo }) {
	const [status, setStatus] = useState<Status>('idle');

	async function handleOrder() {
		setStatus('loading');
		try {
			const res = await fetch('/api/telegram', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					photoId: photo.id,
					photoTitle: photo.title,
					photoPrice: photo.price,
					photoSize: photo.size,
				}),
			});

			const data = await res.json();

			if (res.status === 503) {
				setStatus('no-config');
				return;
			}

			if (data.ok) {
				setStatus('success');
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	}

	if (status === 'success') {
		return (
			<div className="w-full border border-accent/40 bg-accent/5 px-5 py-4 text-center">
				<p className="font-mono text-[11px] uppercase tracking-widest text-accent">
					Buyurtma qabul qilindi
				</p>
				<p className="font-mono text-[10px] text-muted-foreground mt-1">
					Tez orada operator siz bilan bog&apos;lanadi
				</p>
			</div>
		);
	}

	if (status === 'no-config') {
		return (
			<div className="w-full border border-border px-5 py-4 text-center">
				<p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
					Telegram sozlanmagan
				</p>
				<p className="font-mono text-[10px] text-muted-foreground mt-1">
					TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID env o&apos;zgaruvchilarini qo&apos;shing
				</p>
			</div>
		);
	}

	return (
		<button
			onClick={handleOrder}
			disabled={status === 'loading'}
			className="w-full bg-accent text-accent-foreground font-mono text-[11px] uppercase tracking-widest px-5 py-4 transition-all duration-200 hover:bg-accent/90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{status === 'loading' ? (
				<span className="flex items-center justify-center gap-2">
					<span className="inline-block w-3 h-3 border border-accent-foreground/40 border-t-accent-foreground rounded-full animate-spin" />
					Yuborilmoqda...
				</span>
			) : status === 'error' ? (
				'Xatolik — qayta urinib ko\'ring'
			) : (
				'Sotib olish — Telegram orqali'
			)}
		</button>
	);
}
