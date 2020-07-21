import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'






function Header() {
  return (
    <div>
      <header className="header">
        <div className="col1"><FontAwesomeIcon icon={faFacebook}/> <FontAwesomeIcon icon={faTwitter}/> <FontAwesomeIcon icon={faInstagram}/></div>
        <div className="col2">
          <div className="menu">
      <Link to="/about"><FontAwesomeIcon icon={faCheck} color="red"/><h3>About</h3></Link>
        <Link to="/car"><FontAwesomeIcon icon={faCarSide} color="red"/><h3>Car</h3></Link>
          <Link to="/contact"><FontAwesomeIcon icon={faAddressCard} color="red"/><h3>Contact</h3></Link>
            <Link to="/search"><FontAwesomeIcon icon={faArrowUp} color="red"/><h3>Search</h3></Link>
    <nav/>
          </div>
        </div>
      </header>
    </div>
   );
 }

export default Header;
