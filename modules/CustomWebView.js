import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { WebView } from 'react-native-webview';

export default class CustomWebView extends Component {
  // static propTypes = {
  //   ...WebView.propTypes,
  //   finalUrl: PropTypes.string,
  //   onNavigationCompleted: PropTypes.func,
  // };

  static defaultProps = {
    finalUrl: 'about:blank',
  };

  _onNavigationCompleted = (event) => {
    const {onNavigationCompleted} = this.props;
    onNavigationCompleted && onNavigationCompleted(event);
  };


  render() {
    return (
      <WebView
        {...this.props}
        nativeConfig={{
          component: RCTCustomWebView,
          props: {
            finalUrl: this.props.finalUrl,
            onNavigationCompleted: this._onNavigationCompleted,
          },
        }}
      />
    );
  }
}

const RCTCustomWebView = requireNativeComponent(
  'RCTCustomWebView',
  CustomWebView,
  {
    ...WebView.extraNativeComponentConfig,
    nativeOnly: {
      onScrollToBottom: true,
    },
  }
);