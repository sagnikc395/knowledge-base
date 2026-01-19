export type Post = {
	title: string;
	slug: string;
	category: string;
	description?: string;
	date: string;
	published: boolean;
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
