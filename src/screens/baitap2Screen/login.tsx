import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = async () => {
        // Call API to login
        const data = {
            email: email,
            password: password,
        };

        const response = await fetch('http://10.0.2.2/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            Alert.alert('Success', 'Đăng nhập thành công!');
            navigation.navigate('Home'); // Navigate to login page if registration is successful
        } else {
            Alert.alert('Error', result.message || 'Đăng nhập thất bại');
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Login Page</Text>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input} onChangeText={setEmail} placeholder="Nhập email" />
            </View>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Mật khẩu:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} placeholder="Nhập mật khẩu" />
            </View>
            <View style={styles.viewForm} >
                <Button title="Đăng nhập" onPress={handleLogin} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewForm: {
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 200,
        height: 40,
        padding: 10,
    },

});