import React, {memo, useCallback, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useForm} from "react-hook-form";
import {Button, ButtonTheme} from "@/src/react/shared/ui/button/ui/Button"
import {FormField} from "@/src/react/shared/ui/formField/ui/FormField"
import {AddImages} from "@/src/react/components/addPost/ui/addImages/addImages/ui/addImages";
import {Post} from "@/src/react/entities/posts/type/postsType";
import {generateUniqueId} from "@/src/react/shared/helpers/generateUniqueId";
import {dataForForm} from "@/src/react/components/addPost/ui/addPostForm/helpers/dataForForm";
import {useShowModal} from "@/src/react/shared/hooks/useShowModal/useShowModal";

export interface AddPostFormValues {
    title: string;
    description: string;
}

interface AddPostFormProps {
    handlePost: (post: Post) => void;
}

export const AddPostForm = memo((props: AddPostFormProps) => {

    const {handlePost} = props;

    const {openModal, renderModal} = useShowModal();

    const [image, setImage] = useState<string | undefined>(undefined);
    const [typeState, setTypeState] = useState<'Published' | 'Draft'>('Published')

    const handleImages = useCallback((img: string) => setImage(img), []);

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
            icon: image,
            state: typeState,
            date: new Date(),
        }

        handlePost(dataResponse);
    };

    return (
        <View style={styles.container}>
            <View>
                {
                    dataForForm.map((el) => (
                        el.type === 'input' ?
                            <FormField
                                key={el.id}
                                id={el.id}
                                control={control}
                                name={el.name}
                                placeholder={el.placeholder}
                                rules={{required: "Title is required"}}
                                error={errors.title?.message}
                            /> :
                            <TouchableOpacity key={el.id} onPress={() => openModal('statePost', setTypeState)}>
                                <Text style={styles.stateText}>{typeState}</Text>
                            </TouchableOpacity>
                    ))
                }

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

            {renderModal()}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        gap: 20,
    },

    containerImage: {
        alignItems: "flex-start",
    },

    containerButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },

    stateText: {
        fontSize: 16,
        color: "#333",
    },
});