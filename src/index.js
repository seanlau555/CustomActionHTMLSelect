import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  NativeModules,
  Text,
  View
} from 'react-native';

import { WebView } from 'react-native-webview';
import ToastExample from '../modules/ToastExample';
// import CustomWebView from '../modules/CustomWebView';

const HTML = `
<blockquote>
  <p>浪漫的平均壽命是兩年。之後，正如大多數已婚人士所知道的，一切都只是例行公事。桃樂茜｜心理學家</p>
</blockquote>

<p>在愛情剛出現的時侯，戀人之間充滿著浪漫以及激情。但是，隨著時間發展，一切的感覺都會消失。為什麼？因為愛情的生理部分：荷爾蒙、迷戀、對某人陪伴的需要，會隨著時間自然消失。如果你想跟伴侶建立一生一世的關係，你需要學會和你的伴侶交流你的感受。</p>

<p>本書作者蓋瑞·查普曼提出：「愛」與「被愛」是人們的基本需求。問題在於我們忽略了一個基本真理：人們說著不同的「愛的語言」。如果我們要有效地分享愛，就必須願意學習配偶的主要愛的語言。</p>

<p>作者經多年輔導及研究後，歸納出五個「愛之語」，它們分別是「肯定的言詞」、「精心的時刻」、「接受禮物」、「服務的行動」、「身體的接觸」。只要能理解以及滿足伴侶的愛之語，關係便能持久。</p>

<p>本書在美國銷售已超過8,000,000冊，全球已翻譯49種語言，Amazon長銷排行榜前100名，New York times最佳銷售排行榜前五名。</p>

<p>透過本Spark，大家可以了解到：</p>

<ul>
  <ol>Amazon</ol> 
  <ol>Netflix</ol>
  <ol>Spotify</ol>
</ul>
<blockquote>
  <p>浪漫的平均壽命是兩年。之後，正如大多數已婚人士所知道的，一切都只是例行公事。桃樂茜｜心理學家</p>
</blockquote>

<p>在愛情剛出現的時侯，戀人之間充滿著浪漫以及激情。但是，隨著時間發展，一切的感覺都會消失。為什麼？因為愛情的生理部分：荷爾蒙、迷戀、對某人陪伴的需要，會隨著時間自然消失。如果你想跟伴侶建立一生一世的關係，你需要學會和你的伴侶交流你的感受。</p>

<p>本書作者蓋瑞·查普曼提出：「愛」與「被愛」是人們的基本需求。問題在於我們忽略了一個基本真理：人們說著不同的「愛的語言」。如果我們要有效地分享愛，就必須願意學習配偶的主要愛的語言。</p>

<p>作者經多年輔導及研究後，歸納出五個「愛之語」，它們分別是「肯定的言詞」、「精心的時刻」、「接受禮物」、「服務的行動」、「身體的接觸」。只要能理解以及滿足伴侶的愛之語，關係便能持久。</p>

<p>本書在美國銷售已超過8,000,000冊，全球已翻譯49種語言，Amazon長銷排行榜前100名，New York times最佳銷售排行榜前五名。</p>

<p>透過本Spark，大家可以了解到：</p>

<ul>
  <ol>Amazon</ol> 
  <ol>Netflix</ol>
  <ol>Spotify</ol>
</ul>
<blockquote>
  <p>浪漫的平均壽命是兩年。之後，正如大多數已婚人士所知道的，一切都只是例行公事。桃樂茜｜心理學家</p>
</blockquote>

<p>在愛情剛出現的時侯，戀人之間充滿著浪漫以及激情。但是，隨著時間發展，一切的感覺都會消失。為什麼？因為愛情的生理部分：荷爾蒙、迷戀、對某人陪伴的需要，會隨著時間自然消失。如果你想跟伴侶建立一生一世的關係，你需要學會和你的伴侶交流你的感受。</p>

<p>本書作者蓋瑞·查普曼提出：「愛」與「被愛」是人們的基本需求。問題在於我們忽略了一個基本真理：人們說著不同的「愛的語言」。如果我們要有效地分享愛，就必須願意學習配偶的主要愛的語言。</p>

<p>作者經多年輔導及研究後，歸納出五個「愛之語」，它們分別是「肯定的言詞」、「精心的時刻」、「接受禮物」、「服務的行動」、「身體的接觸」。只要能理解以及滿足伴侶的愛之語，關係便能持久。</p>

<p>本書在美國銷售已超過8,000,000冊，全球已翻譯49種語言，Amazon長銷排行榜前100名，New York times最佳銷售排行榜前五名。</p>

<p>透過本Spark，大家可以了解到：</p>

<ul>
  <ol>Amazon</ol> 
  <ol>Netflix</ol>
  <ol>Spotify</ol>
</ul>
<blockquote>
  <p>浪漫的平均壽命是兩年。之後，正如大多數已婚人士所知道的，一切都只是例行公事。桃樂茜｜心理學家</p>
</blockquote>

<p>在愛情剛出現的時侯，戀人之間充滿著浪漫以及激情。但是，隨著時間發展，一切的感覺都會消失。為什麼？因為愛情的生理部分：荷爾蒙、迷戀、對某人陪伴的需要，會隨著時間自然消失。如果你想跟伴侶建立一生一世的關係，你需要學會和你的伴侶交流你的感受。</p>

<p>本書作者蓋瑞·查普曼提出：「愛」與「被愛」是人們的基本需求。問題在於我們忽略了一個基本真理：人們說著不同的「愛的語言」。如果我們要有效地分享愛，就必須願意學習配偶的主要愛的語言。</p>

<p>作者經多年輔導及研究後，歸納出五個「愛之語」，它們分別是「肯定的言詞」、「精心的時刻」、「接受禮物」、「服務的行動」、「身體的接觸」。只要能理解以及滿足伴侶的愛之語，關係便能持久。</p>

<p>本書在美國銷售已超過8,000,000冊，全球已翻譯49種語言，Amazon長銷排行榜前100名，New York times最佳銷售排行榜前五名。</p>

<p>透過本Spark，大家可以了解到：</p>

<ul>
  <ol>Amazon</ol> 
  <ol>Netflix</ol>
  <ol>Spotify</ol>
</ul>
<blockquote>
  <p>浪漫的平均壽命是兩年。之後，正如大多數已婚人士所知道的，一切都只是例行公事。桃樂茜｜心理學家</p>
</blockquote>

<p>在愛情剛出現的時侯，戀人之間充滿著浪漫以及激情。但是，隨著時間發展，一切的感覺都會消失。為什麼？因為愛情的生理部分：荷爾蒙、迷戀、對某人陪伴的需要，會隨著時間自然消失。如果你想跟伴侶建立一生一世的關係，你需要學會和你的伴侶交流你的感受。</p>

<p>本書作者蓋瑞·查普曼提出：「愛」與「被愛」是人們的基本需求。問題在於我們忽略了一個基本真理：人們說著不同的「愛的語言」。如果我們要有效地分享愛，就必須願意學習配偶的主要愛的語言。</p>

<p>作者經多年輔導及研究後，歸納出五個「愛之語」，它們分別是「肯定的言詞」、「精心的時刻」、「接受禮物」、「服務的行動」、「身體的接觸」。只要能理解以及滿足伴侶的愛之語，關係便能持久。</p>

<p>本書在美國銷售已超過8,000,000冊，全球已翻譯49種語言，Amazon長銷排行榜前100名，New York times最佳銷售排行榜前五名。</p>

<p>透過本Spark，大家可以了解到：</p>

<ul>
  <ol>Amazon</ol> 
  <ol>Netflix</ol>
  <ol>Spotify</ol>
</ul>


`;

class App extends React.Component {
  onPress = () => {
    ToastExample.show('iiii', ToastExample.SHORT);
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>hihi</Text>
        </TouchableOpacity>
        <WebView style={{ flex: 1 }} source={{ html: HTML }} />
      </SafeAreaView>
    );
  }
}

export default App;
