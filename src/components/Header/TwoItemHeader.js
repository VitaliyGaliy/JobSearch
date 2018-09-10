import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { DrawerActions } from 'react-navigation';

import colors from "../../styles/colors";

import HeaderButton from "../Buttons/HeaderButton";

const { width, height } = Dimensions.get('window')
const ratio = height / 667



export default TwoItemHeader = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <HeaderButton
            customStyle={{ flex: 2 }}
            Navigate={() => navigation.dispatch(DrawerActions.openDrawer())}
            src={require('../../../assets/images/Burger.png')}
            name='Menu'
        />
        <HeaderButton
            customStyle={{ flex: 1 }}
            src={require('../../../assets/images/FullStar.png')}
            name='Mijn favorieten'
        />
    </View>
);

let styles = StyleSheet.create({
    headerContainer: {
        height: 43 * ratio,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});