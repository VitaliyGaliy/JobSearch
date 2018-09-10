import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { Text, View, Image, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { StyleSheet, Platform } from 'react-native';

import colors from "../styles/colors";

const { width, height } = Dimensions.get('window')
const ratio = height / 667

class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 20 * ratio, height: 12.5 * ratio }}
                        source={require('../../assets/images/Drawer/RedVacatures.png')}
                    />
                    <Text
                        style={styles.menuText}
                        onPress={this.navigateToScreen('Vacatures')}
                    >
                        Vacatures
                    </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 20 * ratio, height: 20 * ratio }}
                        source={require('../../assets/images/Drawer/GrayFavoriet.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                    // onPress={this.navigateToScreen('Berichten')}
                    >
                        Mijn favorieten
                        </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 18 * ratio, height: 13.5 * ratio }}
                        source={require('../../assets/images/Drawer/GrayLetter.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                        onPress={this.navigateToScreen('VacatureAlarm')}
                    >
                        Berichten
                        </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 21 * ratio, height: 19.5 * ratio }}
                        source={require('../../assets/images/Drawer/GrayAlarm.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                        onPress={this.navigateToScreen('VacatureAlarm')}
                    >
                        Vacature alarm
                        </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 18 * ratio, height: 20 * ratio }}
                        source={require('../../assets/images/Drawer/GrayPointer.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                        onPress={this.navigateToScreen('Vestigingen')}
                    >
                        Vestigingen
                        </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 18 * ratio, height: 18 * ratio }}
                        source={require('../../assets/images/Drawer/GrayUser.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                        onPress={this.navigateToScreen('VacatureAlarm')}
                    >
                        Mijn account
                        </Text>
                </View>
                <View style={styles.menuItem}>
                    <Image
                        style={{ width: 22.5 * ratio, height: 6.5 * ratio }}
                        source={require('../../assets/images/Drawer/GrayDots.png')}
                    />
                    <Text
                        style={styles.menuTextGray}
                        onPress={this.navigateToScreen('VacatureAlarm')}
                    >
                        Meer
                        </Text>
                </View>
            </View>
        );
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 37 * ratio,

    },
    menuItem: {
        marginTop: 44 * ratio,
        marginLeft: 13 * ratio,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        marginLeft: 13 * ratio,
        fontFamily: "proximanova-extrabold",
        fontSize: 15 * ratio,
        lineHeight: 18 * ratio,
        color: colors.red,
    },
    menuText: {
        marginLeft: 13 * ratio,
        fontFamily: "proximanova-extrabold",
        fontSize: 15 * ratio,
        lineHeight: 18 * ratio,
        color: colors.red,
    },
    menuTextGray: {
        marginLeft: 13 * ratio,
        fontFamily: "proximanova-extrabold",
        fontSize: 15 * ratio,
        lineHeight: 18 * ratio,
        color: colors.lightDark
    },
});


export default DrawerScreen;