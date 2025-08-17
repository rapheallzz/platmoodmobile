import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Image, ScrollView } from 'react-native';
import playmood from '../../assets/PLAYMOOD_DEF.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { register, registerStart, registerSuccess, registerFailure } from '../features/authSlice';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

  const handleRegister = async () => {
    dispatch(registerStart());
    try {
      await dispatch(register(name, email, password)); // Updated to pass name, email, and password
      navigation.navigate('Home');
    } catch (error) {
      console.log('Registration error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.content}>
        <Image source={playmood} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <Pressable style={styles.registerButton} onPress={handleRegister} disabled={isLoading}>
            <Text style={styles.registerButtonText}>{isLoading ? 'Registering...' : 'Register'}</Text>
          </Pressable>
          {isError && <Text style={styles.errorText}>{message}</Text>}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    width: '100%',
    marginLeft:70,
    marginTop:120,
  },
  logo: {
    width: 310,
    height: 80,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    padding: 10,
  },
  registerButton: {
    backgroundColor: '#541011',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
