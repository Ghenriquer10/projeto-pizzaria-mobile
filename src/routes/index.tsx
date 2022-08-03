import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function MyRoutes() {

    const { IsAuthenticated, loading } = useContext(AuthContext)

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
        IsAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default MyRoutes;