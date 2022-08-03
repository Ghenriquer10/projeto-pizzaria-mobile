import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyRoutes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1d1d2e'} barStyle='light-content' translucent={false} />
      <MyRoutes />
    </NavigationContainer>
  );
}
