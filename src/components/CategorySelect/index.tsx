//Lista de modos de jogo

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckedBox?: boolean;
}


export function CategorySelect({ categorySelected, setCategory, hasCheckedBox = false, }: Props) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckedBox={hasCheckedBox}
                    />
                ))
            }
        </ScrollView>
    )
}