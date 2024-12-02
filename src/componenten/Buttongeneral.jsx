import React from 'react';
import './Buttongeneral.css';


function Buttongeneral (props) {


    return (
        <button className="general-button"
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Buttongeneral;




