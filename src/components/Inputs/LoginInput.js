import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window')
const ratio = height / 667

import colors from "../../styles/colors";

class LoginInput extends Component {
    render() {
        const { placeholder } = this.props
        return (
            <TextInput
                placeholder={placeholder}
                underlineColorAndroid='transparent'
                style={styles.inputField}
            />
        );
    }
}

let styles = StyleSheet.create({
    inputField: {
        textAlign: 'center',
        fontSize: 16 * ratio,
        width: 249 * ratio,
        height: 46 * ratio,
        marginTop: 13 * ratio,
        backgroundColor: colors.lightGray,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 1,
        fontFamily: "SourceSansPro-Regular",
    },
});

export default LoginInput;