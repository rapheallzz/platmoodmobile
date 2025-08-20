import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { verifyEmail, resendVerificationCode, reset } from '../features/authSlice';
import tw from 'tailwind-react-native-classnames';

export default function EmailVerificationScreen({ route }) {
  const { userId, email } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const [code, setCode] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const inputs = useRef([]);

  useEffect(() => {
    if (isError) {
      Alert.alert('Verification Failed', message || 'Please try again.');
    }
    if (isSuccess && message.includes('verified')) {
      Alert.alert('Success', 'Email verified successfully!');
      navigation.navigate('Login');
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigation, dispatch]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join('');
    if (verificationCode.length !== 6) {
      Alert.alert('Invalid Code', 'Please enter a 6-digit code.');
      return;
    }
    dispatch(verifyEmail({ userId, verificationCode }));
  };

  const handleResend = () => {
    dispatch(resendVerificationCode(email));
    setTimer(60);
    setIsResendDisabled(true);
    Alert.alert('Code Resent', 'A new verification code has been sent to your email.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.description}>Please enter the 6-digit code sent to {email}.</Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              value={digit}
            />
          ))}
        </View>

        <Text style={styles.timerText}>
          {timer > 0 ? `Resend code in ${timer}s` : 'Didn’t receive a code?'}
        </Text>

        <Pressable onPress={handleResend} disabled={isResendDisabled || isLoading} style={[styles.button, isResendDisabled ? styles.disabledButton : styles.resendButton]}>
          <Text style={styles.buttonText}>{isLoading ? 'Resending...' : 'Resend Code'}</Text>
        </Pressable>

        <Pressable onPress={handleSubmit} disabled={isLoading} style={[styles.button, styles.verifyButton]}>
          <Text style={styles.buttonText}>{isLoading ? 'Verifying...' : 'Verify'}</Text>
        </Pressable>
      </View>
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
    form: {
        width: '90%',
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    codeInput: {
        width: 40,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    timerText: {
        color: 'gray',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    verifyButton: {
        backgroundColor: '#541011',
    },
    resendButton: {
        backgroundColor: '#2196F3',
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
