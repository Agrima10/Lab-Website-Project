import React from 'react';
import backgroundImage from './image/Banner.jpg';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';

function News() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em' 
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  };

  const imageStyle = {
    width: '30%',
    margin: '10px'
  };

  return (
    <div>
      <div style={divStyle}>News</div>
      <div style={imagesContainerStyle}>
        <img src={image1} style={imageStyle} alt="Image 1" />
        <img src={image2} style={imageStyle} alt="Image 2" />
        <img src={image3} style={imageStyle} alt="Image 3" />
      </div>
      <div style={imagesContainerStyle}>
        <img src={image1} style={imageStyle} alt="Image 1" />
        <img src={image2} style={imageStyle} alt="Image 2" />
        <img src={image3} style={imageStyle} alt="Image 3" />
      </div>
    </div>
  );
}

export default News;
