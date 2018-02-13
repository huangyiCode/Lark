
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



export default class Manager extends Component{

    static navigationOptions = {
        title: '管理',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-magnet" size={30} color={tintColor}/>

        )
    };

    render(){

        return (

            <Text>MANAGER</Text>

        )
    }



}