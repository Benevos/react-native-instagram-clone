import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { usePostContext } from '../../../../../context/PostContext';


export default function PostUserData() 
{
  const { username } = usePostContext();
 
  const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0));}

  const userPictureUriMemo = useMemo(() => 
  {
      const number = getRandomNumber(1, 78); 
      const randomUri = `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`;
      return randomUri;
  }, [])

  return (
    <View style={styles.userData}>
        <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={{uri: userPictureUriMemo}}/>
        </View>

        <Text style={styles.username}>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userData: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
  },
  profilePictureContainer: {
      width: 33,
      height: 33,
      borderWidth: 1,
      borderColor: 'rgba(126,126,126,0.5)',
      borderRadius: 999,
  },
  profilePicture: {
      width: '100%',
      height: '100%',
      borderRadius: 999,
  },
  username: {
      color: 'white',
      fontWeight: '500',
      marginLeft: 13,
  },
});