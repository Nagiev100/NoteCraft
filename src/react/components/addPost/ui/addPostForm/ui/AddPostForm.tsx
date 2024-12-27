import React, {useState} from "react";
import {StyleSheet, View, Image} from "react-native";
import {useForm} from "react-hook-form";
import {Button, ButtonTheme} from "@/src/react/shared/ui/button/ui/Button"
import {FormField} from "@/src/react/shared/ui/formField/ui/FormField"
import {AddImages} from "@/src/react/components/addPost/ui/addImages/ui/addImages";

interface PostFormValues {
    title: string;
    description: string;
}

export const AddPostForm = () => {

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<PostFormValues>({mode: "onChange"});

    const onSubmit = (data: PostFormValues) => {
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <FormField
                control={control}
                name="title"
                placeholder="Enter title"
                rules={{required: "Title is required"}}
                error={ errors.title?.message}
            />

            <FormField
                control={control}
                name="description"
                placeholder="Enter description"
                rules={{required: "Description is required"}}
                error={errors.description?.message}
            />

            <AddImages/>

           {/* {image && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            )}

            <View style={styles.buttonGroup}>
                <Button
                    buttonText="Pick from Gallery"
                    onPress={pickFromGallery}
                    theme={ButtonTheme.DEFAULT}
                    disabled={false}
                />
                <Button
                    buttonText="Take Photo"
                    onPress={pickFromCamera}
                    theme={ButtonTheme.DEFAULT}
                    disabled={false}
                />
            </View>*/}

            <Button
                buttonText="Submit"
                onPress={handleSubmit(onSubmit)}
                theme={!isValid ? ButtonTheme.DISABLED : ButtonTheme.DEFAULT}
                disabled={!isValid}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    imageContainer: {
        alignItems: "center",
        marginVertical: 20,
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },

    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
});