import React from 'react';
import Car from './car_lot.jpg'
import Header from './logo.png'
import Paperwork from './doc_sign.png'
import Car_Galleryimg1 from './jeep.jpg'
import Car_Galleryimg2 from './bmw.jpg'
import Car_Galleryimg3 from './toyota.jpg'
import Car_Galleryimg4 from './truck.jpg'
import Car_Galleryimg5 from './honda.jpg'

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: Car_Galleryimg1,
    thumbnail: Car_Galleryimg1,
  },
  {
    original: Car_Galleryimg2,
    thumbnail: Car_Galleryimg2,
  },
  {
    original: Car_Galleryimg3,
    thumbnail: Car_Galleryimg3
  },

  {
    original: Car_Galleryimg4,
    thumbnail: Car_Galleryimg4
  },

  {
    original: Car_Galleryimg5,
    thumbnail: Car_Galleryimg5
  },
];
function Home() {
  return (


      <div className="home">
      <img src={Header} className="logo.png"/>
      <h1>Welcome to Exclusive Auto Sales</h1><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
      <img src={Paperwork}className="doc_sign.png"/>
      <button>Click here!</button>


      <h2>Get your dream car today
      we are here to help you!</h2>
      <ImageGallery items={images} />
      </div>




  );
}

export default Home;
