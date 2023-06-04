import React from 'react';
import './Button.scss';

const Button = props => {
    return (
        <button className='common-btn' onClick={props.onClick} >{props.title}</button>
    );
};

export default Button;