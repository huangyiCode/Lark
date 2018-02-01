
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
            alert(this.state.account+"<--WRONG-->"+this.state.password);
        }else{
            alert(this.state.account+"<--OK-->"+this.state.password);
        }

    }


    /*
     * render the login layout
     */
    render(){

        const text='haha';
        return (

            <View style={style.container}>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>

                    <Text style={style.text}>邮箱</Text>
                    <TextInput style={[style.input]}
                               onChangeText={text =>{
                                   this.onAccountChanged(text);
                               }}
                               placeholder="account"
                    />

                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>

                <Text style={style.text}>密码</Text>
                <TextInput style={[style.input]}
                           onChangeText={text =>{
                               this.onPasswordChanged(text);
                           }}
                           password="true"
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


const style=StyleSheet.create({
    container:{
        justifyContent:'center',
        flexDirection:'column',
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center"
    },
    input:{
       width:200,
       marginLeft:20,
       borderWidth:1,
       height:45,
       borderColor:'#000',
       borderRadius:2,
       marginTop:10
    },
    button:{
        margin:20,
        padding:10,
        backgroundColor:"#ececec"
    },
    text:{
    },
    img:{


    }




});
