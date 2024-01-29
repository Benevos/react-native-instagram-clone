import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
  Pressable,
} from 'react-native';

import uuid from 'react-native-uuid';

import * as Progress from 'react-native-progress';
import getRandomNumber from '../utils/get-random-number';
import AiOutlineHeart from '../components/icons/ai/AiOutlineHeart';
import PiPaperPlaneTilt from '../components/icons/pi/PiPaperPlaneTilt';
import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

//! THIS SCREEN WAS NOT PLANNED, ITS CODE WAS RUSHED
function StoriesScreen() 
{
    const storiesNumber = useMemo(() => getRandomNumber(2, 5), []);

    const progressInitalState = [...Array(storiesNumber).keys()].map(element => 0);
    const [progessControllers, setProgressControllers] = useState<number[]>(progressInitalState)
    const [currentStory, setCurrentStrory] = useState(0);
    
    const urisMemo = useMemo(() => 
    {   
        const uris = [...Array(storiesNumber).keys()].map(elem => `https://picsum.photos/300/530/?random&t="${getRandomNumber(1234312,3241234321)}"`)
        console.log(uris)
        return uris

    }, [storiesNumber])

    const controlStory = useCallback(() =>
    {
        if(currentStory >= storiesNumber) { return; }

        const newProgressState = [...progessControllers];
        newProgressState[currentStory] = newProgressState[currentStory] + 0.0025;

        if(progessControllers[currentStory] >= 1) 
        {
            setCurrentStrory(prev => prev+1)
            return;
        }

        setProgressControllers(newProgressState);

    }, [progessControllers, currentStory, storiesNumber])

    const handleNextPressIn = () => 
    {
        const newProgressState = [...progessControllers];
        newProgressState[currentStory] = 1;
        setProgressControllers(newProgressState);

        if(currentStory >= storiesNumber-1) { return; }
        setCurrentStrory(currentStory+1)
    }

    const handlePrevPressIn = () => 
    {
        
        if(currentStory <= 0) 
        { 
            const newProgressState = [...progessControllers];
            newProgressState[currentStory] = 0;
            setProgressControllers(newProgressState);
            return; 
        }

        const newProgressState = [...progessControllers];
        newProgressState[currentStory] = 0;
        newProgressState[currentStory-1] = 0;
        setProgressControllers(newProgressState);

        console.log('no es')
        setCurrentStrory(prev => prev-1)
    }

    useEffect(() => {
        const changeStoryProgess = setInterval(controlStory, 20)

        return () => {
            clearInterval(changeStoryProgess);
        }

    }, [controlStory])


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar/>

            <View style={styles.container}>

                <View style={{position: 'absolute', width: windowWidth, height: windowWidth*100/56,}}>
                    <Image style={{width: windowWidth, height: '100%'}} resizeMode="contain" 
                    source={{uri: urisMemo[currentStory]}}/>
                </View>

                <View style={styles.header}>
                    <View style={styles.storiesProgressContainer}>

                        { [...Array(storiesNumber).keys()].map((element, index) => 
                            <Progress.Bar
                                height={2}
                                style={{flexGrow: 1, height: 2}}
                                borderWidth={0} 
                                color="white"
                                unfilledColor="#b5b5b5"
                                key={uuid.v4() as string} 
                                width={windowWidth/storiesNumber-5} 
                                progress={progessControllers[index]}/>) }
                        
                    </View>

                    <View 
                        style={{paddingTop: 15, paddingLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <View>
                            <Image style={{width: 38, height: 38, borderRadius: 999}} 
                            source={{uri: 'https://xsgames.co/randomusers/assets/avatars/female/46.jpg'}}/>
                        </View>

                        <Text style={{color: 'white', fontWeight: '500'}}>Username</Text> 

                        <Text>19 h</Text> 
                    </View>
                    
                </View>

                <View style={{position: 'relative', flexGrow: 1}}>
                        <Pressable  onPressIn={handlePrevPressIn}
                            style={{position: 'absolute', height: '100%', width: '50%'}}/>

                        <Pressable onPressIn={handleNextPressIn} 
                            style={{position: 'absolute', height: '100%', width: '50%', right: 0}}/>
                </View>

                <View 
                    style={{height: 65, width: '100%',}}>
                        <View style={{width: '100%', height: '100%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flexGrow: 1, paddingVertical: 7, paddingHorizontal: 8}}>
                                <View style={{borderWidth: 1, borderRadius: 999, flexGrow: 1, borderColor: 'white'}}>
                                    <TextInput placeholder="Send message" placeholderTextColor={"white"}/>
                                </View>
                            </View>
                            
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                                <View style={{width: 28, height: 28, flexGrow: 1}}>
                                    <AiOutlineHeart color={"white"}/>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                                <View style={{width: 28, height: 28, flexGrow: 1}}>
                                    <PiPaperPlaneTilt color={"white"}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>

                
            </View>
            
            
            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 7,
    paddingTop: 7,
  },
  storiesProgressContainer: {
    flexGrow: 1,
    width: '100%',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
  },

});

export default StoriesScreen;