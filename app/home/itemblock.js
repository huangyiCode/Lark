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
import PropTypes from 'prop-types';

/**
 *
 *  define att.
 */
const propTypes = {
    title: PropTypes.title,
    partment: PropTypes.partment,
    color: PropTypes.color
};
const style_text = StyleSheet.create({

    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }


});

const textStyle = () => {

    return {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    };
};


const ItemBlock = ({style, tittle, partment, color}) => {


    /**
     * 需要增加触摸事件 回调函数
     */

    return (
        <View style={[style, {backgroundColor: color, flexDirection: 'column'}]}>
            <View style={textStyle()}>
                <Text>
                    {tittle}
                    </Text>
            </View>

            <View style={textStyle()}>
                <Text>
                    {partment}
                    </Text>
            </View>


        </View>

    );

};


export default ItemBlock;




