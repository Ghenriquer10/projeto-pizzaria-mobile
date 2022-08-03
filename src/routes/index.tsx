import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function MyRoutes() {

    const isAuthenticated = false;
    const loading = false;

    if (loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#000000',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size={60} color='blue' />
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default MyRoutes;