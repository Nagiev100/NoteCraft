import {useRouter} from 'expo-router';
import {TouchableOpacity, StyleSheet, View, Image, Text} from 'react-native';
import ArrowBack from '@/public/images/svg/arrowBack.svg'

export const BackButton = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.containerNav}>
                <ArrowBack/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    containerNav: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 70,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    title: {
        fontSize: 20
    }
});