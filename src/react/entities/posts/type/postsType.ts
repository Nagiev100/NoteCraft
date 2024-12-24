export interface Post {
    id: number;
    title: string;
    date: string;
    state: boolean;
    icon: string;
    description: string;
}

export interface PostState {
    posts: Post[];
}

export const initialState: PostState = {
    posts: [],
};