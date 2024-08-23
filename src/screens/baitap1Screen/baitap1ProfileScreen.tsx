import { StatusBar, Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';

export default function Baitap1ProfileScreen() {
    const navigation = useNavigation();
    // sau 1o giây chuyển qua trang home page
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomePage');
        }, 10000);
    }, []);


    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Avatar.png')} style={styles.image} />
            <View style={styles.viewProfile}>
                {/* tạo thành dạng một bảng có 2 cột, cột trái là trường thuộc tính, cột phải là dữ liệu tương ứng */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Họ và tên:</Text>
                    <Text style={styles.text}>Nguyễn Trọng Phúc</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Ngày sinh:</Text>
                    <Text style={styles.text}>01/01/2003</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Số điện thoại:</Text>
                    <Text style={styles.text}>0123456789</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Email:</Text>
                    <Text style={styles.text}>abcd@gmail.com</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Học vấn:</Text>
                    <Text style={[styles.text, styles.wrap]}>Trường Đại học Sư phạm kỹ thuật TP.HCM</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Khoa:</Text>
                    <Text style={styles.text}>Công nghệ thông tin</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.text}>Niên khóa:</Text>
                    <Text style={styles.text}>2021-2025</Text>
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
