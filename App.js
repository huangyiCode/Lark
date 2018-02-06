/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
/*
 *
 * we should use it to change screen.
 */
import {StackNavigator} from 'react-navigation'
import Login from './app/login'
import Welcome from './app/welcome'

/**
 *
 *  in this js file we could config the default StackNavigator for application.
 *
 */

const NavApp = StackNavigator({
    //config route
    welcome: {screen: Welcome},
    login: {screen: Login}
}, {
    //default display pager
    initialRouteName:'welcome',
    navigationOptions:({navigation, screenProps})=>({
        head:null,
        headerStyle: {
            backgroundColor: '#4db6ac',
        },
        headerTintColor: 'white',
        gesturesEnabled: true,
    })
});

export default NavApp


