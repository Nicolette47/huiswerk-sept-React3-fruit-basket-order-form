import React from 'react';
import './Fruitcounter.css';
import substract from '../helpers/countingsubstract.js';
import adding from '../helpers/countingadd.js';

function Countbuttons(props) {
    return (

        <div className="fruit-section">
            <p>{props.fruitName}

                <button
                    type="button"
                    name={props.fruitName}
                    value={props.value}
                    onClick={() => props.substractFruitCount(substract(props.value))}
                >
                    -
                </button>

                <span className="fruit-value">{props.value}</span>

                <button
                    type="button"
                    name={props.fruitName}
                    value={props.value}
                    onClick={() => props.addFruitCount(adding(props.value))}
                >
                    +
                </button>
            </p>
        </div>
    )
}

export default Countbuttons