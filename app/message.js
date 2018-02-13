
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

import Icon from 'react-native-vector-icons/Ionicons';


export default class Message extends Component{

    static navigationOptions = {
        title: '公告',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-home" size={30} color={tintColor}/>

        )
    };

    render(){

        return (

            <Text>MESSAHE</Text>

        )
    }



}