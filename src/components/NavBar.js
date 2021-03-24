import React from 'react';
import './NavBar.css';
import NavElement from './NavElement.js';


function navBar(props) {
  return (
    <div className="nav">
      {/* <a className="nav" href={'#'+props.name}>{props.name}</a> */}
      <NavElement name="About Me" gridRow="1"/>
      <NavElement name="Portfolio" gridRow="2"/>
      <NavElement name="Resume" gridRow="3"/>
      <NavElement name="Contact" gridRow="4"/>
    </div>
  );
}
  
export default navBar;
