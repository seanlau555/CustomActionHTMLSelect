package com.customactionhtmlselect;

import android.webkit.WebView;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.reactnativecommunity.webview.RNCWebViewManager;

import java.util.Map;


@ReactModule(name = CustomWebViewManager.REACT_CLASS)
public class CustomWebViewManager extends RNCWebViewManager {
    /* This name must match what we're referring to in JS */
    protected static final String REACT_CLASS = "RCTCustomWebView";

    protected static class CustomWebViewClient extends RNCWebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            boolean shouldOverride = super.shouldOverrideUrlLoading(view, url);
            String finalUrl = ((CustomWebView) view).getFinalUrl();

            if (!shouldOverride && url != null && finalUrl != null && new String(url).equals(finalUrl)) {
                final WritableMap params = Arguments.createMap();
                dispatchEvent(view, new NavigationCompletedEvent(view.getId(), params));
            }

            return shouldOverride;
        }
    }

    @Override
    public @Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();
        if (export == null) {
            export = MapBuilder.newHashMap();
        }
        export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));
        return export;
    }


    @Override
    protected RNCWebView createRNCWebViewInstance(ThemedReactContext reactContext) {
        return new CustomWebView(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {
        view.setWebViewClient(new CustomWebViewClient());
    }

    protected static class CustomWebView extends RNCWebView {
        public CustomWebView(ThemedReactContext reactContext) {
            super(reactContext);
        }

        protected @Nullable
        String mFinalUrl;

        public void setFinalUrl(String url) {
            mFinalUrl = url;
        }

        public String getFinalUrl() {
            return mFinalUrl;
        }
    }

    @ReactProp(name = "finalUrl")
    public void setFinalUrl(WebView view, String url) {
        ((CustomWebView) view).setFinalUrl(url);
    }

}