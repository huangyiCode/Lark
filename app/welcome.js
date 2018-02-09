import React, { Component } from 'react';
import {Image,StyleSheet,View,Text} from 'react-native'



export default class Welcome extends Component{




    componentDidMount(){
        const { navigate } = this.props.navigation;
        /*
        * 进行延时操作,三秒后自动进行跳转
        */
        setTimeout(() =>{
            navigate('homeRoute');
            clearTimeout(this);
        },3000);
    }


    render(){

        return (
            <View style={style.container}>
                <Image style={style.image} source={require('./img/ic_launcher.png')}/>
                <Text>Welcome!</Text>
            </View>

        );
    }

}

Welcome.navigationOptions=({navigation})=>{

    return {
        header:null
    }
};



const  style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    image:{

    }

});