import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { api } from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'
type RoutersDetailParams = {
    FinishOrder: {
        number: number | string;
        order_id: string
    }
}

type FinishOrderRouteProp = RouteProp<RoutersDetailParams, 'FinishOrder'>

export default function FinishOrder() {

    const route = useRoute<FinishOrderRouteProp>()
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    async function handleFinish() {
        try {
            await api.put('/order/send', {
                order_id: route.params.order_id
            })

            navigation.popToTop();

        } catch (err) {
            console.log('Erro ao finalizar pedido!')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar esse pedido?</Text>
            <Text style={styles.title}>Mesa {route.params.number}</Text>
            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather size={20} color={"#1d1d2e"} name="shopping-cart" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d2e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '4%'
    },

    alert: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 12
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    button: {
        backgroundColor: '#3fffa3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 8
    }
})