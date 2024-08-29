
import { Text, View, StyleSheet } from 'react-native';

import CustomButton from '../utils/Custom/CustomButton';

import { NavigationProp } from '@react-navigation/native';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
      <>
        <Text style={styles.header}>Bài tập lập trình React Native</Text>
        <View style={styles.viewButtons}>
          <CustomButton onPress={() => navigation.navigate('Baitap1')} title="Bài tập 1" />
        </View>
        <View style={styles.viewButtons}>
          <CustomButton onPress={() => navigation.navigate('Register')} title="Bài tập 2" />
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    viewButtons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 50,
    },
  });

export default HomeScreen;