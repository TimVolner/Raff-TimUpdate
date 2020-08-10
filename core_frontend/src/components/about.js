import React from 'react';
import Dreamcar from './dreamcar.jpg'
import About_img from './AU.jpg'


function About() {
  return (
      <div className="about">
        <div className="row1 col4 cspan6">
          <h1>Exclusive Auto Sales</h1>
        </div>

        <div className="row2 col4 cspan6 AU">
          <img src={About_img} className="AU-img"/>
        </div>

        <div className="row3 col4 cspan3">
          <h2>Our History</h2>
        </div>

        <div className="row4 col4 cspan3">
          <h3>Welcome to the Exclusive Auto Sales of Reno, Nv website, a fast and convenient way to research and find a vehicle that is right for you. Whether you are looking for a new or used car, truck, or SUV you will find it here. We have helped many customrs all around to find there car of their dreams!</h3>
        </div>

        <div className="row3 rspan2 col7 cspan3 dreamcar">
          <img src={Dreamcar} className="dreamcar-img"/>
        </div>

        <div className="row5 col1 cspan12">
          <div className="spacer" />
        </div>
      </div>




  );
}

export default About;
