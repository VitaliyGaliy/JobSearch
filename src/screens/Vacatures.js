import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import colors from "../styles/colors";
import StatusBarWrapper from "../containers/StatusBarWrapper";
import ThreeItemHeader from "../components/Header/ThreeItemHeader";


const { width, height } = Dimensions.get('window')
const ratio = height / 667

class Vacatures extends Component {
    render() {
        const { navigation } = this.props
        return (
            <StatusBarWrapper style={styles.container}>
                <ThreeItemHeader navigation={navigation} />
                <View style={styles.vacancyAmount}>
                    <Text style={styles.vacancyText}>Je hebt 25 favoriete vacatures</Text>
                </View>
                <FlatList
                    data={[{ id: '1' }, { id: '2' }, { id: '3 ' }, { id: ' 4' }]}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <TouchableHighlight style={styles.vacancyItem}
                            onPress={() => navigation.navigate('JobsDetail')}
                        >
                            <View>
                                <View style={styles.titleWrapper}>
                                    <Text style={styles.vacancyTitle}>
                                        Logistiek Medewerker
                                </Text>
                                    <Image
                                        style={styles.fullStar}
                                        source={require('../../assets/images/FullStar.png')}
                                    />
                                </View>
                                <View style={styles.mainInfoTextWrapper}>
                                    <Text style={styles.mainInfoText}>Plaats: Amsterdam</Text>
                                    <Text style={styles.mainInfoText}>Uur per week: 40.00</Text>
                                </View>
                                <View style={styles.mainInfoWrapper}>
                                    <Text style={styles.infoText}>
                                        Ben je per direct op zoek naar werk als logistiek medewerker in Amsterdam in een logistieke omgeving? En beschik jij over een hands on mentaliteit en ben jij een echte teamplayer?
                                </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
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
        flexDirection: 'column'
    },

    vacancyAmount: {
        height: 35 * ratio,
        backgroundColor: colors.red,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    vacancyText: {
        color: colors.white,
        fontFamily: "SourceSansPro-Regular",
        fontSize: 13 * ratio,
    },
    vacancyItem: {
        // height: 166 * ratio,
        borderBottomColor: colors.red,
        borderBottomWidth: 7 * ratio,
        paddingLeft: 15 * ratio,
        paddingRight: 14 * ratio,
        paddingTop: 10 * ratio,
        paddingBottom: 27 * ratio,
    },
    titleWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    vacancyTitle: {
        fontFamily: "ProximaNova-Light",
        fontSize: 20 * ratio,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 30 * ratio,
        letterSpacing: -0.4 * ratio,
        textAlign: "left",
        color: colors.lightDark
    },
    fullStar: {
        height: 18 * ratio,
        width: 20 * ratio
    },
    mainInfoTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        // marginTop: 16 * ratio
    },
    mainInfoText: {
        fontFamily: "Lato-Regular",
        fontSize: 11 * ratio,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 14 * ratio,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.lightDark
    },
    mainInfoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15 * ratio
    },
    infoText: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 13 * ratio,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16.5 * ratio,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.lightDark
    },

})

export default Vacatures;