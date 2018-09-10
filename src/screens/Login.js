import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import * as actions from '../actions/auth';

import colors from "../styles/colors";
import LoginInput from "../components/Inputs/LoginInput";
import LoginButton from "../components/Buttons/LoginButton";
import StatusBarWrapper from "../containers/StatusBarWrapper";

const { height } = Dimensions.get('window')
const ratio = height / 667

class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };
    async onAuth() {
        const { authenticate, navigation } = this.props
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('App');
        authenticate(true)
    }

    render() {
        const { navigation } = this.props
        console.log('Login');

        return (

            <StatusBarWrapper>
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.backgroundImage}
                        source={require('../../assets/images/main_background.png')}
                    >
                        <View style={styles.wrapper}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/hutspot_media_icon.png')}
                            />
                            <TouchableHighlight
                                onPress={() => this.onAuth(true)}
                            >
                                <Text style={styles.loginText}>Inloggen</Text>
                            </TouchableHighlight>
                            <Text style={styles.TitleText}>
                                {`Welkom bij Hutspot JOBS \nLogin met je accountgegevens.`}
                            </Text>
                            <LoginInput
                                placeholder='E-mailadres'
                            />
                            <LoginInput
                                placeholder='Wachtwoord'
                            />
                            <LoginButton
                                text='Inloggen'
                                onClick={() => navigation.navigate('Vacatures')}
                            />
                            <Text style={styles.vergetenText}>Wachtwoord vergeten?</Text>
                            <Text style={styles.zonderText}>Verder zonder account</Text>
                            <EvilIcons style={styles.plusSign} name="plus" />
                            <View style={styles.bottomTextWrapper}>
                                <Text style={styles.accountText}>Geen account?</Text>
                                <TouchableHighlight
                                    onPress={() => navigation.navigate('Registration')}
                                >
                                    <Text style={styles.registerText}>Registeer</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </StatusBarWrapper>

        );
    }
}

const mapStateToProps = state => ({
    // tasks: state.main.tasks,
});

export default connect(mapStateToProps, actions)(Login);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.loginBackground
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    wrapper: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: 171 * ratio,
        height: 91 * ratio,
        marginTop: 58.5 * ratio
    },
    loginText: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 35 * ratio,
        marginTop: 25 * ratio,
        fontWeight: "300",
        color: colors.white
    },
    TitleText: {
        fontFamily: 'SourceSansPro-Regular',
        lineHeight: 19.5 * ratio,
        fontWeight: "normal",
        fontSize: 16 * ratio,
        marginTop: 12 * ratio,
        marginBottom: 7 * ratio,
        textAlign: "center",
        fontWeight: "300",
        color: colors.white
    },
    vergetenText: {
        textDecorationLine: "underline",
        fontFamily: "SourceSansPro-Regular",
        fontSize: 13 * ratio,
        fontWeight: '600',
        fontStyle: "normal",
        letterSpacing: 0.38,
        color: colors.lightGray,
        lineHeight: 21,
        marginTop: 13 * ratio,
    },
    zonderText: {
        fontFamily: "SourceSansPro-Italic",
        fontStyle: 'italic',
        fontSize: 13 * ratio,
        fontWeight: '600',
        letterSpacing: 0.38,
        color: colors.lightGray,
        lineHeight: 21,
        marginTop: 17 * ratio,
    },
    plusSign: {
        fontSize: 35,
        color: colors.white,
        marginTop: 50 * ratio,
    },
    bottomTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 6 * ratio
    },
    accountText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 15 * ratio,
        fontWeight: "900",
        fontStyle: "normal",
        textAlign: "center",
        color: colors.white
    },
    registerText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 15 * ratio,
        color: colors.red,
        marginLeft: 6 * ratio
    },
});