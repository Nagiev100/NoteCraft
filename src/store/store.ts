import { configureStore } from '@reduxjs/toolkit';
import {postSlice} from "@/src/react/entities/posts/PostsSlice";

export const store = configureStore({
    reducer: {
        post: postSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;