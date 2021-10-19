//Lista de modos de jogo

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';


export function CategorySelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category

                    />
                ))
            }

        </ScrollView>
    )
}