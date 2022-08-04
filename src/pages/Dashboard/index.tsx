import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes';


export default function Dashboard() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [tableNumber, setTableNumber] = useState('');

    async function openOrder() {
        if (tableNumber === '') {
            alert('Preencha o campo!')
            return
        }

        navigation.navigate('Order', { table: tableNumber, order_id: '8078e578-2d7a-4852-a8d4-48567687fe80' })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de pedido</Text>

            <TextInput
                keyboardType={'numeric'}
                style={styles.textInput}
                placeholderTextColor={'#fff'}
                placeholder={'Numero da mesa'}
                value={tableNumber}
                onChangeText={setTableNumber}
            />

            <TouchableOpacity onPress={openOrder} style={styles.button}>
                <Text style={styles.textButton}>Adicionar mesa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1d2e'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0cf110',
        marginVertical: 10,
        fontFamily: 'monospace'
    },

    textInput: {
        height: 40,
        width: '95%',
        backgroundColor: '#000',
        paddingHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
        color: '#fff'
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

    textButton: {
        color: '#ffffff',
        fontSize: 20
    }
})