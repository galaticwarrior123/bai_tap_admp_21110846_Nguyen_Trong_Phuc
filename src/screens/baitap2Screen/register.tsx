import { Link } from "@react-navigation/native";
import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Mật khẩu không khớp');
            return;
        }
        
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: "2000-01-01",
            gender:true,
            password: password,
        };

        try {
            const response = await fetch('http://10.0.2.2:4000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                Alert.alert('Success', 'Đăng ký thành công!');
                navigation.navigate('ConfirmAccount'); // Navigate to login page if registration is successful
            } else {
                Alert.alert('Error', result.message || 'Đăng ký thất bại');
            }
        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
        }
        
    }
    const openURL = () => {
        Linking.openURL('https://www.example.com');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Register Page</Text>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Họ và tên lót:</Text>
                <TextInput style={styles.input} onChangeText={setFirstName} placeholder="Nhập họ và tên" />
            </View>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Tên:</Text>
                <TextInput style={styles.input} onChangeText={setLastName} placeholder="Nhập tên" />
            </View>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Email:</Text>
                <TextInput style={styles.input} onChangeText={setEmail} placeholder="Email" />
            </View>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Mật khẩu:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry placeholder="Mật khẩu" />
            </View>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Xác nhận mật khẩu:</Text>
                <TextInput style={styles.input} onChangeText={setConfirmPassword} secureTextEntry placeholder="Nhập lại mật khẩu" />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={styles.viewForm} >
                <Text style={styles.textSpan}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity onPress={openURL}>
                    <Text style={styles.textLink}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewForm: {
        marginTop: 20,
        marginHorizontal: 20,

    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    textSpan: {
        textAlign: 'center',
        marginTop: 10,
    },
    textLink: {
        textAlign: 'center',
        color: 'blue',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});