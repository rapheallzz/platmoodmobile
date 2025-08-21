import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

export default function LoginModal({ visible, onClose }) {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    onClose();
    navigation.navigate('Login');
  };

  const navigateToRegister = () => {
    onClose();
    navigation.navigate('Register');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={tw`w-80 bg-white p-6 rounded-lg`}>
          <Pressable style={[tw`absolute top-0 right-0 m-2 p-2 bg-gray-500 rounded-full z-10`]} onPress={onClose}>
            <Text style={tw`text-white text-center`}>X</Text>
          </Pressable>
          <Text style={tw`text-lg font-bold mb-4`}>Welcome!</Text>
          <Text style={tw`text-base mb-4`}>Please log in or register to continue.</Text>
          <Pressable style={[tw`mb-4 p-2 rounded`, { backgroundColor: '#541011' }]} onPress={navigateToLogin}>
            <Text style={tw`text-white text-center`}>Log In</Text>
          </Pressable>
          <Pressable style={[tw`mb-4 p-2 rounded`, { backgroundColor: '#541011' }]} onPress={navigateToRegister}>
            <Text style={tw`text-white text-center`}>Register</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
