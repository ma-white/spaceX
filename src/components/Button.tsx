import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Prop {
    title: string;
    onPress: () => void;
}

const Button = (prop: Prop) => {
    return (
        <TouchableOpacity style={styles.button}
                onPress={prop.onPress}>
            <Text style={styles.text}>{prop.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderBottomWidth: .5,
        borderBottomColor: '#D3D3D3',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginVertical: 5,
        paddingVertical: 10
    },
    text: {
        color: '#000',
        fontSize: 16
    }
})