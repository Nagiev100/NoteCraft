import {PostListComponent} from "@/src/react/components/PostList/PostListComponent";
import {useSelector} from "react-redux";
import {RootState} from "@/src/store/store";
import {View, Text} from "react-native";
import {Button, ButtonTheme} from "../../shared/ui/button/ui/Button"

export const HomeContainers = () => {

    const posts = useSelector((state: RootState) => state.post.posts)

    return (
        <View>

            {
                posts ? <PostListComponent posts={posts}/> : <Text>The list of posts is currently empty, Create a post</Text>
            }

            <Button
                buttonText={"New Post"}
                onPress={() => {}}
                disabled={false}
                theme={ButtonTheme.DEFAULT}
            />
        </View>
    )
}