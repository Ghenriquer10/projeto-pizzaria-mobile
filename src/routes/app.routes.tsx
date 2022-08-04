import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';

export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        table: number | string;
        order_id: string
    }
}
const Stack = createNativeStackNavigator<StackParamsList>();


// Existem diferentes tipos de navegações no react-native, um deles é o Stack ou formato de pilha, porém da documentação existem outros muito funcionais
// no componente auth routes só podem acessar pessoas que estão autenticadas no sistema
function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Order'
                component={Order}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;