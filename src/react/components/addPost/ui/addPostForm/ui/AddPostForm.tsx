import React from "react";
import {StyleSheet, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {Button, ButtonTheme} from "@/src/react/shared/ui/button/ui/Button"
import {FormField} from "@/src/react/shared/ui/formField/ui/FormField"

interface PostFormValues {
    title: string;
    description: string;
}

export const AddPostForm = () => {

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<PostFormValues>();

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
                error={errors.title?.message}
            />

            <FormField
                control={control}
                name="description"
                placeholder="Enter description"
                multiline
                rules={{required: "Description is required"}}
                error={errors.description?.message}
            />

            <Button
                buttonText="Submit"
                onPress={handleSubmit(onSubmit)}
                theme={ButtonTheme.DEFAULT}
                disabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    textArea: {
        height: 80,
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
});