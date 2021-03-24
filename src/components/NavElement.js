import React from 'react';
import './NavElement.css';


function NavElement(props) {
  return (
    <a className="each" href={'#'+props.name} style={{gridRow: props.gridRow}}>{props.name}</a>
  );
}
  
export default NavElement;
