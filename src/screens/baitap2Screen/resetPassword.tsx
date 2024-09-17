import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AuthorAPI from '../../API/AuthorAPI';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const handleClick = async () => {
        // Call API to reset password
        const data = {
            email: email,
            password: password,
            activeCode: code,
        };

        console.log(data);

        try {
            const response = await AuthorAPI.ResetPassword(data);
            Alert.alert('Success', 'Đổi mật khẩu thành công!');
            navigation.navigate('Login'); // Navigate to login page if reset password is successful
        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
        }
    }

    return (
        <View style={tw`flex-1 p-6 justify-center`}>
            <View style={tw`mt-5 bg-white p-5 rounded-lg`}>
                <Text style={tw`text-2xl font-bold text-center mt-10`}>Đổi mật khẩu</Text>
                <View style={tw`mt-5`}>
                    <Text style={tw`text-lg font-bold text-left`}>Email:</Text>
                    <TextInput
                        style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                        placeholder="Nhập email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={tw`mt-5`}>
                    <Text style={tw`text-lg font-bold text-left`}>Mật khẩu mới:</Text>
                    <TextInput
                        style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                        placeholder="Nhập mật khẩu mới"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={tw`mt-5`}>
                    <Text style={tw`text-lg font-bold text-left`}>Mã xác nhận:</Text>
                    <TextInput
                        style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                        placeholder="Nhập mã xác nhận"
                        value={code}
                        onChangeText={setCode}
                    />
                </View>
                <TouchableOpacity style={tw`bg-blue-500 p-2 rounded-lg mt-5`} onPress={handleClick}>
                    <Text style={tw`text-white text-center font-bold`}>Đổi mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}