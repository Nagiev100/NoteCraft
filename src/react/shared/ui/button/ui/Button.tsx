import {GestureResponderEvent, TouchableOpacity,  StyleSheet, Text} from "react-native";
import {memo} from "react";


export enum ButtonTheme {
    DEFAULT = "default",
    DISABLED = "disabled"
}

export const themeStyles = {
    [ButtonTheme.DEFAULT]: {backgroundColor: "#007bff"},
    [ButtonTheme.DISABLED]: {backgroundColor: "#6c757d"},
};

interface ButtonProps {
    buttonText: string;
    theme: ButtonTheme;
    disabled: boolean;
    onPress: (event: GestureResponderEvent) => void;
}

export const Button = memo((props: ButtonProps) => {

    const {buttonText, onPress, disabled, theme} = props;

    const buttonStyle = getThemeStyles(theme);

    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
})

const getThemeStyles = (theme: ButtonTheme) => themeStyles[theme] || themeStyles[ButtonTheme.DEFAULT];


const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "red",
        fontSize: 16,
    },
});