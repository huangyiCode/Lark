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

import Address from './address';
import Utils from '../util';
import Services from '../service';


export default class ItemBlock extends Component {


    constructor(props) {
        super(props);
    }

    /**
     *
     * on press and jump the Address pager.
     */
    loadPager = function () {

        // let path = Services.host + Services.getUser;
        //
        let {navigate} = this.props.navigation;
        //
        // Utils.post(path, '', function (data) {
        //
        //     /**
        //      * we must transfer to next pager.
        //      */
        //     // if(data.status){
        //         //暂时传递假数据
        //         navigate('address',{name:'Mike'});
        //     // }
        //
        // });

        let fetchOptions = {
            method: 'GET',
            headers: {
                'Authorization': "APPCODE 4a15a1cc56554d43b86620378ee9fe8f",
                'Content': 'application/json'
            }
        };
        fetch('http://toutiao-ali.juheapi.com/toutiao/index?type=guonei', fetchOptions)
            .then(response => response.json())
            .then(responseText => {
                navigate('address',responseText.result.data)
            })
            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });

    };


    render() {

        return (
            <TouchableOpacity style={[this.props.style, {
                backgroundColor: this.props.color,
                flexDirection: 'column',
                marginLeft: 10,
                borderRadius: 10,
                opacity: 0.7
            }]} key={this.props.id} onPress={() => {
                this.loadPager();
            }}>
                <View style={style.textContainer}>
                    <Text style={style.topText}>
                        {this.props.title}
                    </Text>
                </View>

                <View style={style.textContainer}>
                    <Text style={style.bottomText}>
                        {this.props.partment}
                    </Text>
                </View>

            </TouchableOpacity>

        )
    }


}

const style = StyleSheet.create({

    topText: {
        color: 'white',
        fontSize: 20

    },
    bottomText: {
        color: 'white',
        fontSize: 10
    }, textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});


/**
 *
 *  define att.
 */
// const propTypes = {
//     title: PropTypes.title,
//     partment: PropTypes.partment,
//     color: PropTypes.color,
//     key: PropTypes.key,
// };
// const style_text = StyleSheet.create({
//
//     text: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//
//     }
//
//
// });
//
// const textContainer = () => {
//
//     return {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     };
// };
//

//

//
// const ItemBlock = ({style, title, partment, color, id}) => {
//
//
//     /**
//      * 需要增加触摸事件 回调函数
//      */
//     return (
//
//         <TouchableOpacity style={[style, {
//             backgroundColor: color,
//             flexDirection: 'column',
//             marginLeft: 10,
//             borderRadius: 10,
//             opacity: 0.7
//         }]} key={id} onPress={loadPager}>
//
//
//             <View style={textContainer()}>
//                 <Text style={styleText.topText}>
//                     {title}
//                 </Text>
//             </View>
//
//             <View style={textContainer()}>
//                 <Text style={styleText.bottomText}>
//                     {partment}
//                 </Text>
//             </View>
//
//         </TouchableOpacity>
//
//
//     );
//
// };
//
//
// export default ItemBlock;




