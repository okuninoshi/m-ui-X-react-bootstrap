import React from 'react'
// import styled from 'styled-components'
import {
    Container
} from 'react-bootstrap'
import PrimarySearchAppBar from './app-bar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body,html {
    margin:0;
    padding:0;
}
h1,h2,h3{
    color: #61dafb;
}
.global-container{
    padding-left:0;
    padding-right:0;
}
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container fluid className="global-container">
                <PrimarySearchAppBar />
                <Container fluid="lg">
                    {children}
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Layout