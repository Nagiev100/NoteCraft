import {Button, ButtonTheme} from "../../../shared/ui/button/ui/Button";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux/store/store";
import {View, Text, StyleSheet} from "react-native";
import {PostListComponent} from "@/src/react/components/PostList/ui/PostListComponent";
import {useMemo} from "react";
import {router} from "expo-router";
import {RoutType} from "@/public/constants/Rout";

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
            <View style={styles.button}>
                <Button
                    buttonText={"New Post"}
                    onPress={() => {router.push(RoutType.ADD_POST)}}
                    disabled={false}
                    theme={ButtonTheme.DEFAULT}
                />
            </View>
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
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: 22,
        color: "grey",
        textAlign: "center",
        marginTop: 20,
    },
    button: {
        marginBottom: 40,
    },
});