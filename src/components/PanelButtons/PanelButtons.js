import React from 'react';
import './PanelButtons.css';
const PanelButtons = (props) =>{
    return(
        <div className="PanelButtons-container">
            <div className="PanelButtons">
                <h2>{props.title}:</h2>
                <div className="PanelButtons-button-wrapper">
                    <button
                        className="PanelButtons-less"
                        name = {props.title}
                        onClick={props.clicked}
                        disabled = {props.disabled}>Less
                    </button>
                    <button 
                        className="PanelButtons-more"
                        name = {props.title}
                        onClick={props.clicked}>More   
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default PanelButtons;