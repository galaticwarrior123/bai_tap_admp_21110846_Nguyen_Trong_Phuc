import { Link } from "@react-navigation/native";
import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthorAPI from "../../API/AuthorAPI";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import tw from "twrnc";

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
            const response = await AuthorAPI.Register(data);

            if(response.status == 200) {
                Alert.alert('Success', 'Đăng ký thành công!');
                navigation.navigate('ConfirmAccount'); // Navigate to confirm account page if registration is successful
            } else {
                Alert.alert('Error', 'Đăng ký thất bại');
            }

        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
        }
        
    }
    

    return (
        <View style={tw`flex-1 p-6`}>

            
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Họ và tên lót:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    onChangeText={setFirstName}
                    placeholder="Nhập họ và tên"
                />
            </View>
            
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Tên:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    onChangeText={setLastName}
                    placeholder="Nhập tên"
                />
            </View>
            
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Email:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
            </View>
            
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Mật khẩu:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Mật khẩu"
                />
            </View>
            
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Xác nhận mật khẩu:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    placeholder="Nhập lại mật khẩu"
                />
            </View>

            <View style={tw`mt-5`}>
                <Button title="Đăng ký" onPress={handleRegister} />
            </View>

            <View style={tw`mt-5 flex-row justify-center`}>
                <Text style={tw`text-center`}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
                    <Text style={tw`text-blue-500 ml-2`}>Đăng nhập</Text>
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