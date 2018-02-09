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
import {StackNavigator, TabNavigator} from 'react-navigation'
import Login from './app/login'
import Welcome from './app/welcome'
import Home from './app/home';
import About from './app/about';
import Message from './app/message';
import Manager from './app/manager';

/**
 *
 * we should config the Home route in this.
 *
 *
 */
const HomeRoute = TabNavigator(
    {
        Home: { screen: Home },
        About: { screen: About },
        Message: { screen: Message },
        Manager: { screen: Manager }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
);


/**
 *
 *  in this js file we could config the default StackNavigator for application.
 *
 */

const NavApp = StackNavigator({
    welcome: {screen: Welcome},
    login: {screen: Login},
    homeRoute: {screen: HomeRoute}

}, {
    //default display pager
    initialRouteName: 'welcome',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#4db6ac'
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            alignSelf:'center'
        },
        headerTintColor: '#fff',
        headerLeft:null
    }
});

export default NavApp


