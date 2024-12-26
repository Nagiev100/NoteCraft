import React from "react";
import { Controller, FieldValues, Control, RegisterOptions } from "react-hook-form";
import { Text, TextInput, StyleSheet, View } from "react-native";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: keyof T;
    rules: RegisterOptions;
    placeholder?: string;
    multiline?: boolean;
    error?: string;
}

export const FormField = <T extends FieldValues>(
    {
        control,
        name,
        rules,
        placeholder,
        multiline = false,
        error,
    }: FormFieldProps<T>
) => {

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name as string}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.input, multiline && styles.textArea]}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        multiline={multiline}
                    />
                )}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        padding: 10,
        fontSize: 16,
    },
    textArea: {
        height: 80,
    },
    error: {
        color: "red",
        marginTop: 5,
        fontSize: 14,
    },
});