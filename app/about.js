
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
        title: '关于'
    };


    render(){
        return (

            <Text>ABOUT</Text>

        )
    }



}