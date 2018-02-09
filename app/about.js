
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, BackHandler
} from 'react-native';



export default class About extends Component{
    static navigationOptions = {
        title: '关于',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/ic_launcher.png')}
                   style={{width :40,height:40}}/>
        )
    };
    render(){



        return (

            <Text>ABOUT</Text>

        )
    }



}