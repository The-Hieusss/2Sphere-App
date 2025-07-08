import { Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="absolute flex h-full w-full flex-col items-center justify-center bg-black text-white">
      
      <Image source={require('../assets/logo.png')} style={{ width: 400, height: 185 }} />
      <Text className="mt-6 text-3xl font-bold text-white">Sign Up</Text>
      <Text className="font-inter self-center p-6 text-white">Create your account</Text>

      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2 text-[#C8F560]"
        placeholder="Username"
        placeholderTextColor="#FFF"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2 text-[#C8F560]"
        placeholder="Email"
        placeholderTextColor="#FFF"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2 text-[#C8F560]"
        placeholder="Password"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        className="mb-4 w-4/5 border-b-2 border-gray-300 p-2 text-[#C8F560]"
        placeholder="Confirm Password"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        className="h-12 w-4/5 justify-center rounded-lg bg-[#454B60]"
        onPress={() => {
          console.log('Sign Up');
          // Here you can add the logic to handle sign up, e.g., API call
          navigation.navigate('HomePage'); // Navigate to HomePage after sign up
        }}>
        <Text className="self-center font-bold text-white">Sign Up</Text>
      </TouchableOpacity>

      <Text className="font-inter p-6 text-white">Or sign up with</Text>

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
          className="flex h-12 w-1/2 flex-row justify-center gap-3 rounded-lg border-2 border-[#C8F560] bg-[#21251F]"
          onPress={() => {
            console.log('Facebook');
          }}>
          <Icon name="facebook" size={20} color="#C8F560" className="self-center" />
          <Text className="self-center font-bold text-[#C8F560]">Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text className="font-inter p-6 text-white">Already have an account? Log in</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}
