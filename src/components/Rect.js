import React from 'react';
import './Rect.css';

function Rect(props) {
  return (
    <svg className="Rect" width={props.width +"vw"} height={props.height +"%"} 
    style={{left: props.left + "%" || "0%", right: props.right + "%" || "0%", top: props.top + "%", background: "#" + props.color || "#ffffff", backgroundImage: props.backgroundImage}}/>

  );
}
  
export default Rect;