import {Button, ButtonTheme} from "../../../shared/ui/button/ui/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store/store";
import { View, Text, StyleSheet } from "react-native";
import {PostListComponent} from "@/src/react/components/PostList/ui/PostListComponent";
import {useMemo} from "react";

export const HomeContainers = () => {

    const posts = useSelector((state: RootState) => state.post.posts);

    const showPosts = useMemo(() => {
       return (
           posts.length > 0 ? <PostListComponent posts={posts}/> :
               <Text style={styles.emptyText}>
                   The list of posts is currently empty, Create a post
               </Text>
       )
    }, posts);

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                {
                    showPosts
                }
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
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
    },
    emptyText: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        marginTop: 20,
    },
    button: {
        marginVertical: 20,
    },
});