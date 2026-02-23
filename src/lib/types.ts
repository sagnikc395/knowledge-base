export type Post = {
	title: string;
	slug: string;
	category: string;
	description?: string;
	date: string;
	published: boolean;
	content: string;
	metadata: Record<string, any>;
};

export type FileNode = {
	type: 'file';
	name: string;
	post: Post;
};

export type FolderNode = {
	type: 'folder';
	name: string;
	children: (FileNode | FolderNode)[];
};

export type TreeNode = FileNode | FolderNode;
