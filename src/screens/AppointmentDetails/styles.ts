import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30,

    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30

    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading,
        paddingBottom: 14,


    },
    subtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
    },


});
