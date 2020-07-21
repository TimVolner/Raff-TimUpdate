import React from 'react';
import Dreamcar from './dreamcar.jpg'
import About_img from './AU.jpg'


function About() {
  return (
      <div className="about">
      <img src={About_img} className="AU.jpg"/>
      <h2>Exclusive Auto Sales</h2>
      <h3>Welcome to the Exclusive Auto Sales of Reno, Nv website, a fast and convenient way to research and find a vehicle that is right for you. Whether you are looking for a new or used car, truck, or SUV you will find it here. We have helped many customrs all around to find there car of their dreams!</h3>
      <img src={Dreamcar} className="dreamcar.jpg"/>
      </div>




  );
}

export default About;
