import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './img/logo.png';


class Navbar extends Component {
    state={
        isOpen:false
    }

    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }
    render(){
      return(
<nav>
    <div className="logoBtn">
      <div className="logo">
      <Link to= "/">
       </Link>
    </div>
     <div className="btn" onClick={this.handleClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      </div>
    </div>
    <ul className={this.state.isOpen ? 'showNav':'undefined'}>
    <li><Link to="/home">HOME</Link></li>
    <li><Link to="/about">CURRENCY CONVERTER</Link></li>
    <li><Link to="/contact">HISTORIC RATES</Link></li>
    <li><Link to="/project">COUNTRIES</Link></li>
    </ul>
</nav>
      );
    }

}

export default Navbar;