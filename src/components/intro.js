import React from 'react'
import styled from 'styled-components'
import {
    Row,
    Col
} from 'react-bootstrap'

// import IntroData from '../../content/introduction.yaml'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStaticQuery, graphql } from 'gatsby'




const Section = styled.section`
    margin-top: 60px;
    margin-bottom: 65px;
    overflow-x:hidden;
    h4{
        font-size: 1.5rem;
        margin-bottom: .5rem;
        font-weight: 400;
        line-height: 1.2;
        color:#6d6d6d;
    }
    p{
        line-height: 1.7;
    }
`
const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
}
const Intro = () => {

    const lg = useMediaQuery(`(max-width: ${breakpoints.lg})`); // >= 992px

    const data = useStaticQuery(graphql`
    query Content {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/introduction/"}}, sort: {fields: frontmatter___title}) {
            edges {
              node {
                id
                html
                frontmatter {
                  title
                }
              }
            }
        }
    }
  `)
    const introContent = data.allMarkdownRemark.edges
    return (
        <Section
            style={{
                overflowX: lg && "scroll",
            }}>
            <Row className="m-0 px-5"
                style={{
                    minWidth: `${breakpoints.lg}`
                }}
            >
                {introContent.map(({ node }) => {
                    return (
                        <Col key={node.id} xs={4} className="px-4" dangerouslySetInnerHTML={{ __html: node.html }} />
                    )
                })}
            </Row>
        </Section>
    )
}

export default Intro