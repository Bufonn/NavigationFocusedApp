import React, { useState } from 'react';
import LoginVerify from './src/LoginVerify';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
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
        keyboardType="default"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Log-in"
          onPress={() => LoginVerify(login, senha, navigation)}
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


