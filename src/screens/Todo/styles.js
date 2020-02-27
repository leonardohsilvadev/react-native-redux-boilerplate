import { ScaledSheet } from 'react-native-size-matters';

export const Styles = ScaledSheet.create({
    viewButton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '10@vs',
        marginTop: '20@vs',
        marginHorizontal: '20@s',
    },
    button: {
        width: '120@s',
        height: '50@vs',
        justifyContent: 'center',
    },
    cardItem: {
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
    },
});