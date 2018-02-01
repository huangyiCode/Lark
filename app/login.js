
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class Login extends Component{

    constructor(props){
        super();
        this.state={
            account:"",
            password:""
        }
    }

    onAccountChanged(text){

    }

    onPasswordChanged(text){

    }

    onLogin(){

    }


    /*
     * render the login layout
     */
    render(){

        const text='haha';
        return (

            <View style={style.container}>

                <View style={{flexDirection:'row',justifyContent:'center'}}>

                    <Text style={style.text}>邮箱</Text>
                    <TextInput style={style.input}
                               onChangeText={text =>{
                                   this.onAccountChanged(text);
                               }}
                    />

                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>

                <Text style={style.text}>密码</Text>
                <TextInput style={style.input}
                           onChangeText={text =>{
                               this.onPasswordChanged(text);
                           }}
                />

                </View>

                <TouchableOpacity onPress={()=>{
                    this.onLogin();
                }}/>

            </View>


        );

    }

}


const style=StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    input:{
       marginLeft:20,
       borderWidth:1,
       height:45,
       borderColor:'#000',
       borderRadius:2,
       marginTop:10
    },
    button:{
        backgroundColor:'#00f',
        padding:5
    },
    text:{

    },
    img:{


    }




});
