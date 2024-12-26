import {View, Text, StyleSheet} from "react-native";
import {BackButton} from "@/src/react/shared/ui/backButton/ui/BackButton";

export const AddPostHeader = () => {
    return(
        <View style={styles.containerNav}>
            <BackButton/>
            <Text style={styles.title}>Create new post</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerNav: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
    },
    title: {
        fontSize: 20,
        marginTop: 20
    }
});