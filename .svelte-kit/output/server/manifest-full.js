export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot","et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg","et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf","et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff","et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot","et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg","et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf","et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff","et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot","et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg","et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf","et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff","et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot","et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg","et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf","et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff","et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.eot","et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.svg","et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.ttf","et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.woff","images/cs-fundamentals/Screenshot 2024-12-13 at 12.48.17 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.02.30 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.05.59 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.07.56 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.10.34 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.24.43 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.25.05 PM.png","images/cs-fundamentals/Screenshot 2025-01-21 at 11.25.55 PM.png","images/cs-fundamentals/databases/Screenshot 2025-05-24 at 9.23.45 AM.png","images/cs-fundamentals/image-1.png","images/cs-fundamentals/image-2.png","images/cs-fundamentals/image-3.png","images/cs-fundamentals/image-4.png","images/cs-fundamentals/image-5.png","images/cs-fundamentals/image-6.png","images/cs-fundamentals/image-7.png","images/cs-fundamentals/image.png","images/dev/Screenshot 2025-05-31 at 11.59.01 AM.png","images/dev/Screenshot 2025-05-31 at 9.27.21 AM.png","images/dev/Screenshot 2025-05-31 at 9.27.52 AM.png","images/finance/microeconomics/Screenshot 2025-07-19 at 4.42.04 PM.png","images/migrated/Finance/microeconomics/assets/Screenshot 2025-07-19 at 4.42.04 PM.png","images/migrated/cs-fundamentals/img/Screenshot 2024-12-13 at 12.48.17 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 1.17.04 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 1.35.58 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 10.04.45 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 11.48.05 AM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 7.01.38 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 9.46.25 PM.png","images/migrated/data-engineering-zoomcamp/imgs/Screenshot 2026-01-18 at 9.53.50 PM.png","my-diagram.png","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C43cdrKu.js",app:"_app/immutable/entry/app.H3ukDrf1.js",imports:["_app/immutable/entry/start.C43cdrKu.js","_app/immutable/chunks/Cf-iAI25.js","_app/immutable/chunks/BE8cp4uu.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/Lp0pb3Tn.js","_app/immutable/chunks/BRX--utR.js","_app/immutable/entry/app.H3ukDrf1.js","_app/immutable/chunks/BxqDlgHp.js","_app/immutable/chunks/BE8cp4uu.js","_app/immutable/chunks/CactJclj.js","_app/immutable/chunks/BUhI7Qyb.js","_app/immutable/chunks/CCM6-gPc.js","_app/immutable/chunks/BRX--utR.js","_app/immutable/chunks/BXkG0FcK.js","_app/immutable/chunks/B58ZsqZY.js","_app/immutable/chunks/D9W1QFau.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/graph",
				pattern: /^\/graph\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/notes/[...slug]",
				pattern: /^\/notes(?:\/([^]*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
