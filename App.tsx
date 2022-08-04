import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyRoutes from './src/routes/index';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  // Como no React é possível criar roteamentos e contextos, porém no react native o componente de navegação fica em volta dos contextos
  return (

    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#1d1d2e'} barStyle='light-content' translucent={false} />
        <MyRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
