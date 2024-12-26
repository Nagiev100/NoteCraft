import {useRouter} from 'expo-router';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';

export const BackButton = () => {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.button}>
                <Image source={require('@/public/images/svg/arrowBack.svg')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
    },
});