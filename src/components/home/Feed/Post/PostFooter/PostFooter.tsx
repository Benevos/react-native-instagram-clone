import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PFoInteractions from './PFoInteractions/PFoInteractions'
import PFoLikes from './PFoLikes/PFoLikes';
import PFoDescription from './PFoDescription/PFoDescription';
import PFoComments from './PFoComments/PFoComments';
import PFoDate from './PFoDate';

export default function PostFooter() 
{ 
  return (
    <View style={styles.container}>
        <PFoInteractions/>

        <PFoLikes/>

        <PFoDescription/>

        <PFoComments/>

        <PFoDate/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {   
        width: '100%',
    },
})