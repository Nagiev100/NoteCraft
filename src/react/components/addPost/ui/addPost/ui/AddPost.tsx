import {View} from "react-native";
import {AddPostHeader} from "@/src/react/components/addPost/ui/addPostHeader/ui/AddPostHeader";
import {AddPostForm} from "@/src/react/components/addPost/ui/addPostForm/ui/AddPostForm";

export const AddPost = (props: any) => {
    return(
        <View>
            <AddPostHeader/>
            <AddPostForm/>
        </View>
    )
}