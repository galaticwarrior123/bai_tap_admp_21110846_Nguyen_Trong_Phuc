import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from "twrnc";
import AuthorAPI from '../../API/AuthorAPI';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const handleClick = async () => {
        // Call API to send email
        const data = {
            email: email,
        };

        console.log(data);

        try {
            const response = await AuthorAPI.ForgotPassword(data);
            navigation.navigate('ResetPassword'); // Navigate to reset password page if reset password is successful
        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
        }
    }
    return (
        <View style={tw`flex-1 p-6 justify-center bg-white`}>   
            <Text style={tw`text-2xl font-bold text-center mt-10`}>Quên mật khẩu</Text>
            <View style={tw`mt-5`}>
                <Text style={tw`text-lg font-bold text-left`}>Email:</Text>
                <TextInput
                    style={tw`border border-gray-300 rounded-lg p-2 mt-2`}
                    placeholder="Nhập email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity style={tw`bg-blue-500 p-2 rounded-lg mt-5`} onPress={handleClick}>
                <Text style={tw`text-white text-center font-bold`}>Gửi yêu cầu</Text>
            </TouchableOpacity>
        </View>
    );
}
