import { useState } from "react";
import ImagePicker from "react-native-image-crop-picker";

interface UseImagePickerResult {
    image: string | null;
    pickFromGallery: () => Promise<void>;
    pickFromCamera: () => Promise<void>;
    clearImage: () => void;
}

export const useImagePicker = (): UseImagePickerResult => {

    const [image, setImage] = useState<string | null>(null);

    const pickFromGallery = async () => {
        try {
            const result = await ImagePicker.openPicker({
                cropping: true,
                mediaType: "photo",
            });
            setImage(result.path);
        } catch (error) {
            console.error("Error picking image from gallery:", error);
        }
    };

    const pickFromCamera = async () => {
        try {
            const result = await ImagePicker.openCamera({
                cropping: true,
                mediaType: "photo",
            });
            setImage(result.path);
        } catch (error) {
            console.error("Error picking image from camera:", error);
        }
    };

    const clearImage = () => {
        setImage(null);
    };

    return { image, pickFromGallery, pickFromCamera, clearImage };
};