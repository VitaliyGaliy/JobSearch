import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar
} from 'react-native';

class Berichten extends Component {
    render() {
        const { children } = this.props
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
                <StatusBar
                    barStyle="light-content"
                //   backgroundColor="#6a51ae"
                />
                {children}
            </SafeAreaView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Berichten;