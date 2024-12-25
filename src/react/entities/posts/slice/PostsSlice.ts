import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Post, PostState} from "@/src/react/entities/posts/type/postsType";

export const initialState: PostState = {
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