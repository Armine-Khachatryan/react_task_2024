import React from "react";
import classes from './PrimaryButton.module.css'


function PrimaryButton (props) {
    return(
        <button className={classes.btnStyle}
                style={{width: props.width, minWidth:props.minWidth, maxWidth: props.maxWidth, backgroundColor:props.backgroundColor, marginTop:props.marginTop}}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default PrimaryButton;