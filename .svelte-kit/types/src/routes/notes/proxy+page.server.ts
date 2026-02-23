// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getPosts, getPostTree } from '$lib/utils';

export const load = async () => {
	const posts = await getPosts();
	const tree = await getPostTree();
	return { posts, tree };
};
;null as any as PageServerLoad;