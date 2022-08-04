import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

// Existem diferentes tipos de navegações no react-native, um deles é o Stack ou formato de pilha, porém da documentação existem outros muito funcionais
// no componente auth routes só podem acessar pessoas que não estão autenticadas no sistema
function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;