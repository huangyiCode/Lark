import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, BackHandler,
    ScrollView
} from 'react-native';

import Utils from './util';
import Service from './service';
import ItemBlock from './home/itemblock'
import Icon from 'react-native-vector-icons/Ionicons';


export default class Home extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-home" size={30} color={tintColor}/>

        )
    };

    getInitialData() {

        let width = Math.floor((Utils.size.width - 20 - 50) / 4);
        let items = [
            {
                id: 1,
                title: '研发',
                partment: '框架研发',
                color: '#126aff'

            },
            {
                id: 2,
                title: '研发',
                partment: 'BU研发',
                color: '#ffd600'

            }, {
                id: 3,
                title: '产品',
                partment: '公共产品',
                color: '#f80728'
            }, {
                id: 4,
                title: '产品',
                partment: 'BU产品',
                color: '#05c147'
            }, {
                id: 5,
                title: '产品',
                partment: '启明星',
                color: '#ff4eb9'
            }, {
                id: 6,
                title: '项目',
                partment: '项目管理',
                color: '#ee810d'
            }
        ];

        return {
            items: items,
            width: width
        };

    }

    /**
     *
     * we could load the constants in this pager
     *
     */
    render() {
        let items1 = [];
        let items2 = [];
        let items = this.getInitialData().items;
        let blockWidth = this.getInitialData().width;

        let i = 0;

        for (; i < 4; i++) {
            items1.push(<ItemBlock navigation={this.props.navigation} key={i}
                                   id={items[i].id} title={items[i].title} partment={items[i].partment}
                                   style={{width: blockWidth, height: blockWidth}} color={items[i].color}/>);
        }

        for (; i < items.length; i++) {
            items2.push(<ItemBlock navigation={this.props.navigation} key={i} id={items[i].id} title={items[i].title}
                                   partment={items[i].partment}
                                   style={{width: blockWidth, height: blockWidth}} color={items[i].color}/>);
        }

        return (

            <ScrollView style={style.container}>

                <View style={style.row}>
                    {items1}
                </View>

                <View style={style.row}>
                    {items2}
                </View>

            </ScrollView>

        )
    }


}
const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },


    row: {
        flexDirection: 'row',
        marginBottom: 20
    }


});