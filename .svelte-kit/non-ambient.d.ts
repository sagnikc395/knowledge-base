
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/graph" | "/notes" | "/notes/[...slug]";
		RouteParams(): {
			"/notes/[...slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/graph": Record<string, never>;
			"/notes": { slug?: string };
			"/notes/[...slug]": { slug: string }
		};
		Pathname(): "/" | "/graph" | "/graph/" | "/notes" | "/notes/" | `/notes/${string}` & {} | `/notes/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot" | "/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg" | "/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf" | "/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff" | "/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot" | "/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg" | "/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf" | "/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff" | "/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot" | "/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg" | "/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf" | "/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff" | "/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot" | "/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg" | "/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf" | "/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff" | "/et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.eot" | "/et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.svg" | "/et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.ttf" | "/et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.woff" | "/images/cs-fundamentals/Screenshot 2024-12-13 at 12.48.17 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.02.30 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.05.59 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.07.56 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.10.34 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.24.43 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.25.05 PM.png" | "/images/cs-fundamentals/Screenshot 2025-01-21 at 11.25.55 PM.png" | "/images/cs-fundamentals/databases/Screenshot 2025-05-24 at 9.23.45 AM.png" | "/images/cs-fundamentals/image-1.png" | "/images/cs-fundamentals/image-2.png" | "/images/cs-fundamentals/image-3.png" | "/images/cs-fundamentals/image-4.png" | "/images/cs-fundamentals/image-5.png" | "/images/cs-fundamentals/image-6.png" | "/images/cs-fundamentals/image-7.png" | "/images/cs-fundamentals/image.png" | "/images/dev/Screenshot 2025-05-31 at 11.59.01 AM.png" | "/images/dev/Screenshot 2025-05-31 at 9.27.21 AM.png" | "/images/dev/Screenshot 2025-05-31 at 9.27.52 AM.png" | "/images/finance/microeconomics/Screenshot 2025-07-19 at 4.42.04 PM.png" | "/images/migrated/Finance/microeconomics/assets/Screenshot 2025-07-19 at 4.42.04 PM.png" | "/images/migrated/cs-fundamentals/img/Screenshot 2024-12-13 at 12.48.17 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 1.17.04 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 1.35.58 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 10.04.45 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 11.48.05 AM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 7.01.38 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 9.46.25 PM.png" | "/images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 9.53.50 PM.png" | "/my-diagram.png" | "/robots.txt" | string & {};
	}
}