import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

interface ItemProps {
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: number | string
    }
}

export function ListItem({ data }: ItemProps) {
    return (
        <View style={styles.container}>
            <Text>Item Lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})