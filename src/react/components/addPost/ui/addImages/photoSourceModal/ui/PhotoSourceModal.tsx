import React, {useMemo} from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";

interface PhotoSourceModalProps {
    visible: boolean;
    onClose: () => void;
    onSelect: (source: 'gallery' | 'camera') => void;
    isModalType: 'addImage' | 'statePost'
}

export const PhotoSourceModal = (props: PhotoSourceModalProps) => {

    const {visible, onClose, onSelect, isModalType} = props;

    const dataForModal = [{
        imageModal: [
            {
                id: 1,
                onPress: onSelect('gallery'),
                style: styles.modalButton,
                text: "From Gallery"
            },
            {
                id: 2,
                onPress: onSelect('camera'),
                style: styles.modalButton,
                text: "Use Camera"
            },
            {
                id: 3,
                onPress: onClose(),
                style: styles.modalButton,
                text: "Cancel"
            }
        ],
        stateModal: [
            {
                id: 1,
            },
            {
                id: 2
            }
        ]
}]

    const renderModal = useMemo(() => {
        return (
            <>
                {
                    isModalType === 'addImage' ?
                        <Modal visible={visible} transparent={true} animationType="slide">
                            {
                                dataForModal[0].imageModal.map((el) => (
                                    <TouchableOpacity key={el.id} onPress={el.onPress} style={el.style}>
                                        <Text>{el.text}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </Modal> :
                        <Modal visible={visible} transparent={true} animationType="slide">
                            {

                            }
                        </Modal>


                }
            </>
        )
    }, [isModalType])

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Choose Photo Source</Text>
                    <TouchableOpacity
                        onPress={() => onSelect('gallery')}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>From Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onSelect('camera')}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>Use Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
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