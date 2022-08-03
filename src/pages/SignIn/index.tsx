import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        if (email === '' || password === '') {
            alert('Preencha os campos!')
            return
        }
        await signIn({ email, password })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'Digite seu email'}
                    style={styles.input}
                    placeholderTextColor={'#fff'}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder={'Digite sua senha'}
                    style={styles.input}
                    placeholderTextColor={'#fff'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                {loadingAuth ? (
                    <TouchableOpacity disabled style={styles.button} onPress={handleLogin}>
                        {loadingAuth ? (
                            <ActivityIndicator size={25} color='#fff' />
                        ) : (
                            <Text style={styles.buttonText}>Acessar</Text>
                        )}
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        {loadingAuth ? (
                            <ActivityIndicator size={25} color='#fff' />
                        ) : (
                            <Text style={styles.buttonText}>Acessar</Text>
                        )}
                    </TouchableOpacity>
                )}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },

    logo: {
        marginBottom: 5
    },

    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        paddingVertical: 32
    },

    input: {
        marginTop: 10,
        width: '95%',
        height: 40,
        backgroundColor: '#000',
        color: '#fff',
        paddingStart: 10,
        paddingEnd: 10
    },

    button: {
        width: '95%',
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 10
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 20
    }
})