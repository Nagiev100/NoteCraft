import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post, PostState} from "@/src/react/entities/posts/type/postsType";
import {initialState} from "@/src/react/entities/posts/state/state";

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