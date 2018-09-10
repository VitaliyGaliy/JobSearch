import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import colors from "../../styles/colors";


const { width, height } = Dimensions.get('window')
const ratio = height / 667


export default HeaderButton = ({ Navigate, customStyle, src, name }) => (
    <TouchableOpacity
        style={[styles.burgerMenuWrapper, customStyle]}
        onPress={Navigate || null}
    >
        <Image
            style={styles.burgerMenu}
            source={src}
        />
        <Text style={styles.burgerText}>{name}</Text>
    </TouchableOpacity>
);

let styles = StyleSheet.create({
    burgerMenuWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    burgerMenu: {
        width: 14 * ratio,
        height: 13.5 * ratio,
        marginRight: 8 * ratio,
        marginBottom: 2 * ratio,
        marginLeft: 13 * ratio,
    },
    burgerText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12 * ratio,
        marginLeft: 5 * ratio,
        fontWeight: '500',
        color: colors.lightDark
    },
});