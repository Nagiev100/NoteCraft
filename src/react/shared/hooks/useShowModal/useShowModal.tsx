import React, {useState, useCallback} from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {getModalData} from "@/src/react/shared/hooks/useShowModal/helpers/getModalData";

type ModalType = 'addImage' | 'statePost';

interface ModalOption {
    id: string;
    text: string;
    onPress: () => void;
}

export interface ModalData {
    title: string;
    options: ModalOption[];
}

export const useShowModal = () => {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<ModalData | null>(null);

    const closeModal = useCallback(() => setVisible(false), []);

    const openModal = useCallback((type: ModalType, onSelect: (value: any) => void) => {
        const modalData = getModalData(closeModal, onSelect);

        setData(modalData[type]);
        setVisible(true);
    }, []);

    const renderModal = () => (
        visible && (
            <Modal visible={true} transparent={true} animationType="slide">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{data?.title}</Text>
                        {data?.options.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                onPress={option.onPress}
                                style={styles.modalButton}
                            >
                                <Text style={styles.modalButtonText}>{option.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        )
    );

    return {openModal, renderModal};
}

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