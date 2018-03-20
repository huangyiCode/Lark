package com.lark;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Mike on 24/2/18.
 */

public class RNToastModel extends ReactContextBaseJavaModule {

    public RNToastModel(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNToastModel";
    }


    @ReactMethod
    public void showLong(String msg, Callback callback) {
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_LONG).show();
        callback.invoke("Native showLong finish");
    }

    @ReactMethod
    public void showShort(String msg, Callback callback) {
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_SHORT).show();
        callback.invoke("Native showShort finish");
    }
}
