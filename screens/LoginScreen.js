import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      {/* Onda superior */}
      <View style={styles.topWave} />

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#5c3d1e" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#5c3d1e" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Onda inferior */}
      <View style={styles.bottomWave} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topWave: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 90,
    backgroundColor: '#3d1e00',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: '#3d1e00',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  container: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3d1e00',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: '#3d1e00',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3d1e00',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
