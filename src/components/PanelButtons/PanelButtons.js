import React from 'react';
import './PanelButtons.css';
const PanelButtons = (props) =>{
    let title = (<h2>{props.title}:</h2>)
    if(props.title === 'cheese'){
        title = (<h2>vegan<br/>{props.title}:</h2>)
    }
    return(
        <div className="PanelButtons-container">
            <div className="PanelButtons">
                {title}
                <div className="PanelButtons-button-wrapper">
                    <button
                        className="PanelButtons-less"
                        name = {props.title}
                        onClick={props.clicked}
                        disabled = {props.disabled}>-
                    </button>
                    <button 
                        className="PanelButtons-more"
                        name = {props.title}
                        onClick={props.clicked}>+   
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default PanelButtons;