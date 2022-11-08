import React from "react";
import { Text, Stylesheet } from "react-native";

export default function Welcome ({ firstName }) {
    return (
        <Text>
        Welcome{firstName}!</Text>
    )
}

const styles = Stylesheet.create({
    largeText: {
        fontSize: 36,
        fontWeight: '900',
        color: '#ffff00'
    }
})