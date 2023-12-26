import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { mycolors } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {

  const OnSubmit=()=>{
    navigation.navigate('Login');
  }
  
  return (
    <SafeAreaView style={myStyles.container}>
      <ScrollView
        contentContainerStyle={myStyles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
          <Text style={myStyles.toptextContainer}>Best Place For The Test</Text>
          <Image
            source={require('../assets/images.png')}
            style={myStyles.images}
          />
          <View style={myStyles.textContainer}>
            <Text style={myStyles.titlText}>Sign up</Text>
            <Text style={myStyles.descText}>Enter your Credential to Continue:</Text>
            <Text style={myStyles.inText}>UserName:</Text>
            <TextInput placeholder='User name' autoFocus keyboardType="default" style={myStyles.inputText} />
            <Text style={myStyles.inText}>Password:</Text>
            <TextInput placeholder='password' secureTextEntry style={myStyles.inputText} />
            <Text style={myStyles.inText}>Email ID:</Text>
            <TextInput placeholder='Email Id' keyboardType="email-address" style={myStyles.inputText} />
            <Text style={myStyles.inText}>Mobile No:</Text>
            <TextInput maxLength={10} placeholder='Mobile No' keyboardType="numeric" style={myStyles.inputText} />
            <Text style={myStyles.textContainer}>By Contining you agree to out Terms of Service and privacy Policy:</Text>
            <TouchableOpacity
              onPress={OnSubmit}
              style={myStyles.submitButton}>
              <Text style={myStyles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const myStyles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: mycolors.primary,
  },
  images: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius:10,
    backgroundColor: 'transparent',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  textContainer: {
    color:'white',
    marginTop: 5,
  },
  inText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 16,
  },
  inputText: {
    borderColor: 'grey',
    backgroundColor: '#E3E3E3',
    fontSize: 16,
    fontWeight: '500',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  titlText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  descText: {
    color: 'white',
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toptextContainer:{
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '600',
    color:'white',
    fontSize:20,

  }
});
