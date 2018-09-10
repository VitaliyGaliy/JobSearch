import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
} from 'react-native';

class VacatureAlarm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>VacatureAlarm</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default VacatureAlarm;