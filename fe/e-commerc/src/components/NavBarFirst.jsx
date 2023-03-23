import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiUser } from "react-icons/bi";


import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

function NavBarFirst() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color: '#fff'}}>
          <BiUser/> Bootstrap
        </a>
      </div>
    </nav>
  );
}

export default NavBarFirst;