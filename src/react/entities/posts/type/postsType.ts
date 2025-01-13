export interface Post {
    id: string;
    title: string;
    date: Date;
    state: boolean;
    icon: string;
    description: string;
}

export interface PostState {
    posts: Post[];
}