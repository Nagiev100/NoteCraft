import { PostListComponent } from "@/src/react/components/PostList/PostListComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store/store";
import { View, Text, StyleSheet } from "react-native";
import { Button, ButtonTheme } from "../../shared/ui/button/ui/Button";

export const HomeContainers = () => {
    const posts = useSelector((state: RootState) => state.post.posts);
    const hasPosts = posts.length > 0;

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                {hasPosts ? (
                    <PostListComponent posts={posts} />
                ) : (
                    <Text style={styles.emptyText}>
                        The list of posts is currently empty, Create a post
                    </Text>
                )}
            </View>

            <Button
                buttonText={"New Post"}
                onPress={() => {}}
                disabled={false}
                theme={ButtonTheme.DEFAULT}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
    },
    emptyText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginTop: 20,
    },
    button: {
        marginVertical: 20,
    },
});