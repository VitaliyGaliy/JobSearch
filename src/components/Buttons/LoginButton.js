import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window')
const ratio = height / 667

import colors from "../../styles/colors";

class LoginButton extends Component {
    render() {
        const { text, onClick } = this.props
        return (
            <TouchableHighlight
                onPress={onClick}
                style={styles.butonWrapper}
            >
                <Text style={styles.buttonsText}>{text}</Text>
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({
    butonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 249 * ratio,
        height: 46 * ratio,
        marginTop: 13 * ratio,
        borderRadius: 1,
        backgroundColor: colors.red,
    },
    buttonsText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16 * ratio,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0.48,
        color: colors.lightGray,
        lineHeight: 21,
    },
});

export default LoginButton;