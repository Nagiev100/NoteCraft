import AddPhoto from "@/public/images/svg/addPhoto.svg";
import DeletePhoto from "@/public/images/svg/delete.svg"
import {useImagePicker} from "@/src/react/shared/hooks/useImagePicker/useImagePicker";
import {useEffect, useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity, Modal, Text, ImageBackground} from "react-native";

export const AddImages = () => {

    const {image, pickFromGallery, pickFromCamera, clearImage} = useImagePicker();
    console.log("aaaaaaaaaaaaaaaaaa")
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleImagePress = () => setModalVisible(true);
    const handleImageDelete = () => clearImage();

    const handleImageSelect = (source: 'gallery' | 'camera') => {
        source === 'gallery' ? pickFromGallery() :  pickFromCamera();
        setModalVisible(false);
    };

    useEffect(() => {
        console.log("Selected Image URI:", image);  // Добавим для отладки
    }, [image]);

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

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Photo Source</Text>
                        <TouchableOpacity
                            onPress={() => handleImageSelect('gallery')}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>From Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleImageSelect('camera')}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>Use Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        justifyContent: "flex-end", // To position delete button at the bottom right
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