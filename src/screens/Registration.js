import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    CheckBox,
    Dimensions,
} from 'react-native';

import colors from "../styles/colors";
import OneItemHeader from "../components/Header/OneItemHeader";
import StatusBarWrapper from "../containers/StatusBarWrapper";
import RedButton from "../components/Buttons/RedButton";


const { width, height } = Dimensions.get('window')
const ratio = height / 667

const InputField = ({ title }) => (
    <View>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput style={styles.input}></TextInput>
    </View>
)

export default class Registration extends React.Component {

    render() {

        const { navigation } = this.props
        return (
            <StatusBarWrapper >
                {/* <OneItemHeader navigation={navigation} /> */}
                <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.textTitle}>{`Maak eenvoudig een account aan. Met jouw account kun je eenvoudig solliciteren en vacatures toevoegen aan je favorieten.`}</Text>
                        <Text style={styles.boldTitle}>{`Account aanmaken`}</Text>
                        <InputField
                            title='E-mail'
                        />
                        <InputField
                            title='Wachtwoord'
                        />
                        <InputField
                            title='Herhaal wachtwoord'
                        />
                        <Text style={styles.boldTitle}>{`Mijn gegevens`}</Text>
                        <InputField
                            title='Voornaam'
                        />
                        <InputField
                            title='Tussenvoegsel'
                        />
                        <InputField
                            title='Achternaam'
                        />
                        <InputField
                            title='Adres'
                        />
                        <InputField
                            title='Huisnummer'
                        />
                        <InputField
                            title='Toevoeging'
                        />
                        <InputField
                            title='Postcode'
                        />
                        <InputField
                            title='Plaats'
                        />
                        <InputField
                            title='Mobiel / Telefoon '
                        />
                        <View style={styles.checkboxWrapper}>
                            <CheckBox
                                value={true}
                                style={[styles.checkbox]}
                            //   onValueChange={() => this.setState({ checked: !this.state.checked })}
                            />
                            <Text style={styles.checkboxText}>ja, ik ga akkoord met de </Text>
                            <Text
                                style={[styles.checkboxText, { color: colors.red }]}>
                                privacyverklaring
                        </Text>
                        </View>
                        <RedButton text='versturen' />
                    </View>
                </ScrollView>
            </StatusBarWrapper>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 16,
        paddingLeft: 27,
        paddingTop: 27,
        marginBottom: 27,
    },
    textTitle: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0,
        color: colors.lightDark
    },
    boldTitle: {
        fontFamily: "proximanova-extrabold",
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: -0.4,
        color: colors.red,
        marginTop: 10,
        // marginBottom: 10,
    },
    inputTitle: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12,
        lineHeight: 19,
        letterSpacing: 0,
        color: colors.lightDark,
        marginTop: 10,
        marginBottom: 7,
    },
    input: {
        height: 28,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(110, 110, 110, 0.4)",
        shadowOffset: {
            width: 1.1,
            height: 0.7
        },
        shadowRadius: 1.5,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.18)"
    },
    checkboxWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30,
    },
    checkbox: {
        width: 15.5,
        height: 15,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(110, 110, 110, 0.4)",
        shadowOffset: {
            width: 1.1,
            height: 0.7,
        },
        shadowRadius: 1.5,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.18)",
        marginRight: 10
    },
    checkboxText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 11,
        lineHeight: 18,
        letterSpacing: 0,
        color: colors.loginBackground
    }
});