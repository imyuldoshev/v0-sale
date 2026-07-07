import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import "./globals.css"

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument',
	subsets: ['latin'],
	weight: '400',
	style: ['italic', 'normal'],
});

export const metadata: Metadata = {
	title: 'Studio Archive — Foto Kolleksiya',
	description:
		'Professiyonal fotografiya asarlari. Fine Art bosma shaklida sotib oling.',
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="uz" className="bg-background">
			<body
				className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
