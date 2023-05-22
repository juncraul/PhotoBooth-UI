import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import './slick.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageDisplay() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://photobooth-backend.azurewebsites.net/file-manager/list-files');
      setImages(response.data);
    }
    fetchData();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
            <div key={image.id} style={{ maxWidth: '100%', maxHeight: '200px' }}>
              <img src={`${image.uri}`} alt={image.name} style={{ width: '100%', height: 'auto' }} />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageDisplay;