import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, Post} from "@/src/react/entities/posts/type/postsType";

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