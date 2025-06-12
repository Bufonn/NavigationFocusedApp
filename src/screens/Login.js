import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from 'react-native';
import { loginVerification, saveLogin } from '../src/LoginVerify';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    loginVerification(navigation);
  }, []);

  const loginVerify = () => {
    if (login === "admin" && senha === "1234") {
      saveLogin(login, senha);
      navigation.navigate('Home');
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Nome de Usuário:</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        value={login}
        onChangeText={setLogin}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Log-in"
          onPress={loginVerify}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  form: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },

  buttonContainer: {
    backgroundColor: '#dda0dd',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  }

});