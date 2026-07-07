'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Photo } from '@/lib/photos';

interface PhotoCardProps {
	photo: Photo;
	index: number;
}

export default function PhotoCard({ photo, index }: PhotoCardProps) {
	return (
		<Link href={`/photo/${photo.id}`} className="group block">
			<article className="relative overflow-hidden bg-card border border-border transition-all duration-500 hover:border-accent/40">
				{/* Image container */}
				<div className="relative overflow-hidden aspect-[3/4]">
					<Image
						src={photo.src}
						alt={photo.alt}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						priority={index < 4}
					/>
					{/* Overlay on hover */}
					<div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />

					{/* Category badge */}
					<span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-background/80 text-muted-foreground backdrop-blur-sm">
						{photo.category}
					</span>
				</div>

				{/* Card footer */}
				<div className="px-4 py-3 flex items-center justify-between border-t border-border">
					<div>
						<h2 className="font-serif text-sm text-card-foreground group-hover:text-accent transition-colors duration-300">
							{photo.title}
						</h2>
						<p className="font-mono text-[11px] text-muted-foreground mt-0.5">
							{photo.size}
						</p>
					</div>
					<span className="font-mono text-xs text-accent">{photo.price}</span>
				</div>
			</article>
		</Link>
	);
}
