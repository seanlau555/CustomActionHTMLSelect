import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import ViewPager from '@react-native-community/viewpager'
import Page from './Page';
import { color, font } from '../common/theme';
import SnackBar from './SnackBar';
import { fontStyles } from './styles';
import { articles } from './html';

const iOS = Platform.OS === 'ios';

class Article extends Component {
  state = {
    book: null,
    currentPage: 1,

    // snackbar controller
    snackVisible: false,
    defaultItem: 1,
    defaultFontSize: 18,
    currentFontSize: 18
  };
  viewPager = React.createRef();

  componentDidMount() {
    this.setState({book: articles})
  }

  slidingComplete = itemSelected => {
    let currentSize =
      this.state.defaultFontSize * sliderOptions[itemSelected].value;
    this.setState({
      defaultItem: itemSelected,
      currentFontSize: currentSize
    });
  };

  getCurrentStyle = () => {
    return fontStyles(this.state.currentFontSize);
  };

  actionHandler = () => {
    const { currentPage } = this.state;
    this.viewPager.current.setPage(currentPage + 1);
  };

  showSnackBar = bool => {
    if (this.state.showPlans && this.state.currentPage === 1) {
      return;
    }
    if (bool !== this.state.snackVisible) {
      this.setState({ snackVisible: bool });
    }
  };

  onPageSelected = page => {
    const pageLength = this.state.book.pages.length;
    const { position } = page;
    let showButton = false;
    if (position + 1 !== pageLength) showButton = true;
    this.setState({
      snackVisible: false,
      currentPage: position,
      showButton
    });
  };

  renderViewPagerPage = (page, index) => {
    let pageNumber = index + 1;
    if (!page) return null;
    return (
      <View key={index} style={{ flex: 1 }}>
        <Page
          getCurrentStyle={this.getCurrentStyle}
          html={page.html}
          book={this.state.book}
          showPlans={this.state.showPlans}
          plansOnPress={this.plansOnPress}
          showSnackBar={this.showSnackBar}
          pageNumber={pageNumber}
        />
      </View>
    );
  };

  render() {
    if (this.state._isLoading) {
      return (
        <View style={styles.container}>
          {iOS && <StatusBar barStyle={'dark-content'} />}
          <ActivityIndicator size={'large'} color={color.text} />
        </View>
      );
    }
    if (this.state.book === null) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={font.regular}>讀取問題</Text>
        </View>
      );
    }
    let pageLength = this.state.book.pages.length;
    let message = this.state.currentPage + 1 + '/' + pageLength;
    if (this.state.currentPage < pageLength - 1) {
      if (this.state.book.pages[this.state.currentPage + 1].title) {
        message = this.state.book.pages[this.state.currentPage + 1].title;
      }
    }
    let pages = this.state.book.pages;
    if (this.state.showPlans) {
      pages = pages.slice(0, 2);
      pages.push(null);
    }

    return (
      <SafeAreaView style={styles.container}>
        {iOS && <StatusBar barStyle={'dark-content'} />}
        <View style={{ flex: 1 }}>
          <ViewPager
            style={{ flex: 1 }}
            ref={this.viewPager}
            onPageSelected={this.onPageSelected}
          >
            {pages.map((page, index) => this.renderViewPagerPage(page, index))}
          </ViewPager>
          {pageLength > 0 && (
            <SnackBar
              visible={this.state.snackVisible}
              position={'bottom'}
              textMessage={'Page: ' + message}
              showButton={this.state.showButton}
              actionHandler={this.actionHandler}
              isAvoidingView={false}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContent: {
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  snapsliderContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: iOS ? 12 : 0
  },
  snapslider: {},
  snapsliderItemWrapper: {
    top: !iOS ? 11 : 18
  },
  snapsliderItem: {
    marginHorizontal: 15,
    width: iOS ? 1 : 0,
    height: iOS ? 5 : 0,
    backgroundColor: color.greyText
  }
});

export default Article;
