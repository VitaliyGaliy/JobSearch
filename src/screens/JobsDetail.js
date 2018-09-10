import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    Dimensions,
} from 'react-native';
import colors from "../styles/colors";
import StatusBarWrapper from "../containers/StatusBarWrapper";
import RedButton from "../components/Buttons/RedButton";
import EmptyButton from "../components/Buttons/EmptyButton";

const { width, height } = Dimensions.get('window')
const ratio = height / 667

class JobsDetail extends Component {
    render() {
        const { navigation } = this.props
        return (
            <StatusBarWrapper customStyle={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={[styles.titleWrapper, styles.paddings]}>
                        <Text style={styles.titleText}>
                            Logistiek Medewerker
                    </Text>
                        <Image
                            style={styles.emptyStar}
                            source={require('../../assets/images/FullStar.png')}
                        />
                    </View>
                    <View style={[styles.userInfo, styles.paddings]}>
                        <Text style={styles.userInfoText}>Plaats: Amsterdam</Text>
                        <Text style={styles.userInfoText}>Uur per week: 40.00</Text>
                    </View>
                    <View style={[styles.buttonWrapper, styles.paddings]}>
                        <EmptyButton
                            customStyle={styles.customBottomStyle}
                            text='delen'
                        />
                        <RedButton
                            customStyle={styles.customBottomStyle}
                            text='solliciteer'
                        />
                    </View>
                    <View style={[styles.maintextWrapper, styles.paddings]}>
                        <Text style={styles.maintext}>{`Ben je per direct op zoek naar werk als logistiek medewerker in Amsterdam in een logistieke omgeving? En beschik jij over een hands on mentaliteit en ben jij een echte teamplayer?
Voor een leuke klant in Amsterdam West zijn wij op zoek naar enthousiaste logistiek medewerkers die per direct kunnen starten. De werkzaamheden bestaan onder andere uit het vouwen van dozen, het vullen van dozen en het stapelen van pallets. Als logistiek medewerker ben je verantwoordelijk voor een optimale verwerking van alle goederen.`}</Text>
                        <Text style={styles.demandsTitle}>Wat vragen wij</Text>
                        <Text style={styles.maintext}>{`Je woont nabij Westpoort of beschikt over eigen vervoer; 
Je bent een aanpakker; 
Je bent per direct beschikbaar; 
Je bent proactief en je hebt een flexibele werkhouding. `}
                        </Text>
                        <Text style={styles.demandsTitle}>Wat bieden wij</Text>
                        <Text style={styles.maintext}>{`Flexibele werktijden 
Een reiskostenvergoeding van €0,19 per kilometer
Een uurloon van €10,60 (inc 12% poegentoeslag) 

Ben je enthousiast? Solliciteer direct via de sollicitatie button in het scherm. Ons team van recruiters zal jouw sollicitatie zo spoedig mogelijk in behandeling nemen. `}
                        </Text>
                    </View>
                    <View style={[styles.contactWrapper, styles.paddings]}>
                        <Text style={styles.contactTitle}>Contact</Text>
                        <Text style={[styles.contactText, styles.demandsTet]}>Voor vragen kan je contact opnemen met Hutspot JOBS</Text>
                        <View style={styles.conactInfo}>
                            <Text style={styles.conactLetter}>T    :</Text>
                            <Text style={styles.conactText}>020 – 234 5678</Text>
                        </View>
                        <View style={styles.conactInfo}>
                            <Text style={styles.conactLetter}>E    :</Text>
                            <Text style={styles.conactText}>jobs@hutspot.media</Text>
                        </View>
                    </View>
                </ScrollView>
            </StatusBarWrapper>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    paddings: {
        paddingLeft: 16 * ratio,
        paddingRight: 16 * ratio,
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 26 * ratio,
        paddingBottom: 10 * ratio,
    },
    emptyStar: {
        width: 20.5 * ratio,
        height: 19.5 * ratio,
    },
    titleText: {
        fontFamily: "ProximaNova-Bold",
        fontSize: 20 * ratio,
        lineHeight: 17 * ratio,
        color: colors.lightDark,
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        // paddingLeft: 16 * ratio,
    },
    userInfoText: {
        fontFamily: "Lato-Regular",
        fontSize: 11 * ratio,
        fontWeight: "500",
        lineHeight: 13 * ratio,
        letterSpacing: 0,
        color: colors.lightDark
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 19.5,
    },
    customBottomStyle: {
        width: 135,
        height: 30,
        marginLeft: 6,
        marginRight: 6,
    },

    maintextWrapper: {
        marginTop: 19.5,
    },
    maintext: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 11,
        lineHeight: 18,
        letterSpacing: 0,
        color: colors.lightDark,
        // paddingLeft: 16 * ratio,
        // paddingRight: 28 * ratio,
        // paddingTop: 17 * ratio,
        paddingBottom: 10 * ratio,
    },
    demandsWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    demandsTitle: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 11 * ratio,
        lineHeight: 18 * ratio,
        fontWeight: '100'
    },
    demandsTet: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 12 * ratio,
        lineHeight: 18 * ratio,
        color: colors.lightDark
    },
    contactWrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.midleGray,
        paddingTop: 16 * ratio,
        paddingBottom: 20 * ratio,
    },
    contactTitle: {
        fontFamily: "SourceSansPro-Bold",
        color: colors.red,
        fontSize: 15 * ratio,
        lineHeight: 17 * ratio,
        letterSpacing: 0,
    },
    conactInfo: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
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
})

export default JobsDetail;