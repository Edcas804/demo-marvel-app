import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginForm}>Login Form</Text>
      <TextInput style={styles.loginFormInput} placeholder="user" />
      <TextInput style={styles.loginFormInput} placeholder="password" />
      <Button color="#0af" title="send" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: '#fff',
    color: '#aaf',
    fontWeight: 'bold',
  },
  loginFormInput: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: '#aaf',
    borderBottomWidth: 1,
  },
  loginFormButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
