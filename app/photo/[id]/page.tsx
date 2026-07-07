import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPhotoById, photos } from '@/lib/photos';
import OrderButton from '@/components/OrderButton';

export function generateStaticParams() {
	return photos.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const photo = getPhotoById(Number(id));
	if (!photo) return {};
	return {
		title: `${photo.title} — Studio Archive`,
		description: photo.description,
	};
}

export default async function PhotoPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const photo = getPhotoById(Number(id));

	if (!photo) notFound();

	const currentIndex = photos.findIndex((p) => p.id === photo.id);
	const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
	const nextPhoto =
		currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

	return (
		<main className="min-h-screen bg-background">
			{/* Top nav */}
			<header className="border-b border-border px-6 py-5 flex items-center justify-between">
				<Link
					href="/"
					className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
				>
					<span aria-hidden="true">←</span>
					<span>Barcha asarlar</span>
				</Link>
				<span className="font-serif italic text-sm text-foreground">
					Studio Archive
				</span>
			</header>

			{/* Content */}
			<div className="flex flex-col lg:flex-row min-h-[calc(100vh-65px)]">
				{/* Image panel */}
				<div className="lg:flex-1 relative bg-muted flex items-center justify-center overflow-hidden min-h-[60vw] lg:min-h-0">
					<div className="relative w-full h-full min-h-[400px]">
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							sizes="(max-width: 1024px) 100vw, 60vw"
							className="object-contain"
							priority
						/>
					</div>
				</div>

				{/* Info panel */}
				<aside className="lg:w-[380px] xl:w-[420px] border-l border-border flex flex-col">
					{/* Category + number */}
					<div className="px-8 pt-8 pb-6 border-b border-border">
						<div className="flex items-center justify-between mb-6">
							<span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
								{photo.category}
							</span>
							<span className="font-mono text-[10px] text-muted-foreground">
								No.{String(photo.id).padStart(2, '0')}
							</span>
						</div>
						<h1 className="font-serif text-3xl text-foreground leading-tight text-balance">
							{photo.title}
						</h1>
					</div>

					{/* Description */}
					<div className="px-8 py-6 border-b border-border flex-1">
						<p className="font-mono text-[12px] text-muted-foreground leading-relaxed">
							{photo.description}
						</p>
					</div>

					{/* Specs */}
					<div className="px-8 py-6 border-b border-border">
						<dl className="space-y-3">
							<div className="flex items-center justify-between">
								<dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
									O&apos;lcham
								</dt>
								<dd className="font-mono text-[12px] text-foreground">
									{photo.size}
								</dd>
							</div>
							<div className="flex items-center justify-between">
								<dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
									Format
								</dt>
								<dd className="font-mono text-[12px] text-foreground">
									Fine Art Print
								</dd>
							</div>
							<div className="flex items-center justify-between">
								<dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
									Narx
								</dt>
								<dd className="font-mono text-base text-accent font-semibold">
									{photo.price}
								</dd>
							</div>
						</dl>
					</div>

					{/* Order button */}
					<div className="px-8 py-6 border-b border-border">
						<OrderButton photo={photo} />
						<p className="font-mono text-[10px] text-muted-foreground mt-3 leading-relaxed">
							Buyurtma Telegram orqali qabul qilinadi. Operator 24 soat ichida
							bog&apos;lanadi.
						</p>
					</div>

					{/* Prev / Next navigation */}
					<div className="px-8 py-5 flex items-center justify-between">
						{prevPhoto ? (
							<Link
								href={`/photo/${prevPhoto.id}`}
								className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
							>
								<span aria-hidden="true">←</span>
								<span className="sr-only">Oldingi</span>
								<span aria-hidden="true">{prevPhoto.title}</span>
							</Link>
						) : (
							<span />
						)}
						{nextPhoto ? (
							<Link
								href={`/photo/${nextPhoto.id}`}
								className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
							>
								<span aria-hidden="true">{nextPhoto.title}</span>
								<span className="sr-only">Keyingi</span>
								<span aria-hidden="true">→</span>
							</Link>
						) : (
							<span />
						)}
					</div>
				</aside>
			</div>
		</main>
	);
}
