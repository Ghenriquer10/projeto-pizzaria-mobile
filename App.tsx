import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SingIn from './src/pages/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#1d1d2e'}
        barStyle='light-content'
        translucent={false}
      />
      <SingIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
