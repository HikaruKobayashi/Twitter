import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Article from './components/Article';

export default class News extends React.Component {
  state = {
    articles: [],
    refreshing: false,
  }

  getNews = async() => {
    this.setState({ refreshing: true });
    // APIからJSONを取得する
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0fa46fc97fce4491aa62c548b89eb92d";
    try {
      const result = await fetch(url);
      const json = await result.json();
      this.setState({
        articles: json.articles,
        refreshing: false
      });
    } catch (e) {
      this.setState({ refreshing: false });
      console.log(e);
    }
  }
  componentDidMount = () => {
    this.getNews();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <FlatList
        data={this.state.articles}
        keyExtractor={item => item.url}
        renderItem={({ item }) => <Article article={item} />}
        onRefresh={() => this.getNews()}
        refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    )
  }
}