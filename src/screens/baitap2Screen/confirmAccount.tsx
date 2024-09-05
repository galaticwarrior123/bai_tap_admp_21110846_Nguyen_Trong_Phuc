import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthorAPI from "../../API/AuthorAPI";
export default function ConfirmAccount() {
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const handleConfirm = async () => {
        // Call API to confirm account
        const data = {
            email: "nguyenvana@imail.edu.vn",
            activeCode: code,
        };

        try {
            const response = await AuthorAPI.ConfirmAccount(data);

            if(response.status == 200) {
                Alert.alert('Success', 'Xác nhận thành công!');
                navigation.navigate('Login'); // Navigate to login page if confirmation is successful
            } else {
                Alert.alert('Error', 'Xác nhận thất bại');
            }
        } catch (error) {
            Alert.alert('Error', 'Không thể kết nối đến máy chủ');
            
        }
        



    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Confirm Account</Text>
            <View style={styles.viewForm} >
                <Text style={styles.text}>Mã xác nhận:</Text>
                <TextInput style={styles.input} onChangeText={setCode} placeholder="Nhập mã xác nhận" />
            </View>
            <View style={styles.viewForm} >
                <Button title="Xác nhận" onPress={handleConfirm} />
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
});