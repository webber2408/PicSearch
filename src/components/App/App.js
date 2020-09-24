import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import ImageList from '../ImageList/ImageList.js';
import unsplash from '../../api/unsplash.js';

class App extends React.Component{

  state = {images: []};

  // if this was not an arrow function, we will have to bind it to `this` in the constructor
  onSearchSubmit = async (term) => {
    // async request
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    // console.log(response.data.results);
    // We would not be able to access this.setState if this function was not an arrow function, if not this would be the props of the SearchBar component
    this.setState({images: response.data.results}, () => {
      console.log(this.state);
    });
    // .then((res) => {
    //   console.log(res.data.results);
    // });
  }

  render(){
      return (
      <div className = "ui container" style = {{marginTop: '10px'}}>
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images} />
      </div>
    )
  }
}

export default App;
