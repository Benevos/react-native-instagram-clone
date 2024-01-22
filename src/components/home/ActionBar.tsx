import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Reels from '../icons/instagram/Reels';
import AddR from '../icons/cg/AddR';

import FiSearch from '../icons/fi/Search';
import GoHomeFill from '../icons/go/GoHomeFill';
import FaUserCircle from '../icons/fa/FaUserCircle';

export default function ActionBar() 
{
    return (
        <View style={actionBarStyles.container}>
            <TouchableOpacity style={actionBarStyles.iconButton}>
                <GoHomeFill style={actionBarStyles.icon} color={"white"}/>
            </TouchableOpacity>
            <TouchableOpacity style={actionBarStyles.iconButton}>
                <FiSearch style={actionBarStyles.icon} color={"white"}/>
            </TouchableOpacity>
            <TouchableOpacity style={actionBarStyles.iconButton}>
                <AddR style={actionBarStyles.icon} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity style={actionBarStyles.iconButton}>
                <Reels style={actionBarStyles.icon} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity style={actionBarStyles.iconButton}>
                <FaUserCircle style={actionBarStyles.icon} color={'white'}/>
            </TouchableOpacity>
        </View>
    )
}

const actionBarStyles = StyleSheet.create({
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
    iconButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        width: 28,
        height: 28,
    },
    icon: {
        width: '100%',
        height: '100%',
    }
});