import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PFoHeartButton from './PFoHeartButton'
import PFoCommentButton from './PFoCommentButton'
import PFoShareButton from './PFoShareButton'
import PFoSaveButton from './PFoSaveButton'

interface pFoInteractionsType {
    liked?: boolean,
    saved?: boolean,
}

export default function PFoInteractions(props: pFoInteractionsType) 
{
    const { liked, saved } = props;

    return (
        <View style={styles.interactions}>
            <View style={styles.reactions}>
                <PFoHeartButton liked={liked}/>
                <PFoCommentButton/>
                <PFoShareButton/>
            </View>

            <PFoSaveButton saved={saved}/>
      </View>
    )
}

const styles = StyleSheet.create({
    interactions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reactions: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        gap: 4,
    },

})