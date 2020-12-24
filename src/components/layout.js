import React from 'react'
// import styled from 'styled-components'
import {
    Container
} from 'react-bootstrap'
import PrimarySearchAppBar from './app-bar'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
body,html {
    margin:0;
    padding:0;
    font-family: -apple-system, BlinkMacSystemFont,
                 Segoe UI, Roboto,Oxygen,
                 Ubuntu,Cantarell,
                 Fira Sans,Droid Sans,
                 Helvetica Neue,sans-serif;
    font-weight: 400;
}
h1,h2,h3{
    color: #61dafb;
}
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container fluid className="px-0">
                <PrimarySearchAppBar />
                <Container fluid className="px-0 pt-5">
                    {children}
                </Container>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Layout