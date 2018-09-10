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



export default ThreeItemHeader = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <HeaderButton
            src={require('../../../assets/images/Burger.png')}
            name='Menu'
            Navigate={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <HeaderButton
            customStyle={{
                borderLeftColor: colors.red,
                borderLeftWidth: 1 * ratio,
                borderRightColor: colors.red,
                borderRightWidth: 1 * ratio,
            }}
            src={require('../../../assets/images/Filter.png')}
            name='Filteren'
        />
        <HeaderButton
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
        justifyContent: 'space-between'
    }
});