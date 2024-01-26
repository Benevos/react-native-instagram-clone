import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PFoInteractions from './PFoInteractions/PFoInteractions'
import PFoLikes from './PFoLikes/PFoLikes';
import PFoDescription from './PFoDescription/PFoDescription';

interface postFooterType {
  username: string,
  liked?: boolean,
  saved?: boolean,
  likes?: number,
  description?: string,
  followdLikes?: (string)[],
}

export default function PostFooter(props: postFooterType) 
{
  const { liked, saved, likes, username } = props;
  
  return (
    <View style={styles.container}>
        <PFoInteractions liked={liked} saved={saved}/>

        <PFoLikes likes={likes}/>


      <PFoDescription username={username}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {   
        width: '100%',
    },
})