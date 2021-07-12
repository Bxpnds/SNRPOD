import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];



export const Button = ({children, type, onClick, ButtonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES [0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0]

    return(
        <Link to />
    );
};

