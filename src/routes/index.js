import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import {
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
}
    from 'react-navigation'

const { width, height } = Dimensions.get('window')
const ratio = height / 667

import colors from "../styles/colors";
import DrawerScreen from "./Drawer";

import {
    Vacatures,
    Berichten,
    VacatureAlarm,
    Vestigingen,
    Account,
    AuthStackNavigator,
} from './StackNavigator';

import AuthLoadingScreen from './AuthLoadingScreen';

const AppTabNavigator = createBottomTabNavigator({
    Vacatures: {
        screen: Vacatures,
        navigationOptions: {
            tabBarLabel: 'Vacatures',
            tabBarIcon: () => (
                <Image
                    style={{ width: 21 * ratio, height: 14 * ratio }}
                    source={require('../../assets/images/Vacatures.png')}
                />
            )
        }
    },
    Berichten: {
        screen: Berichten,
        navigationOptions: {
            tabBarLabel: 'Berichten ',
            tabBarIcon: () => (
                <Image
                    style={{ width: 19 * ratio, height: 14 * ratio }}
                    source={require('../../assets/images/Letter.png')}
                />
            )
        }
    },
    VacatureAlarm: {
        screen: VacatureAlarm,
        navigationOptions: {
            tabBarLabel: ' Vacature Alarms',
            tabBarIcon: () => (
                <Image
                    style={{ width: 22 * ratio, height: 18 * ratio }}
                    source={require('../../assets/images/Bell.png')}
                />
            )
        }
    },
    Vestigingen: {
        screen: Vestigingen,
        navigationOptions: {
            tabBarLabel: 'Vestigingen',
            tabBarIcon: () => (
                <Image
                    style={{ width: 18 * ratio, height: 21 * ratio }}
                    source={require('../../assets/images/Pointer.png')}
                />
            )
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarLabel: 'Mijn account',
            tabBarIcon: () => (
                <Image
                    style={{ width: 20 * ratio, height: 20 * ratio }}
                    source={require('../../assets/images/Account.png')}
                />
            )
        }
    },
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 9 * ratio,
                color: colors.white,
                marginBottom: 7 * ratio,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            tabStyle: {
                display: 'flex',
                flexDirection: 'column',
            },
            style: {
                height: 50 * ratio,
                backgroundColor: colors.black,
            },
            activeTinColor: colors.red,
            activeBackgroundColor: colors.red
        },
    }
)

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppTabNavigator
},
    {
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        drawerWidth: 215
    }

)

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
},
    {
        initialRouteName: 'AuthLoading',
    }
)