export interface Post {
    id: string;
    title: string;
    date: string;
    state: boolean;
    icon: string;
    description: string;
}

export interface PostState {
    posts: Post[];
}