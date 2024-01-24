import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SvgProps } from 'react-native-svg/lib/typescript/ReactNativeSVG';

interface actionBarIconButtonType {
    Icon: (props: SvgProps) => React.JSX.Element,
}

export default function AbIconButton(props: actionBarIconButtonType) 
{
    const { Icon } = props;
    
    return (
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} color={"white"}/>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height: '100%',
    },
    iconContainer: {
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
})