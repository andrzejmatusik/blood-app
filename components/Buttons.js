import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export function SignButton({ icon, title, color, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Image style={styles.image} source={icon} />
            <Text style={[styles.title, style={color: color}]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        marginVertical: 10,
        padding: 15,
        width: 275,
    },
    image: {
        position: 'absolute',
        left: 35,
    },
    title: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
    },
});