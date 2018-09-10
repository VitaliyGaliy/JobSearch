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
import TwoItemHeader from "../components/Header/TwoItemHeader";
import StatusBarWrapper from "../containers/StatusBarWrapper";


const { width, height } = Dimensions.get('window')
const ratio = height / 667



export default class Berichten extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <StatusBarWrapper style={styles.container}>
                <TwoItemHeader navigation={navigation} />
                <FlatList
                    data={[{ id: '1' }, { id: '2' }, { id: '3 ' }, { id: ' 4' }]}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.contactContainer}>
                            <View style={styles.contactLeft}>
                                <Text style={styles.conactTitle}>Vestiging 1</Text>
                                <Text style={styles.conactText}>Kalverstraat 1</Text>
                                <Text style={styles.conactText}>1100 AA Amsterdam</Text>
                                <View style={styles.conactInfo}>
                                    <Text style={styles.conactLetter}>T    :</Text>
                                    <Text style={styles.conactText}>020 – 234 5678</Text>
                                </View>
                                <View style={styles.conactInfo}>
                                    <Text style={styles.conactLetter}>F    :</Text>
                                    <Text style={styles.conactText}>020 – 234 5678</Text>
                                </View>
                                <View style={styles.conactInfo}>
                                    <Text style={styles.conactLetter}>E    :</Text>
                                    <Text style={styles.conactText}>jobs@hutspot.media</Text>
                                </View>
                            </View>
                            <View style={styles.contactRight}>
                                <View style={styles.square}>
                                    <Image
                                        style={styles.telefoon}
                                        source={require('../../assets/images/Telefoon.png')}
                                    />
                                    <Text style={styles.iconName}>Bellen</Text>
                                </View>
                                <View style={[styles.square, {
                                    borderBottomColor: colors.white,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    borderTopColor: colors.white,
                                    borderTopWidth: StyleSheet.hairlineWidth
                                }]}>
                                    <Image
                                        style={styles.map}
                                        source={require('../../assets/images/MapPointer.png')}
                                    />
                                    <Text style={styles.iconName}>Open Maps</Text>
                                </View>
                                <View style={styles.square}>
                                    <Image
                                        style={styles.mail}
                                        source={require('../../assets/images/Mail.png')}
                                    />
                                    <Text style={styles.iconName}>E-mailen</Text>
                                </View>
                            </View>
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
    contactContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    contactLeft: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 17 * ratio,
        marginLeft: 16 * ratio,
    },
    conactTitle: {
        fontFamily: "proximanova-extrabold",
        fontSize: 20 * ratio,
        lineHeight: 30 * ratio,
        color: colors.red
    },
    conactInfo: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 3 * ratio,
        marginTop: 3 * ratio,
    },
    conactLetter: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 12 * ratio,
        fontWeight: "600",
        lineHeight: 18 * ratio,
        color: colors.lightDark,
        color: colors.red
    },
    conactText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 12 * ratio,
        fontWeight: "600",
        lineHeight: 18 * ratio,
        color: colors.lightDark
    },
    contactRight: {
        display: 'flex',
        flexDirection: 'column',
    },
    square: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGray,
        width: 59 * ratio,
        height: 59 * ratio
    },
    telefoon: {
        width: 12 * ratio,
        height: 15 * ratio
    },
    map: {
        width: 18 * ratio,
        height: 18 * ratio,

    },
    mail: {
        width: 15.5 * ratio,
        height: 12.5 * ratio,
    },
    iconName: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 10 * ratio,
        fontWeight: "300",
        fontStyle: "normal",
        lineHeight: 17 * ratio,
        marginTop: 3 * ratio,
        color: colors.lightDark
    }
});