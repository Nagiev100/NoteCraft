export interface Post {
    id: string;
    title: string;
    date: Date;
    state: 'Published' | 'Draft';
    icon?: string;
    description: string;
}

export interface PostState {
    posts: Post[];
}