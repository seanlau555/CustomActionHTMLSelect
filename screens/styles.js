import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { size, font, spacing, color } from '../common/theme';
const windowSize = Dimensions.get('window');

export function fontStyles(fontSize = 18) {
  const quoteStyle = fontSize + 1;
  const lineHeight = fontSize * 1.58;
  const tagsStyles = {
    blockquote: {
      color: color.text,
      fontSize: quoteStyle,
      lineHeight: quoteStyle * 1.58,
      fontWeight: '700',
      borderLeftWidth: 5,
      borderColor: 'green',
      paddingHorizontal: 16,
      marginHorizontal: -24
    },
    i: { textAlign: 'left', color: color.text },
    ul: {
      fontSize,
      lineHeight,
      marginLeft: -16,
      marginVertical: spacing.small,
      textAlign: 'left',
      color: color.text
    },
    p: {
      fontSize,
      lineHeight,
      marginVertical: spacing.small,
      textAlign: 'left',
      color: color.text
    },
    ol: { fontSize, lineHeight, textAlign: 'left', color: color.text },
    h1: {
      fontSize: 32,
      lineHeight: 45,
      fontWeight: '500',
      textAlign: 'left',
      marginBottom: 24,
      color: color.text
    },
    h2: {
      fontSize: 32,
      lineHeight: 45,
      fontWeight: '500',
      textAlign: 'left',
      marginBottom: 16,
      color: color.text
    },
    h3: {
      fontSize: 24,
      lineHeight: 36,
      fontWeight: '500',
      textAlign: 'left',
      marginBottom: 8,
      color: color.text
    }
  };
  const listPrefix = {
    ol: (htmlAttribs, children, convertedCSSStyles, passProps) => {
      return (
        <Text
          style={{
            marginRight: 4,
            color: color.text,
            fontSize,
            lineHeight
          }}
        >
          {passProps.index + 1 + '. '}
        </Text>
      );
    },
    ul: (htmlAttribs, children, convertedCSSStyles, passProps) => {
      return (
        <Text
          style={{
            color: color.text,
            fontSize,
            lineHeight,
            marginRight: spacing.small
          }}
        >
          •
        </Text>
      );
    },
    li: (htmlAttribs, children, convertedCSSStyles, passProps) => {
      return <Text style={{ marginRight: 4, color: color.text, fontSize }} />;
    }
  };
  return { tagsStyles, listPrefix };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loadingContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  info: {
    ...font.small,
    color: 'white',
    paddingHorizontal: size.horizontalPadding,
    marginTop: 8,
    marginBottom: size.verticalPadding - 8
  },
  divider: {
    marginLeft: 24,
    marginTop: 8,
    marginBottom: 32 + 8,
    backgroundColor: 'white',
    borderRadius: 2
    // width: windowSize.width * 0.15,
    // height: 4
  },

  button: {
    marginTop: spacing.base + 8,
    width: windowSize.width - spacing.base * 2 - 32 - 16 - 8,
    height: 50,
    fontSize: 17,
    borderRadius: spacing.tiny,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
