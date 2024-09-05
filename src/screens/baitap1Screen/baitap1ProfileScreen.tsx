import { StatusBar, Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import tw from 'twrnc';

export default function Baitap1ProfileScreen() {
    const navigation = useNavigation();
    // sau 1o giây chuyển qua trang home page
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomePage');
        }, 10000);
    }, []);


    return (
        <View style={tw`flex-1 bg-gray-200 items-center justify-center`}>
            <Image source={require('../../../assets/Avatar.png')} style={tw`w-40 h-40 rounded-full shadow-lg`} />
            <View style={tw`w-80 h-80 bg-gray-400 rounded-lg mt-5 p-4`}>
                {/* Dạng bảng có 2 cột */}
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Họ và tên:</Text>
                    <Text style={tw`text-lg`}>Nguyễn Trọng Phúc</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Ngày sinh:</Text>
                    <Text style={tw`text-lg`}>01/01/2003</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Số điện thoại:</Text>
                    <Text style={tw`text-lg`}>0123456789</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Email:</Text>
                    <Text style={tw`text-lg`}>abcd@gmail.com</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Học vấn:</Text>
                    <Text style={tw`text-lg flex-wrap w-40`}>Trường Đại học Sư phạm kỹ thuật TP.HCM</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Khoa:</Text>
                    <Text style={tw`text-lg`}>Công nghệ thông tin</Text>
                </View>
                <View style={tw`flex-row justify-between py-2`}>
                    <Text style={tw`font-bold text-lg`}>Niên khóa:</Text>
                    <Text style={tw`text-lg`}>2021-2025</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        shadowColor:'gray',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewProfile: {
        width: 350,
        height: 350,
        backgroundColor: 'silver',
        borderRadius: 10,
        marginTop: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    wrap:{
        flexWrap: 'wrap',
        width: 250,
    }
});
