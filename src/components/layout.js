import React from 'react'
// import styled from 'styled-components'
import {
    Container
} from 'react-bootstrap'
import PrimarySearchAppBar from './app-bar'
import { createGlobalStyle } from 'styled-components'

import Footer from './footer'

const GlobalStyle = createGlobalStyle`
body,html {
    margin:0;
    padding:0;
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
                <Container fluid="lg" className="py-5 mt-5">
                    {children}
                </Container>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Layout