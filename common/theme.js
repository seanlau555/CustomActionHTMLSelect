import { Platform } from 'react-native'
const iOS = Platform.OS === 'ios'

const size = {
  horizontalPadding: 24,
  verticalPadding: 16,
  borderRadius: 8,

  verticalMargin: 16
}

const spacing = {
  tiny: 8,
  small: 16,
  base: 24,
  large: 48,
  xLarge: 64
}

const color = {
  theme: '#448AFF',
  text: '#222222',
  greyText: '#888888',

  white: 'white',
  transparentGrey: 'rgba(225,225,225, 0.7)',
  black: '#000',
  yellow: '#ffcc55',
  navy: '#112233',
  grey: '#445566',
  red: '#ee4455',
  orange: '#ff6655',
  green: '#00aa88',
  light: '#ffffdd',
  superLightGrey: '#eceff1',
  lightGrey: '#919496',
  blueHover: '#276EF1'
}

const shadowStyle = {
  shadowOpacity: 0.15,
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowColor: '#000',
  shadowRadius: 10,
  elevation: 2
}

const font = {
  title: {
    color: color.text,
    fontSize: 44,
    lineHeight: 56,
    fontWeight: 'bold'
  },
  title2: {
    color: color.text,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold'
  },
  title3: {
    color: color.text,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold'
  },
  large: {
    color: color.text,
    fontSize: 19,
    lineHeight: 24
  },
  regular: {
    color: color.text,
    fontSize: 17,
    lineHeight: 22
  },
  small: {
    color: color.text,
    fontSize: 14,
    lineHeight: 18
  }
}

const pageTitle = {
  ...font.title2,
  marginTop: spacing.base,
  marginRight: spacing.base,
  marginLeft: spacing.base
}

const pageSubTitle = {
  ...font.large,
  marginTop: spacing.tiny,
  marginHorizontal: spacing.base
}

const sessionTitle = {
  ...font.title2,
  marginTop: spacing.base,
  marginBottom: spacing.small,
  marginHorizontal: spacing.base
  // marginBottom: spacing.tiny
}

const textTitle = {
  color: color.text,
  fontSize: 16,
  marginBottom: iOS ? 10 : 0
}

module.exports = {
  size,
  font,
  color,
  spacing,
  shadowStyle,
  aspectRatio: 1 / 1.6,

  // format
  textTitle,
  sessionTitle,
  pageTitle,
  pageSubTitle
}
