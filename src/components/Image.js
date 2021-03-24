import React from 'react';
import './Image.css';

function Image(props) {
  return (
    <img alt="Cindy Graphic" className="image" src={props.src} width={props.width +"%"} height={props.height} /*change to add % if not auto default*/ 
    style={{left: props.left + "%" ||" 0%", right: props.right + "%" || "0%", top: props.top + "%"}}/>

  );
}
  
export default Image;