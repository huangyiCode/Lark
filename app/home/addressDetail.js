import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, BackHandler, FlatList,
    WebView
} from 'react-native';


export default class AddressDetail extends Component {

    static navigationOptions = {
        title: 'AddressDetail'
    };

    render() {

        let url=this.props.navigation.state.params;

        return (
            <WebView
                source={{uri: url}}
                style={style.container}/>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1
    }

});