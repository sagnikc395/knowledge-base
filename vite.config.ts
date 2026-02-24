import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	base: process.env.VITE_BASE || '/knowledge-base/',
	plugins: [react()],
	publicDir: 'static',
	resolve: {
		alias: {
			'$lib': path.resolve(__dirname, './src/lib'),
			'$posts': path.resolve(__dirname, './src/posts')
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});
