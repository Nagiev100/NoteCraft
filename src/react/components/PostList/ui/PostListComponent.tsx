import {Post} from "@/src/react/entities/posts/type/postsType";
import {PostItem} from "@/src/react/shared/ui/post/ui/PostItem";
import {StyleSheet, FlatList} from "react-native";
import {memo} from "react";

interface PostListComponentProps {
    posts: Post[];
}

export const PostListComponent = memo((props: PostListComponentProps) => {

    const {posts} = props;

    return (
        <FlatList
            data={posts}
            renderItem={({item}) => <PostItem post={item}/>}
            keyExtractor={(item: Post) => item.id}
            contentContainerStyle={styles.container}
        />
    )
})

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});