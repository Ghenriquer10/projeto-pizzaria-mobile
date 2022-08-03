import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (email === '' || password === '') {
            alert('Preencha os campos!')
            return
        }
        console.log('Email digitado: ' + email)
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
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