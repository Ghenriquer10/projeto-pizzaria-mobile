import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Dashboard';

const Stack = createNativeStackNavigator();

// Existem diferentes tipos de navegações no react-native, um deles é o Stack ou formato de pilha, porém da documentação existem outros muito funcionais
// no componente auth routes só podem acessar pessoas que estão autenticadas no sistema
function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='dashboard' component={Dashboard} />
        </Stack.Navigator>
    )
}

export default AppRoutes;