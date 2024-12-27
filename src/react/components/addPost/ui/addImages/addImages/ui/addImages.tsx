import AddPhoto from "@/public/images/svg/addPhoto.svg";
import DeletePhoto from "@/public/images/svg/delete.svg"
import {useImagePicker} from "@/src/react/shared/hooks/useImagePicker/useImagePicker";
import {useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity, Modal, Text, ImageBackground} from "react-native";
import {PhotoSourceModal} from "@/src/react/components/addPost/ui/addImages/photoSourceModal/ui/PhotoSourceModal";

export const AddImages = () => {

    const {image, pickFromGallery, pickFromCamera, clearImage} = useImagePicker();
    const [modalVisible, setModalVisible] = useState(false);

    const handleImagePress = () => setModalVisible(true);
    const handleImageDelete = () => clearImage();

    const handleImageSelect = (source: 'gallery' | 'camera') => {
        source === 'gallery' ? pickFromGallery() :  pickFromCamera();
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photo</Text>

            <TouchableOpacity onPress={handleImagePress} style={styles.imageContainer}>
                {image ? (
                    <ImageBackground
                        source={{ uri: image }}
                        style={styles.backgroundImage}
                        imageStyle={styles.image}
                    >
                        <TouchableOpacity onPress={handleImageDelete} style={styles.deleteButton}>
                            <DeletePhoto width={20} height={20} />
                        </TouchableOpacity>
                    </ImageBackground>
                ) : (
                    <AddPhoto width={100} height={100} />
                )}
            </TouchableOpacity>

            <PhotoSourceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSelect={handleImageSelect}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "flex-end",
    },
    imageWrapper: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    deleteButton: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 50,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#007bff",
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});