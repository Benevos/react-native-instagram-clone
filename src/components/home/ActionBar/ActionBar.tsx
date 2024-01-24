import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Reels from '../../icons/instagram/Reels';
import AddR from '../../icons/cg/AddR';

import FiSearch from '../../icons/fi/Search';
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
            <AbIconButton Icon={AddR}/>
            <AbIconButton Icon={Reels}/>
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