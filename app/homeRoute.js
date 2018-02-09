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


import TabNavigator from 'react-native-tab-navigator';
import Home from './home';
import About from './about';
import Message from './message';
import Manager from './manager';

/*
 *
 *  Home 界面逻辑
 *
 */

class HomeRoute extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        ),
        headerTitleStyle:{
            alignSelf:'center'
        },
        headerLeft:null
    };

    constructor(props){
        super(props);
        this.state={
            selectIndex:0
        }
    }

    /**
     *  Get render Item
     * @param title
     * @param icon
     * @param selectIcon
     * @param index
     * @param Container
     * @returns {*}
     */
    renderTabNavigatorItm(title,icon,selectIcon,index,Container){


        return (
            <TabNavigator.Item
                title={title}
                selected={index === this.state.selectIndex}
                renderIcon={() => <Image style={style.image} source={icon}/>}
                renderSelectedIcon={()=><Image style={style.image} source={selectIcon}/>}
                onPress={
                    ()=>{
                          this.setState({ selectIndex: index});
                         }


                }
                titleStyle={{color:'black'}}
                selectedTitleStyle={{color:'#4db6ac'}}
            >
                <Container {...this.props} />

            </TabNavigator.Item>
        );
    }


    render() {
        return (

         <TabNavigator>
             {this.renderTabNavigatorItm('首页',require('./img/ic_launcher.png'),require('./img/ic_launcher.png'),0,Home)}
             {this.renderTabNavigatorItm('公告',require('./img/ic_launcher.png'),require('./img/ic_launcher.png'),1,Message)}
             {this.renderTabNavigatorItm('管理',require('./img/ic_launcher.png'),require('./img/ic_launcher.png'),2,Manager)}
             {this.renderTabNavigatorItm('关于',require('./img/ic_launcher.png'),require('./img/ic_launcher.png'),3,About)}
        </TabNavigator>)


    }

}

const style=StyleSheet.create({
    image:{
        width:30,
        height:30
    }



});


export default HomeRoute;