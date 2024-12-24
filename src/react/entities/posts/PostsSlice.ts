import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Post {
    id: number;
    title: string;
    date: string;
    state: boolean;
    icon: string;
    description: string;
}

interface PostState {
    posts: Post[];
}

const initialState: PostState = {
    posts: [],
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
    },
});

export const {addPost} = postSlice.actions;