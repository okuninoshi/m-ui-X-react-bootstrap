import React from 'react'
import {
    Col, Container, Row
} from 'react-bootstrap'
import styled from 'styled-components'
import Link from './link'
import logo from "../images/logo.png"
import { useStaticQuery, graphql } from 'gatsby'

const FooterWrapper = styled.div`
    background-color: #20232a;
    color: #ffffff;
    padding-top: 2rem;
    padding-bottom: 4rem;
    img{
        max-width: 130px;
        height:auto;
    }
    .copyright{
        color: #999;
        padding-top: 15px;
    }
    .sections-title{
        color: #999;
        font-size: 14px;
        font-weight: 700;
        line-height: 3;
        text-transform: uppercase;
        text-align: start;
        letter-spacing: 0.08em;
    }
`

const Footer = () => {
    const data = useStaticQuery(graphql`
    query footerLinks {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/footer/"}}) {
            edges {
                node {
                id
                frontmatter {
                    CHANNELS {
                    name
                    url
                    }
                    COMMUNITY {
                    name
                    url
                    }
                    DOCS {
                    name
                    url
                    }
                    MORE {
                    name
                    url
                    }
                }
                }
            }
        }
    }
`)

    const { frontmatter } = data.allMarkdownRemark.edges[0].node
    const { DOCS, CHANNELS, COMMUNITY, MORE } = frontmatter

    return (
        <FooterWrapper className="footer-bg">
            <Container fluid="lg" >
                <Row className="py-5">
                    <Col xs={12} lg={4} className="d-flex align-items-start flex-column">
                        <Link Icon to="https://opensource.facebook.com/projects/">
                            <img src={logo} alt="facebook open source" />
                        </Link>
                        <p className="copyright">Copyright © 2020 Facebook Inc.</p>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <Row >
                            <Col sm={6} className="mb-3">
                                <h6 className="sections-title">Docs</h6>
                                {DOCS.map(({ name, url }, key) => {
                                    return (
                                        <Link key={key} to={url}>
                                            {name}
                                        </Link>
                                    )
                                })}
                            </Col>
                            <Col sm={6} className="mb-3">
                                <h6 className="sections-title">CHANNELS</h6>
                                {CHANNELS.map(({ name, url }, key) => {
                                    return (
                                        <Link key={key} to={url}>
                                            {name}
                                        </Link>
                                    )
                                })}
                            </Col>
                            <Col md={6} className="mt-3">
                                <h6 className="sections-title">COMMUNITY</h6>
                                {COMMUNITY.map(({ name, url }, key) => {
                                    return (
                                        <Link key={key} to={url}>
                                            {name}
                                        </Link>
                                    )
                                })}
                            </Col>
                            <Col md={6} className="mt-3">
                                <h6 className="sections-title">MORE</h6>
                                {MORE.map(({ name, url }, key) => {
                                    return (
                                        <Link key={key} to={url}>
                                            {name}
                                        </Link>
                                    )
                                })}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
