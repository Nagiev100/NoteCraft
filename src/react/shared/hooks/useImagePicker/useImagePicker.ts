import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

interface UseImagePickerResult {
    image: string | null;
    pickFromGallery: () => Promise<void>;
    pickFromCamera: () => Promise<void>;
    clearImage: () => void;
}

export const useImagePicker = (): UseImagePickerResult => {
    const [image, setImage] = useState<string | null>(null);

    const requestPermissions = async () => {
        const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

        if (!mediaPermission.granted || !cameraPermission.granted) {
            throw new Error("Permissions not granted");
        }
    };

    const pickFromGallery = async () => {
        try {
            await requestPermissions();
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Error picking image from gallery:", error);
        }
    };

    const pickFromCamera = async () => {
        try {
            await requestPermissions();
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Error picking image from camera:", error);
        }
    };

    const clearImage = () => {
        setImage(null);
    };

    return { image, pickFromGallery, pickFromCamera, clearImage };
};