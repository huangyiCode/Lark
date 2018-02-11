
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

import Utils from './util';
import Service from './service';
import ItemBlock from './home/itemblock'
import Icon from 'react-native-vector-icons/Ionicons';



export default class Home extends Component{

    static navigationOptions = {
        title: '首页',
        tabBarIcon:({tintColor})=>(
                <Icon name="md-home" size={30} color={tintColor}/>

            )
    };

    getInitialState(){

      let width=Math.floor((Utils.size.width-20-50)/4);
      let items=[
          {
          title:'研发',
          partment:'框架研发',
          color:'#126aff'

          },
          {
              title:'研发',
              partment:'BU研发',
              color:'#ffd600'

          },{
              title:'产品',
              partment:'公共产品',
              color:'#f80728'
          },{
              title:'产品',
              partment:'BU产品',
              color:'#05c147'
          },{

              title:'产品',
              partment:'启明星',
              color:'#ff4eb9'
          },{

              title:'项目',
              partment:'项目管理',
              color:'#ee810d'
          }
      ];

      return {
          items:items,
          width:width
      };

    }



    componentDidMount(){



    }

    /**
     *
     * we could load the constants in this pager
     *
     */
    render(){

        let items1=[];
        let items2=[];
        // let items=this.state.items;




        return (

             <ItemBlock tittle='aa' partment='bb' style={{width:50,height:50}} color='#f0f'/>


        )
    }



}
const style=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',


    },
    card:{
        backgroundColor:'red',
        borderRadius:10,
        flex:1,
        margin:10,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }


});