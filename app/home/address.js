import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, BackHandler, FlatList
} from 'react-native';

var {NativeModules} = require('react-native');
var rnToastModel = NativeModules.RNToastModel;

export default class Address extends Component {

    static navigationOptions = {
        title: 'Address'
    };

    _separator = () => {
        return <View style={{height: 1, backgroundColor: '#dcdcdc'}}/>;
    };

    _itemClick = ({item}) => {
        rnToastModel.showLong("click", (msg) => {
            alert(msg);
        });
        this.props.navigation.navigate('addressDetail', item.url);
    };

    render() {

        let data = this.props.navigation.state.params;


        let renderItem = ({item}) => {
            return (
                <TouchableOpacity style={style.itemContainer} onPress={() => {
                    this._itemClick({item})
                }}>
                    <View style={style.textContent}>
                        <View style={style.textContainer}><Text style={style.titleText}>{item.title}</Text></View>
                        <View style={style.textContainer}><Text style={style.dateAndTypeText}>{item.date}</Text></View>
                    </View>
                    <Image style={style.image} source={{uri: item.thumbnail_pic_s}}/>
                </TouchableOpacity>)
        };


        return (
            <FlatList style={style.container} data={data}
                      renderItem={({item}) =>
                          renderItem({item})
                      }
                      ItemSeparatorComponent={this._separator}>

            </FlatList>
        );

    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, itemContainer: {
        padding: 10,
        height: 90,
        flexDirection: 'row'
    }, textContent: {
        flex: 1,
        flexDirection: 'column'
    }, image: {
        marginLeft: 10,
        width: 70,
        height: 70,
        alignItems: 'center',
    }, textContainer: {
        flex: 1,
        justifyContent: 'center'
    }, dateAndTypeText: {
        color: '#dcdcdc'
    }, titleText: {
        color: 'black',
    }

});