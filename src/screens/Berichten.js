import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import colors from "../styles/colors";
import OneItemHeader from "../components/Header/OneItemHeader";
import StatusBarWrapper from "../containers/StatusBarWrapper";


const { width, height } = Dimensions.get('window')
const ratio = height / 667



export default class Berichten extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <StatusBarWrapper style={styles.container}>
                <OneItemHeader
                    navigation={navigation}
                />
                <FlatList
                    data={[{ id: '1' }, { id: '2' }, { id: '3 ' }, { id: ' 4' }]}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageDate}>
                                18 juli 2018
                        </Text>
                            <View style={styles.messageTitleWrapper}>
                                <Image
                                    style={styles.redLetter}
                                    source={require('../../assets/images/RedLetter.png')}
                                />
                                <Text style={styles.titleText}>Vacature: Logistiek Medewerker </Text>
                            </View>
                            <Text style={styles.mainText}>Wij hebben de volgende vacature voor je gevonden. </Text>
                        </View>
                    }
                />
            </StatusBarWrapper>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 21 * ratio,
        paddingRight: 21 * ratio,
        paddingTop: 14 * ratio,
        paddingBottom: 17 * ratio,
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    messageDate: {
        fontFamily: "Lato-Regular",
        fontSize: 11,
        fontWeight: "200",
        lineHeight: 14,
        letterSpacing: 0,
        color: colors.red
    },
    messageTitleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    redLetter: {
        width: 18 * ratio,
        height: 14 * ratio
    },
    titleText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 13,
        lineHeight: 30,
        color: colors.lightDark,
        marginLeft: 7 * ratio,
    },
    mainText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 12,
        lineHeight: 30,
        lineHeight: 17,
        color: colors.lightDark
    },
});