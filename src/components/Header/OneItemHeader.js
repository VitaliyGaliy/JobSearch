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

export default OneItemHeader = ({ navigation }) => (
    <View style={styles.header}>
        <HeaderButton
            Navigate={() => navigation.dispatch(DrawerActions.openDrawer())}
            src={require('../../../assets/images/Burger.png')}
            name='Menu'
            customStyle={{ width: 100, flex: null }}
        />
    </View>
);

let styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        height: 43 * ratio,
        borderBottomColor: colors.red,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});