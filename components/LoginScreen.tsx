import { Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className=" absolute flex h-full w-full flex-col items-center justify-center bg-black text-white">
      <View
        style={{
          position: 'absolute',
          width: 100,
          height: 150,
          backgroundColor: '#6B42C9',
          borderRadius: 150,
          top: -50,
          left: -50,
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 100,
          height: 150,
          backgroundColor: '#6B42C9',
          borderRadius: 150,
          top: -50,
          right: -50,
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      <Image source={require('../assets/logo.png')} style={{ width: 400, height: 185 }} />
      <Text className="mt-6 text-3xl font-bold text-white">Login</Text>
      <Text className="font-inter self-center p-6 text-white">
        Enter your username and password
      </Text>
      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2 text-[#C8F560]"
        placeholder="Username"
        placeholderTextColor="#FFF"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2  text-[#C8F560]"
        placeholder="Password"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="flex w-4/5 flex-row justify-end"
        onPress={() => {
          console.log('Forgot password');
        }}>
        <Text className="font-inter p-6 text-white "> Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-12 w-4/5 justify-center rounded-lg bg-[#454B60]"
        onPress={() => {
          console.log('Login');
        }}>
        <Text className="self-center font-bold text-white ">Login</Text>
      </TouchableOpacity>
      <Text className="font-inter p-6 text-white ">Or login with</Text>
      <View className="flex w-4/5 flex-row justify-around gap-3">
        <TouchableOpacity
          className="flex h-12 w-1/2 flex-row justify-center gap-3 rounded-lg border-2 border-[#C8F560] bg-[#21251F]"
          onPress={() => {
            console.log('Google');
          }}>
          <Icon name="google" size={20} color="#C8F560" className="self-center" />
          <Text className="self-center font-bold text-[#C8F560]">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-12 w-1/2 flex-row justify-center gap-3   rounded-lg border-2 border-[#C8F560] bg-[#21251F]"
          onPress={() => {
            console.log('Facebook');
          }}>
          <Icon name="facebook" size={20} color="#C8F560" className="self-center" />
          <Text className="self-center font-bold text-[#C8F560]">Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Sign up');
          navigation.navigate('SignUp');
        }}>
        <Text className="font-inter p-6 text-white "> Don't have an account? Sign up</Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          width: 100,
          height: 150,
          backgroundColor: '#6B42C9',
          borderRadius: 150,
          bottom: -50,
          left: -50,
          opacity: 0.8,
          zIndex: -1,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 100,
          height: 150,
          backgroundColor: '#6B42C9',
          borderRadius: 150,
          bottom: -50,
          right: -50,
          opacity: 0.8,
          zIndex: -1,
        }}
      />
    </SafeAreaView>
  );
}
