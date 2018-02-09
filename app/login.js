
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,BackHandler
} from 'react-native';

import Util from "./util";
import Service from './service';

//Regix for email
const patternEmail=new RegExp(".{6,10}");



export default class Login extends Component{

    static navigationOptions = {
        title: '登录',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        ),
        headerTitleStyle:{
            alignSelf:'center'
        },
        headerLeft:null
    };

    constructor(props){
        super();
        this.state={
            account:"",
            password:""
        };
        BackHandler.addEventListener('hardwareBackPress',  ()=> {
            /*
             * 登录界面使用了返回按键
             */
            return true;
        });
    }

    onAccountChanged(text){
        this.setState({
            account:text
        });
    }

    onPasswordChanged(text){
        this.setState({
            password:text
        });
    }

    onLogin(){
        if(!this.state.account||!this.state.password){
            alert("账号/密码不能为空!");
        }else{
            // pattern format
            if(!patternEmail.test(this.state.account)){
                alert("邮箱格式错误!");
                return;
            }
            //request Login
            let path=Service.host+Service.login;
            let email=this.state.account;
            let password=this.state.password;
            //it will be showing loading...
            Util.post(path,{email:email,password:password,deviceId:11},function (data){

                 alert(data.data);

            });
        }

    }


    /*
     * render the login layout
     */
    render(){
        return (

            <View style={style.base}>

                <Image source={require('./img/ic_launcher.png')}/>
                <View style={style.container}>

                    <Text style={style.text}>邮箱</Text>
                    <TextInput style={style.input}
                               onChangeText={text =>{
                                   this.onAccountChanged(text);
                               }}
                               placeholder="Account"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                    />

                </View>

                <View style={style.container}>

                <Text style={style.text}>密码</Text>
                <TextInput style={style.input}
                           onChangeText={text =>{
                               this.onPasswordChanged(text);
                           }}
                           placeholder="password"
                />

                </View>

                <TouchableOpacity onPress={()=>{
                    this.onLogin();
                }} style={style.button}>
                    <Text>登录</Text>
                </TouchableOpacity>

            </View>


        );

    }

}

// Login.navigationOptions=({navigation})=>{
//
//     return {
//         headerTitle:'登录',
//         headerLeft:null,
//         headerTitleStyle:{
//             alignSelf:'center'
//         }
//
//     }


const style=StyleSheet.create({
    base:{
        flexDirection:'column',
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
       marginLeft:20,
       borderWidth:1,
       height:45,
       borderColor:'#000',
       borderRadius:2,
       marginTop:10,
       width:200
    },
    button:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        width:50,
        padding:5,
        backgroundColor:'#D4D4D4'
    },
    text:{

    },
    img:{


    }
});
