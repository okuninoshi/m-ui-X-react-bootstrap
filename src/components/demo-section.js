import React from 'react'
import styled from 'styled-components'
import {
    Row,
    Col,
    Container
} from 'react-bootstrap'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStaticQuery, graphql } from 'gatsby'




const Section = styled.section`
    margin-top: 60px;
    margin-bottom: 65px;
    h4{
        font-size: 1.5rem;
        margin-bottom: .5rem;
        font-weight: 700;
        line-height: 1.2;
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
const Demos = () => {

    const lg = useMediaQuery(`(max-width: ${breakpoints.lg})`); // >= 992px

    const data = useStaticQuery(graphql`
    query demos {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/html/demo/"}}) {
            edges {
              node {
                html
                frontmatter {
                  CodeImage {
                    id
                    name
                    publicURL
                  }
                }
              }
            }
          }
    }
  `)
    const introContent = data.allMarkdownRemark.edges
    return (
        <Section>
            <Container fluid="lg">

                {introContent.map(({ node }) => {
                    return (
                        <Row key={node.id} className="py-5">
                            <Col xs={12} lg={4} className="px-4 d-flex align-items-center" dangerouslySetInnerHTML={{ __html: node.html }} />
                            <Col xs={8} className="p-0">
                                <img minWidth="700px" width="100%" height="auto" src={node.frontmatter.CodeImage.publicURL} alt={node.frontmatter.CodeImage.name} />
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </Section>
    )
}

export default Demos