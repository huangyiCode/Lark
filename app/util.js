import React from 'react';

let Dimensions = require('Dimensions');

let {PixelRatio} = React;


let Util = {

    // 单位像素
    // pixel:1/PixelRatio.get(),
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    //POST请求
    post: function (url, data, callback) {
        let fetchOptions = {
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
            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    },
    //GET
    get: function (url, data, callback) {
        let fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content': 'application/json'
            },
            body: JSON.stringify(data)
        };
        let requestUrl=url+data;
        fetch(requestUrl, fetchOptions)
            .then(response => response.text())
            .then(responseText => {
                callback(JSON.parse(responseText));
            })
            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    },
    //key
    key: 'HSHHSGSGGSTWSYUSUWSHWBS-REACT-NATIVE'

};


module.exports = Util;
