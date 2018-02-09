

import React from 'react';
var Dimensions =require('Dimensions');

var {PixelRatio} =React;


var Util={

    // 单位像素
    // pixel:1/PixelRatio.get(),
    //屏幕尺寸
    size:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    //POST请求
    post:function (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOptions)
            .then(response => response.text())
            .then(responseText => {
                callback(JSON.parse(responseText));
            })
            .catch((error)=>{
                console.log("Api call error");
                alert(error.message);
            });
    },
    //key
    key:'THE KET MAYBE IN USE'

};


module.exports=Util;
