import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    AsyncStorage,
    Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from "../styles/colors";
import RedButton from "../components/Buttons/RedButton";
import OneItemHeader from "../components/Header/OneItemHeader";
import StatusBarWrapper from "../containers/StatusBarWrapper";

import { connect } from 'react-redux';
import * as actions from '../actions/auth';

const { width, height } = Dimensions.get('window')
const ratio = height / 667



class Account extends React.Component {
    _signOutAsync = async () => {
        const { authenticate, navigation } = this.props

        const token = await AsyncStorage.clear();
        navigation.navigate('Auth');
        authenticate(true)
    };
    render() {
        const editList = [
            { icon: require('../../assets/images/Edit.png'), text: 'Bewerk profiel', style: { width: 24, height: 23 } },
            { icon: require('../../assets/images/Lock.png'), text: 'Wachtwoord wijzigen', style: { width: 14, height: 19 } },
            { icon: require('../../assets/images/Privacy.png'), text: 'Privacy statement', style: { width: 19, height: 19 } },
            { icon: require('../../assets/images/Usage.png'), text: 'Gebruikersvoorwaarden', style: { width: 20, height: 20 } },
        ]
        const { navigation } = this.props
        return (
            <StatusBarWrapper style={styles.container}>
                <OneItemHeader navigation={navigation} />
                <ImageBackground
                    style={styles.imageTileWrapper}
                    source={require('../../assets/images/accountTitlePhoto.png')}
                >
                    <Image
                        style={styles.userPhoto}
                        source={require('../../assets/images/Homer.jpg')}
                    />

                </ImageBackground>
                <View style={styles.userContainer}>
                    <View style={styles.userWrapper}>
                        <Text style={styles.userText}>Janet Doe</Text>
                        <Text style={styles.userText}>janetdoe@gmail.com</Text>
                    </View>
                    <RedButton
                        text='uitloggen'
                        onButtonPress={this._signOutAsync}
                    />
                </View>
                {
                    editList.map((l, i) => (
                        <View key={i} style={styles.editList}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    style={l.style}
                                    source={l.icon} />
                            </View>
                            <Text
                                style={styles.editText}>{l.text}</Text>
                        </View>
                    )
                    )
                }
            </StatusBarWrapper>
        );
    }
}

const mapStateToProps = state => ({
    // tasks: state.main.tasks,
});

export default connect(mapStateToProps, actions)(Account);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    imageTileWrapper: {
        height: 185 * ratio,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userPhoto: {
        height: 120 * ratio,
        width: 120 * ratio,
        borderRadius: 60 * ratio,
    },
    userContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 85 * ratio,
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15 * ratio,
        paddingRight: 15 * ratio,
    },
    userWrapper: {
        // paddingTop: 5,
        // paddingBottom: 5,
    },
    userName: {
        paddingTop: 5 * ratio,
        paddingBottom: 5 * ratio,
        fontFamily: "Lato-Regular",
        fontSize: 13 * ratio,
        fontWeight: "500",
        fontStyle: "normal",
        color: colors.loginBackground
    },
    editList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 42 * ratio,
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        // justifyContent: 'flexstart',
        paddingLeft: 15 * ratio,
        paddingRight: 15 * ratio,
    },
    editImage: {
        width: 22 * ratio,
        height: 20 * ratio,
        resizeMode: 'cover'
    },
    editText: {
        fontFamily: "Lato-Regular",
        fontSize: 14 * ratio,
        fontStyle: "normal",
        color: colors.loginBackground,
        // paddingLeft: 16 * ratio,
        flex: 8
    },

});