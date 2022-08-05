import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import { CategoryProps } from '../../pages/Order'

type ModalPickerProps = {
    options: CategoryProps[];
    handleModalPicker: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export function ModalPicker({ options, handleModalPicker, selectedItem }: ModalPickerProps) {

    function onPressItem(item: CategoryProps) {
        selectedItem(item);
        handleModalPicker()
    }

    const option = options.map((item, index) => {
        return (
            <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
                <Text style={styles.item}>{item?.name}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity style={styles.container} onPress={handleModalPicker}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: WIDTH - 20,
        height: HEIGHT / 2,
        backgroundColor: '#040404',
        borderWidth: 1,
        borderRadius: 4,
    },

    option: {
        alignItems: 'flex-start',
        borderWidth: 0.8,
        borderColor: '#d3cae14b'
    },

    item: {
        margin: 18,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    }
})