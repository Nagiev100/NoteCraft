import React, {memo, useCallback, useState} from "react";
import {StyleSheet, View} from "react-native";
import {useForm} from "react-hook-form";
import {Button, ButtonTheme} from "@/src/react/shared/ui/button/ui/Button"
import {FormField} from "@/src/react/shared/ui/formField/ui/FormField"
import {AddImages} from "@/src/react/components/addPost/ui/addImages/addImages/ui/addImages";
import {Post} from "@/src/react/entities/posts/type/postsType";
import {generateUniqueId} from "@/src/react/shared/helpers/generateUniqueId";

interface AddPostFormValues {
    title: string;
    description: string;
}

interface AddPostFormProps {
    handlePost: (post: Post) => void;
}

export const AddPostForm = memo((props: AddPostFormProps) => {

    const {handlePost} = props;

    const [image, setImage] = useState<string | undefined>(undefined);
    const [state, setState] = useState<boolean>(false)

    const handleImages = useCallback((img: string) => setImage(img), []);
    const handleState = useCallback((state: boolean) => setState(state),[]);

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<AddPostFormValues>({mode: "onChange"});

    const onSubmit = (data: AddPostFormValues) => {

        const dataResponse: Post = {
            id: generateUniqueId(),
            title: data.title,
            description: data.description,
            icon: image ? image : "",
            state: state,
            date: new Date(),
        }

        handlePost(dataResponse);
    };

    return (
        <View style={styles.container}>
            <View>
                <FormField
                    control={control}
                    name="title"
                    placeholder="Enter title"
                    rules={{required: "Title is required"}}
                    error={errors.title?.message}
                />

                <FormField
                    control={control}
                    name="description"
                    placeholder="Enter description"
                    rules={{required: "Description is required"}}
                    error={errors.description?.message}
                />
            </View>

            <View style={styles.containerImage}>
                <AddImages getImg={handleImages}/>
            </View>

            <View style={styles.containerButton}>
                <Button
                    buttonText="Submit"
                    onPress={handleSubmit(onSubmit)}
                    theme={!isValid ? ButtonTheme.DISABLED : ButtonTheme.DEFAULT}
                    disabled={!isValid || !image}
                />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingHorizontal: 20,
        flexDirection: "column",
        paddingTop: 20,
        gap: 40,
    },

    containerImage: {
        flex: 0,
        alignItems: "flex-start",
    },

    containerButton: {
        flex: 0,
        marginBottom: 0
    }
});