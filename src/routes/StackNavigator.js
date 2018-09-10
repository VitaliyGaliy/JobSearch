import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {
    createStackNavigator,
}
    from 'react-navigation'

import VacaturesScreen from '../screens/Vacatures';
import JobsDetailScreen from '../screens/JobsDetail';
import VacatureAlarmScreen from '../screens/VacatureAlarm';
import VestigingenScreen from '../screens/Vestigingen';
import BerichtenScreen from '../screens/Berichten';
import AccountScreen from '../screens/Account';
import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Registration';

import colors from "../styles/colors";
const { width, height } = Dimensions.get('window')
const ratio = height / 667


const navOptions = {
    headerStyle: {
        height: 30 * ratio,
        backgroundColor: colors.black,
    },
    headerTitleStyle: {
        color: colors.white,
        fontSize: 12 * ratio,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

const BackBotton = ({ goBack }) => (
    <TouchableOpacity
        style={{ width: 20, marginLeft: 14 }}
        onPress={() => goBack()}>
        <Image
            style={{ width: 14, height: 11.5 }}
            source={require('../../assets/images/BackArrow.png')} />
    </TouchableOpacity>
)

export const AuthStackNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Registration: {
            screen: RegistrationScreen,
            navigationOptions: ({ navigation: { goBack } }) => ({
                title: 'Registeren',
                headerLeft: <BackBotton goBack={goBack} />,
                ...navOptions
            }),
        },
    }
);

export const Vacatures = createStackNavigator({
    Vacatures: {
        screen: VacaturesScreen,
        navigationOptions: () => ({ title: 'Vacatures', ...navOptions }),
    },
    JobsDetail: {
        screen: JobsDetailScreen,
        navigationOptions: ({ navigation: { goBack } }) => ({
            title: 'Vacatures',
            headerLeft: <BackBotton goBack={goBack} />,
            ...navOptions
        }),
    }
});

// export const Vacatures = createStackNavigator({
//     screen: VacaturesScreen
// },
//     {
//         navigationOptions: { title: 'Vacatures', ...navOptions }
//     })

export const Berichten = createStackNavigator({
    screen: BerichtenScreen,

},
    {
        navigationOptions: { title: 'Berichten', ...navOptions }
    })

export const VacatureAlarm = createStackNavigator({
    screen: VacatureAlarmScreen,

},
    {
        navigationOptions: { title: 'Vacature alarm', ...navOptions }
    })

export const Vestigingen = createStackNavigator({
    screen: VestigingenScreen,

},
    {
        navigationOptions: { title: 'Vestigingen', ...navOptions }
    })

export const Account = createStackNavigator({
    screen: AccountScreen,

},
    {
        navigationOptions: { title: 'Mijn account', ...navOptions }
    })


