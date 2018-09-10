import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')
const ratio = height / 667

import colors from "../../styles/colors";

class EmptyButton extends Component {
    render() {
        const { text, customStyle } = this.props
        return (
            <TouchableHighlight
                style={[styles.butonWrapper, customStyle]}
            >
                <View style={styles.buttonsTextWrapper}>
                    <Image
                        style={styles.emptyBtnIcon}
                        source={require('../../../assets/images/emptyBtnIcon.png')}
                    />
                    <Text style={styles.buttonsText}>{text}</Text>
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
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 1,
        backgroundColor: colors.white,
    },
    buttonsTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 13 * ratio,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 42,
        letterSpacing: 0.48,
        color: colors.red,
        lineHeight: 21,
        marginLeft: 8,
    },
    emptyBtnIcon: {
        width: 11.5,
        height: 11
    }
});

export default EmptyButton;