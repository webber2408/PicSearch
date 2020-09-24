import React from 'react';
import './ImageList.css';
import ImageCard from '../ImageCard/ImageCard.js';

class ImageList extends React.Component{

  render(){
    return(
      <div className = "image-list">
        {
          // Best practice to destruct the required attributes from the response object
          this.props.images.map(({description, id, urls}) => {
            return <ImageCard key = {id} description = {description} urls = {urls} />
          })
        }
      </div>
    )
  }
}

export default ImageList;
