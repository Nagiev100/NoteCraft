import {ModalData} from "@/src/react/shared/hooks/useShowModal/useShowModal";

export const getModalData = (closeModal: () => void, onSelect: (value: any) => void): Record<string, ModalData> => ({
    addImage: {
        title: "Choose Photo Source",
        options: [
            { id: '1', text: "From Gallery", onPress: () => { onSelect('gallery'); closeModal() }},
            { id: '2', text: "Use Camera", onPress: () => { onSelect('camera'); closeModal() }},
            { id: '3', text: "Cancel", onPress: closeModal },
        ],
    },
    statePost: {
        title: "Select Post State",
        options: [
            { id: '1', text: "Draft", onPress: () => { onSelect('Draft'); closeModal() }},
            { id: '2', text: "Published", onPress: () => { onSelect('Published'); closeModal() }},
            { id: '3', text: "Cancel", onPress: closeModal },
        ],
    },
});