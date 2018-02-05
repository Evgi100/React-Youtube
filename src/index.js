import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import YTsearch from 'youtube-api-search';
import _ from 'lodash'

const API_KEY = 'AIzaSyCvwan3_k5O0ZRMuSfUhX6Xp4Gbrbcw4QM';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }
  videoSearch(term){
    YTsearch({ key: API_KEY, term:term  }, videos => this.setState({ videos, selectedVideo: videos[0] }));
  }
  // ES5 {videos:videos}

  render() {

    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},1000)

    return (
      <div>
        <SearchBar onSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoClick={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
