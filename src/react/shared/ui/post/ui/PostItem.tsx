import {View, Text, Image, StyleSheet} from "react-native";
import {Post} from "../../../../entities/posts/type/postsType"

interface PostItemProps {
    post: Post;
}

export const PostItem = (props: PostItemProps) => {

    const {
        id,
        icon,
        description,
        date,
        state,
        title
    } = props.post;

    return (
        <View id={id}>
            <View>
               <Image style={styles.image} source={{uri: icon}}/>
                <View>
                    <Text>{title}</Text>
                    <Text>Created at: {date}</Text>
                    <Text>{state}</Text>
                </View>
            </View>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});