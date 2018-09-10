import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')
const ratio = height / 667

import colors from "../../styles/colors";

class RedButton extends Component {
    render() {
        let { customStyle, text, onButtonPress } = this.props
        onButtonPress = onButtonPress ? onButtonPress : () => null
        return (
            <TouchableHighlight
                style={[styles.butonWrapper, customStyle]}
                onPress={() => onButtonPress() || null}
            >
                <View style={styles.buttonsTextWrapper}>
                    <Text style={styles.buttonsText}>{text}</Text>
                    <MaterialIcons style={styles.arrow} name="keyboard-arrow-right" />
                </View>
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({
    butonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 105 * ratio,
        height: 30 * ratio,
        backgroundColor: colors.red,
    },
    buttonsTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 13 * ratio,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0.48,
        color: colors.white,
        lineHeight: 21,
    },
    arrow: {
        fontSize: 16 * ratio,
        color: colors.white,
        marginTop: 4 * ratio,
        fontSize: 20
    },

});

export default RedButton;