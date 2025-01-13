import {View} from "react-native";
import {AddPostHeader} from "@/src/react/components/addPost/ui/addPostHeader/ui/AddPostHeader";
import {AddPostForm} from "@/src/react/components/addPost/ui/addPostForm/ui/AddPostForm";
import {Post} from "@/src/react/entities/posts/type/postsType";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "@/src/react/entities/posts/slice/PostsSlice";

export const AddPostContainers = () => {

    const dispatch = useDispatch();

    const handlePost = useCallback((post: Post) => {
        dispatch(addPost(post))
    }, []);

    return(
        <View>
            <AddPostHeader/>
            <AddPostForm handlePost={handlePost}/>
        </View>
    )
}