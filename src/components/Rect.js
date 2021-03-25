import React from 'react';
import './Rect.css';

function Rect(props) {
  if(props.type == "round"){
    return (
    
      <svg className="RoundedRect" width={props.width +"vw"} height={props.height +"%"} 
      style={{left: props.left + "%" || "0%", right: props.right + "%" || "0%", top: props.top + "%", background: "#" + props.color || "#ffffff", backgroundImage: props.backgroundImage}}/>
      
    );
  }else if(props.type == "sharp"){
    return (
    
      <svg className="SharpRect" width={props.width +"vw"} height={props.height +"%"} 
      style={{left: props.left + "%" || "0%", right: props.right + "%" || "0%", top: props.top + "%", background: "#" + props.color || "#ffffff", backgroundImage: props.backgroundImage}}/>
      
    );
  }
}
  
export default Rect;