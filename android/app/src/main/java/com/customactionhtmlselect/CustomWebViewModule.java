package com.customactionhtmlselect;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.reactnativecommunity.webview.RNCWebViewModule;

import java.util.logging.Handler;

@ReactModule(name = CustomWebViewModule.REACT_NAME)
public class CustomWebViewModule extends RNCWebViewModule {
    static final String REACT_NAME = "CustomWebView";

    private final ReactApplicationContext mContext;
    private Handler mHandler;

    CustomWebViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }
}