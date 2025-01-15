import {ModalData} from "@/src/react/shared/hooks/useShowModal/useShowModal";
import {generateUniqueId} from "@/src/react/shared/helpers/generateUniqueId";

export const getModalData = (closeModal: () => void, onSelect: (value: any) => void): Record<string, ModalData> => ({
    addImage: {
        title: "Choose Photo Source",
        options: [
            { id: generateUniqueId(), text: "From Gallery", onPress: () => { onSelect('gallery'); closeModal() }},
            { id: generateUniqueId(), text: "Use Camera", onPress: () => { onSelect('camera'); closeModal() }},
            { id: generateUniqueId(), text: "Cancel", onPress: closeModal },
        ],
    },
    statePost: {
        title: "Select Post State",
        options: [
            { id: generateUniqueId(), text: "Draft", onPress: () => { onSelect('Draft'); closeModal() }},
            { id: generateUniqueId(), text: "Published", onPress: () => { onSelect('Published'); closeModal() }},
            { id: generateUniqueId(), text: "Cancel", onPress: closeModal },
        ],
    },
});