import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function CadastroDependenteScreen() {
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Dependente</Text>

      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Nome Completo" />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY', // Formato da data
          }}
          value={dataNascimento}
          onChangeText={(text) => setDataNascimento(text)}
          style={styles.input}
          placeholder="Data de Nasc."
          keyboardType="numeric"
        />
      </View>

      <TextInput style={styles.inputFull} placeholder="E-mail" />
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="CPF" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Telefone/Celular" keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  inputFull: {
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#5A67D8',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});