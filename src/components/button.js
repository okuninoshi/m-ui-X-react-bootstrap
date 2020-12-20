import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import styled from 'styled-components'


const PrimaryButton = styled(MuiButton)`
    
    font-size: 16px;
    padding: 10px 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #61dafb;
    color: #000000;
    white-space: nowrap;
    border-radius:0;
    &:hover{
        background-color:#ffffff;
    }
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    
`
const SecondaryButton = styled(MuiButton)`
    font-size: 16px;
    padding: 10px 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #61dafb;
    white-space: nowrap;
    &:hover{
        color:#ffffff;
        background-color:transparent;

    }
    transition: color 0.2s ease-out;
`

const Button = ({ children, style, ...other }) => {
    if (style === "primary") {
        return (
            <PrimaryButton
                {...other}
            >
                {children}
            </PrimaryButton>
        )
    }
    return (
        <SecondaryButton
            {...other}
        >
            {children}
        </SecondaryButton>
    )
}

export default Button