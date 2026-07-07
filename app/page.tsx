import PhotoCard from '@/components/PhotoCard';
import { photos } from '@/lib/photos';

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b border-border px-6 py-5 flex items-center justify-between">
				<h1 className="font-serif text-xl text-foreground tracking-tight">
					<span className="italic">Studio</span> Archive
				</h1>
				<span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
					{photos.length} asar
				</span>
			</header>

			{/* Intro */}
			<div className="px-6 pt-8 pb-6 border-b border-border">
				<p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
					— Kolleksiya
				</p>
				<h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
					<span className="italic">Men yarataman;</span> demak men mavjudman
				</h2>
			</div>

			{/* Card Grid */}
			<section className="p-6" aria-label="Foto kolleksiyasi">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border">
					{photos.map((photo, index) => (
						<div key={photo.id} className="bg-background">
							<PhotoCard photo={photo} index={index} />
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border px-6 py-5">
				<p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
					Asar kartasini bosib batafsil ma&apos;lumot oling
				</p>
			</footer>
		</main>
	);
}
