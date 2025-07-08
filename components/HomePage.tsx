import { SafeAreaView, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<RootStackParamList>;
function HomePage() {
    const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex h-full w-full flex-col items-center justify-center bg-black">
        
        <Text className="mt-6 text-3xl font-bold text-white">Welcome to Home Page</Text>
        <Text className="font-inter self-center p-6 text-white">This is the home page content.</Text>   
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />

    </SafeAreaView>
  );
}

export default HomePage;
