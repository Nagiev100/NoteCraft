import React, {useMemo} from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {generateUniqueId} from "@/src/react/shared/helpers/generateUniqueId";

interface PhotoSourceModalProps {
    visible?: boolean;
    onClose?: () => void;
    onSelect?: (source: 'gallery' | 'camera') => void;
    isModalType: 'addImage' | 'statePost';
    onPressStatePost?: (type: 'Published' | 'Draft') => void;
}

export const PhotoSourceModal = (props: PhotoSourceModalProps) => {

    const {visible, onClose, onSelect, isModalType, onPressStatePost} = props;

    const dataForModal = {
        addImage: [
            {
                id: generateUniqueId(),
                onPress: () => onSelect?.('gallery'),
                style: styles.modalButton,
                text: "From Gallery",
            },
            {
                id: generateUniqueId(),
                onPress: () => onSelect?.('camera'),
                style: styles.modalButton,
                text: "Use Camera",
            },
            {
                id: generateUniqueId(),
                onPress: onClose,
                style: styles.modalButton,
                text: "Cancel",
            },
        ],
        statePost: [
            {
                id: generateUniqueId(),
                onPress: () => onPressStatePost?.('Draft'),
                style: styles.modalButton,
                text: "Draft",
            },
            {
                id: generateUniqueId(),
                onPress: () => onPressStatePost?.('Published'),
                style: styles.modalButton,
                text: "Published",
            },
        ],
    };

    const renderModalContent = useMemo(() => {

        const modalData = dataForModal[isModalType];

        return (
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                    {isModalType === 'addImage' ? "Choose Photo Source" : "Draft"}
                </Text>
                {modalData.map((el) => (
                    <TouchableOpacity key={el.id} onPress={el.onPress} style={el.style}>
                        <Text style={styles.modalButtonText}>{el.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }, [isModalType, dataForModal]);

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalBackground}>{renderModalContent}</View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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