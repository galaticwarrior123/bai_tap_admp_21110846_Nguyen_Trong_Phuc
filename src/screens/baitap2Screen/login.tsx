import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AuthorAPI from "../../API/AuthorAPI";
import tw from "twrnc";

export default function Login() {  // Receive onLoginSuccess as a prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        // Call API to login
        const data = {
            email: email,
            password: password,
        };

        console.log(data);

        try {
            
            const response = await AuthorAPI.Login(data);

            if(response.status == 200) {
                Alert.alert('Success', 'Đăng nhập thành công!');
                // onLoginSuccess(); // Call onLoginSuccess when login is successful
                navigation.navigate('HomeScreen'); // Navigate to home page if login is successful
            } else {
                Alert.alert('Error', 'Đăng nhập thất bại');
            }
        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
        }
    };

    return (
        <View style={tw`flex-1 justify-center p-5`}>
            <View style={tw`mt-5`}>
                <Text style={tw`text-xl font-bold text-left`}>Email</Text>
                <TextInput
                    style={tw`border border-black rounded-lg h-10 p-2 mt-2`}
                    onChangeText={setEmail}
                    placeholder="Nhập email"
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={tw`mt-5`}>
                <Text style={tw`text-xl font-bold text-left`}>Mật khẩu:</Text>
                <TextInput
                    style={tw`border border-black rounded-lg h-10 p-2 mt-2`}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={tw`mt-5`}>
                <Button title="Đăng nhập" onPress={handleLogin} />
            </View>
            <View style={tw`mt-5 flex-row justify-center`}>
                <Text style={tw`text-center`}>Chưa có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={tw`text-blue-500 ml-2`}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     viewForm: {
//         marginTop: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'black',
//         borderRadius: 5,
//         height: 40,
//         padding: 10,
//         marginTop: 5,
//     },
//     viewFormRedirect: {
//         marginTop: 20,
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     textSpan: {
//         textAlign: 'center',
//     },
//     textLink: {
//         color: 'blue',
//         marginLeft: 5,
//     },
// });
