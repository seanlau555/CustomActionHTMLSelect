import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'

function noop () {}

const easingValues = {
  entry: Easing.bezier(0.0, 0.0, 0.2, 1),
  exit: Easing.bezier(0.4, 0.0, 1, 1)
}

const durationValues = {
  entry: 225,
  exit: 195
}

class SnackbarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      translateValue: new Animated.Value(0),
      snackHeight: 46
    }
  }

  render () {
    var extraStyle = {}
    const { isAvoidingView } = this.props
    if (!isAvoidingView) extraStyle = { position: 'absolute' }
    const slideUp = {
      transform: [
        {
          translateY: this.state.translateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1 * this.state.snackHeight, 0]
          })
        }
      ]
    }
    return (
      <Animated.View
        style={[
          styles.limit_container,
          {
            height: this.state.snackHeight,
            backgroundColor: 'transparent'
          },
          extraStyle,
          this.props.position === 'bottom'
            ? { bottom: this.props.bottom }
            : { top: this.props.bottom }
        ]}
      >
        <Animated.View style={[styles.container, slideUp]}>
          <Text style={[styles.text_msg, { color: this.props.messageColor }]}>
            {this.props.textMessage}
          </Text>
          {this.props.showButton && (
            <TouchableOpacity
              onPress={() => {
                this.props.actionHandler()
              }}
            >
              <Text>{'>'}</Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </Animated.View>
    )
  }

  componentDidMount () {
    if (this.props.visible) {
      this.state.translateValue.setValue(1)
    } else {
      this.state.translateValue.setValue(0)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.visible && !this.props.visible) {
      Animated.timing(this.state.translateValue, {
        duration: durationValues.entry,
        toValue: 1,
        easing: easingValues.entry,
        useNativeDriver: true
      }).start()
    } else if (!nextProps.visible && this.props.visible) {
      Animated.timing(this.state.translateValue, {
        duration: durationValues.exit,
        toValue: 0,
        easing: easingValues.exit,
        useNativeDriver: true
      }).start()
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.visible !== this.props.visible) {
      if (prevProps.visible) {
        this.props.distanceCallback(this.state.hideDistance + this.props.bottom)
      } else {
        this.props.distanceCallback(this.props.bottom)
      }
    }
  }
}

SnackbarComponent.defaultProps = {
  accentColor: 'orange',
  messageColor: '#FFFFFF',
  backgroundColor: '#484848',
  distanceCallback: noop,
  bottom: 0,
  position: 'bottom',
  isAvoidingView: false
}

SnackbarComponent.propTypes = {
  accentColor: PropTypes.string,
  messageColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  distanceCallback: PropTypes.func,
  bottom: PropTypes.number,
  isAvoidingView: PropTypes.bool,
  position: PropTypes.string // bottom (default), top
}

const styles = StyleSheet.create({
  limit_container: {
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 9999
  },
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    paddingLeft: 16,
    paddingRight: 16,
    height: 46
  },
  text_msg: {
    fontSize: 16,
    marginRight: 10,
    flex: 1
  },
  action_text: {
    fontSize: 14,
    fontWeight: '600'
  }
})

export default SnackbarComponent
