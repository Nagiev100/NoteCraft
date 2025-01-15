import AddPhoto from "@/public/images/svg/addPhoto.svg";
import DeletePhoto from "@/public/images/svg/delete.svg"
import {useImagePicker} from "@/src/react/shared/hooks/useImagePicker/useImagePicker";
import {useEffect, useMemo, useState} from "react";
import {StyleSheet, View, TouchableOpacity, Text, ImageBackground} from "react-native";
import {useShowModal} from "@/src/react/shared/hooks/useShowModal/useShowModal";

interface AddImagesProps {
    getImg: (img: string) => void;
}

export const AddImages = (props: AddImagesProps) => {
    const {getImg} = props;

    const {openModal, renderModal} = useShowModal();
    const {image, pickFromGallery, pickFromCamera, clearImage} = useImagePicker();

    const handleImageSelect = (source: 'gallery' | 'camera') => {
        source === 'gallery' ? pickFromGallery() : pickFromCamera();
    };

    const handleImagePress = () => openModal('addImage', handleImageSelect);
    const handleImageDelete = () => clearImage();

    const renderImage = useMemo(() => {
        return image ?
            <ImageBackground
                source={{uri: image}}
                style={styles.backgroundImage}
                imageStyle={styles.image}
            >
                <TouchableOpacity onPress={handleImageDelete} style={styles.deleteButton}>
                    <DeletePhoto width={20} height={20}/>
                </TouchableOpacity>
            </ImageBackground>
            :
            <AddPhoto width={100} height={100}/>;
    }, [image]);

    useEffect(() => {
        image && getImg(image)
    }, [image]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photo</Text>

            <TouchableOpacity onPress={handleImagePress} style={styles.imageContainer}>
                {renderImage}
            </TouchableOpacity>

            {renderModal()}
        </View>
    );
};

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
        width: 100,
        height: 100,
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
});