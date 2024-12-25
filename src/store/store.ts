import { configureStore } from '@reduxjs/toolkit';
import {postSlice} from "@/src/react/entities/posts/slice/PostsSlice";
import {persistReducer, persistStore} from "redux-persist"
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "root",
    storage
}

export const store = configureStore({
    reducer: {
        post: persistReducer(persistConfig, postSlice.reducer),
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);