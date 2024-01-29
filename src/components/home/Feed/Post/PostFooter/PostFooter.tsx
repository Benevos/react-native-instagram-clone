import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PFoInteractions from './PFoInteractions/PFoInteractions'
import PFoLikes from './PFoLikes/PFoLikes';
import PFoDescription from './PFoDescription/PFoDescription';
import PFoComments from './PFoComments/PFoComments';
import PFoDate from './PFoDate';
import { usePostContext } from '../../../../../context/PostContext';

export default function PostFooter() 
{ 
  const { reactions } = usePostContext();

  const [reactionsCounter, setReactionsCounter] = useState(reactions ?  reactions : 0);

  return (
    <View style={styles.container}>

        <PFoInteractions setReactionsCounter={setReactionsCounter}/>

        <PFoLikes reactionsCounter={reactionsCounter}/>

        <PFoDescription />

        <PFoComments/>

        <PFoDate/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        zIndex: 5,
    },
})