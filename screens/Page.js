'user strict';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import { spacing } from '../common/theme';
import HTML from 'react-native-render-html';
import styles from './styles';
const width = Dimensions.get('window').width;
const cardWidth = width;
const cardHeight = cardWidth * (3 / 5);

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

class Page extends Component {
  onScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      this.props.showSnackBar(true);
    } else this.props.showSnackBar(false);
  };
  render() {
    const { html, pageNumber } = this.props;
    let pageOneStyle = {};
    let extraStyle = {};
    let plan = null;
    if (pageNumber === 1) {
      pageOneStyle = {
        marginTop: -16,
        paddingVertical: 8
      };
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          onScroll={this.onScroll}
          scrollEventThrottle={400}
          style={{
            flex: 1,
            backgroundColor: 'white'
          }}
        >
          <View
            style={[
              {
                backgroundColor: 'white',
                position: 'relative',
                width: width,
                paddingHorizontal: spacing.base,
                paddingVertical: spacing.small,
                paddingBottom: spacing.large + spacing.small,
                ...pageOneStyle
              },
              extraStyle
            ]}
          >
            <HTML
              html={html}
              tagsStyles={this.props.getCurrentStyle().tagsStyles}
              listsPrefixesRenderers={this.props.getCurrentStyle().listPrefix}
              imagesMaxWidth={width - spacing.base * 2}
            />
          </View>
          {plan}
        </ScrollView>
      </View>
    );
  }
}

export default Page;
