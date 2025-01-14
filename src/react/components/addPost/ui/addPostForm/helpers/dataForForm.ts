import {Path} from "react-hook-form";
import {AddPostFormValues} from "@/src/react/components/addPost/ui/addPostForm/ui/AddPostForm";

export const dataForForm: Array<{id: number; name: Path<AddPostFormValues>; placeholder: string; type: string}> = [
    {
        id: 1,
        name: "title",
        placeholder: "Enter title",
        type: "input"
    },
    {
        id: 3,
        name: "description",
        placeholder: "dsfd",
        type: "modal",
    },
    {
        id: 3,
        name: "description",
        placeholder: "Enter description",
        type: "input"
    },
];