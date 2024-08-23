import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{title}</Text>
        </TouchableOpacity>

    );
}

const styles =StyleSheet.create({
    button: {
        backgroundColor: 'silver',
        width:120,
        height: 40,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
});

export default CustomButton;