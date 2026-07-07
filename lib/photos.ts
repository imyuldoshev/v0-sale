export interface Photo {
	id: number;
	src: string;
	alt: string;
	title: string;
	description: string;
	price: string;
	size: string;
	category: string;
}

export const photos: Photo[] = [
	{
		id: 1,
		src: '/1.webp',
		alt: 'Photo 1',
		title: 'Silent Morning',
		description:
			'Tongsahar sukutida olingan bu asar tabiatning eng sokin lahzasini aks ettiradi. Yorug\'lik va soyaning nozik o\'yini kadrni alohida qiladi.',
		price: '250,000 so\'m',
		size: '60 × 40 sm',
		category: 'Landscape',
	},
	{
		id: 2,
		src: '/2.webp',
		alt: 'Photo 2',
		title: 'Urban Geometry',
		description:
			'Shahar me\'morchiligining geometrik go\'zalligi. Beton va shishaning simfoniyasi ko\'zni quvontiruvchi kompozitsiya yaratadi.',
		price: '300,000 so\'m',
		size: '80 × 60 sm',
		category: 'Architecture',
	},
	{
		id: 3,
		src: '/3.webp',
		alt: 'Photo 3',
		title: 'Whisper of Light',
		description:
			'Nur va zulmatning chegarasida ushlangan bu lahza ko\'zga ko\'rinmaydigan hissiyotlarni ifoda etadi. Minimal, lekin chuqur mazmunli.',
		price: '280,000 so\'m',
		size: '70 × 50 sm',
		category: 'Abstract',
	},
	{
		id: 4,
		src: '/4.webp',
		alt: 'Photo 4',
		title: 'Deep Horizon',
		description:
			'Ufqning nariyog\'iga uzayib ketgan manzara. Cheksizlik tuyg\'usi va ozodlik hissini yetkazuvchi asardir.',
		price: '320,000 so\'m',
		size: '90 × 60 sm',
		category: 'Landscape',
	},
	{
		id: 5,
		src: '/5.webp',
		alt: 'Photo 5',
		title: 'Texture Study No.1',
		description:
			'Sirtlarning to\'qimalari va fakturasi haqidagi tadqiqot. Har bir detal bir dunyo — yaqinlashgan sari yangi kashfiyotlar ochiladi.',
		price: '200,000 so\'m',
		size: '50 × 50 sm',
		category: 'Macro',
	},
	{
		id: 6,
		src: '/6.webp',
		alt: 'Photo 6',
		title: 'Dusk Reflection',
		description:
			'Shom paytida suvda aks etgan ranglarning o\'yini. Ikki dunyo — real va tasavvur — birlashib go\'zal bir kadr hosil qilgan.',
		price: '270,000 so\'m',
		size: '75 × 50 sm',
		category: 'Nature',
	},
	{
		id: 7,
		src: '/7.webp',
		alt: 'Photo 7',
		title: 'Monochrome Study',
		description:
			'Rangsizlik — bu kamchilik emas, balki kuchdir. Oq va qora palitrasida ifoda etilgan bu asar ranglardan ortiq gap so\'zlaydi.',
		price: '240,000 so\'m',
		size: '60 × 60 sm',
		category: 'Portrait',
	},
	{
		id: 8,
		src: '/8.webp',
		alt: 'Photo 8',
		title: 'Fleeting Moment',
		description:
			'O\'tkinchi lahzaning abadiy in\'ikosi. Kamera bu soniyani to\'xtatib qo\'ydi, endi u hamisha shu yerda — muzlatilgan, o\'lmas.',
		price: '350,000 so\'m',
		size: '100 × 70 sm',
		category: 'Street',
	},
];

export function getPhotoById(id: number): Photo | undefined {
	return photos.find((p) => p.id === id);
}
