import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoHeart from '../../../../../icons/go/GoHeart';
import { Comments } from '../../../../../../types/post';

export default function PFoPrevComment({ comment }: { comment: Comments }) 
{
    const { username, body } = comment;

    return (
        <View style={styles.prevCommentContainer}>
            <Text>
                <Text style={styles.username}>{`${username}`}</Text>

                {  body.length > 50 ?
                    <>
                        <Text style={styles.comment}>{` ${body.slice(0,50)}`}</Text>
                        <Text style={styles.suspesive}>...</Text>
                    </> :
                    <Text style={styles.comment}>{` ${body}`}</Text>
                }
            </Text>

            <TouchableOpacity style={styles.iconButton}>
                <View style={styles.iconContainer}>
                     <GoHeart color={'#b5b5b5'}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    prevCommentContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 40,
        position: 'relative',
    },
    username: {
        fontWeight: '500',
        color: 'white',
        lineHeight: 19,
    },
    comment: {
        color: '#f2f2f2',
        fontWeight: '400',
    },
    suspesive: {
        color: 'gray'
    },
    iconButton: {
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -27,
        top: -46,
    },
    iconContainer: {
        width: 13,
        height: 13    
    }
})