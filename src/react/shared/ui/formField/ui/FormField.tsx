import React from "react";
import {Controller, FieldValues, Control, RegisterOptions, Path} from "react-hook-form";
import {Text, TextInput, StyleSheet, View} from "react-native";

interface FormFieldProps<T extends FieldValues> {
    id?: number;
    control: Control<T>;
    name: Path<T>;
    rules: Omit<RegisterOptions<T, Path<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
    placeholder?: string;
    multiline?: boolean;
    error: string | undefined;
}

export const FormField = <T extends FieldValues>(
    {
        id,
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
                name={name}
                rules={rules}
                render={({field: {onChange, onBlur, value}}) => (
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
        marginBottom: 10
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
        fontSize: 14,
    },
});