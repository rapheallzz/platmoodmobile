import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </Pressable>
          <Text style={styles.modalTitle}>Welcome!</Text>
          <Text style={styles.modalText}>Please log in or register to continue.</Text>
          <Pressable style={styles.button} onPress={navigateToLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={navigateToRegister}>
            <Text style={styles.buttonText}>Register</Text>
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
  modalView: {
    width: '80%',
    maxWidth: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#541011',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
