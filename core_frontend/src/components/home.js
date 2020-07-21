import React from 'react';
import Car from './car_lot.jpg'
import Header from './logo.png'
import Paperwork from './sign_documents.jpg'
import Car_Galleryimg1 from './jeep.jpg'
import Car_Galleryimg2 from './bmw.jpg'
import Car_Galleryimg3 from './toyota.jpg'

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
];
function Home() {
  return (


      <div className="home">
      <img src={Header} className="logo.png"/>
      <h1>Welcome to Exclusive Auto Sales</h1><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
      <h3>Get pre-approved!</h3><img src={Paperwork} className="sign_documents"/>


      <h2>Get your dream car today
      we are here to help you!</h2>
      <ImageGallery items={images} />
      </div>




  );
}

export default Home;
