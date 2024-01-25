import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InReels from '../../icons/in/InReels';
import CgAddR from '../../icons/cg/CgAddR';

import FiSearch from '../../icons/fi/FiSearch';
import GoHomeFill from '../../icons/go/GoHomeFill';
import FaUserCircle from '../../icons/fa/FaUserCircle';
import AbIconButton from './AbIconButton';
import AbAccountButton from './AbAccountButton';

export default function ActionBar() 
{
    return (
        <View style={styles.container}>
            <AbIconButton Icon={GoHomeFill}/>
            <AbIconButton Icon={FiSearch}/>
            <AbIconButton Icon={CgAddR}/>
            <AbIconButton Icon={InReels}/>
            <AbAccountButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        height: 55,
        borderTopWidth: 1,
        borderColor: 'rgba(255,255,255,0.13)'
    },
});