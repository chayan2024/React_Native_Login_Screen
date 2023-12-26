import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { mycolors } from '../utils/colors';

const Splash = ({navigation}) => {

    const delayTime = 10000;

    const fetchData = async () => {

        setTimeout(() => {
            navigation.navigate('Login');
          }, delayTime);
    };

  useEffect(() => {
    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
      <Image source={require('../assets/images.png')} style={styles.image} />
    </View>
  );
};

export default Splash;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mycolors.primary,
      },
      image: {
        width: '70%', 
        height: '40%',
        resizeMode: 'cover', 
        backgroundColor: 'transparent',
        borderRadius:20
      },
})