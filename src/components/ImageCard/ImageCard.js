import React, {useEffect, useState} from 'react';
import './ImageCard.css';

const ImageCard = ({description, urls}) => {

  const [spans, setStateSpans] = useState(0);

  const imageRef = React.createRef(); // gives info about the react DOM element

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setStateSpans(spans);
  }

  useEffect(() => {// or you could have used componentDidMount
    imageRef.current.addEventListener('load', setSpans);
  });

  return (
    <div style = {{gridRowEnd: `span ${spans}`}}>
      <img className = "image" ref = {imageRef} alt = {description} src = {urls.regular}/>
    </div>
  )
};

export default ImageCard;

/*
React refs
  Gives access to single DOM Elements
*/
