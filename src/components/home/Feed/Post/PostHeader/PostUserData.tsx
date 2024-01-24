/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

interface postUserDataType {
  userPictureUri?: string,
  username?: string,
}

export default function PostUserData(props: postUserDataType) 
{
  const { userPictureUri, username } = props;

  const [usernameState, setUsernameState] = useState('');

  const getRandomNumber = (min: number, max: number) => {return Math.random() * (max - min) + min;}

  const number = useMemo(() => parseInt(getRandomNumber(1,78).toFixed(0)), []);

  const getRandomUsername = async () =>
  {
    if(username) { setUsernameState(username); }
    const res = await fetch('https://dummyjson.com/users/'+number);
    const data = await res.json();
    setUsernameState(data.username);
  }

  const userPictureUriMemo = useMemo(() => 
  {
      if(userPictureUri) { return userPictureUri; }
      const randomUri = `https://xsgames.co/randomusers/assets/avatars/${number % 2 === 0 ? 'male' : 'female'}/${number}.jpg`;
      return randomUri;
  }, [number, userPictureUri])


  useEffect(() => 
  {
    getRandomUsername();
  }, [])

  return (
    <View style={styles.userData}>
        <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={{uri: userPictureUriMemo}}/>
        </View>

        <Text style={styles.username}>{usernameState}</Text>
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