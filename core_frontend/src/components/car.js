import React, { useState } from 'react';


function Car() {
  const [truckDropDown, setTruckDropDown] = useState(false)

  const truckMenu = () => {
  return(<div><h1>Truck list - Ford F-150</h1></div>)
  }

function handleTruckMenu () {
  console.warn(truckDropDown)
  if (truckDropDown === true) {
  setTruckDropDown(false)
  } else {
  setTruckDropDown(true)
  }
}
  return (
      <div className="car">
      <h1>List of cars please take a good look around!</h1>
      <button onClick={() => handleTruckMenu()}>Trucks</button>
      {(truckDropDown === true)? truckMenu() : <div /> }
      <button>Jeeps</button>
      <button>Cars</button>
      <button>SUV</button>
      <button>Vans</button>
      <button>Sports cars</button>
      </div>




  );
}

export default Car;
