
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckedBox?: boolean;
    checked?: boolean;
}
export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckedBox = false,
    ...rest
}: Props) {
    const { secondary50, secondary30, secondary70, secondary90 } = theme.colors;
    return (

        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary30, secondary90]}
            >
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.6 }]}
                    colors={[checked ? secondary50 : secondary50, secondary70]}
                >
                    {
                        hasCheckedBox &&
                        <View style={checked ? styles.checked : styles.check
                        } />
                    }
                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>

            </LinearGradient>

        </RectButton >

    );
}