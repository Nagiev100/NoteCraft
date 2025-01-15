export interface Post {
    id: string;
    title: string;
    date: Date;
    state: 'Published' | 'Draft';
    icon: string | null;
    description: string;
}

export interface PostState {
    posts: Post[];
}