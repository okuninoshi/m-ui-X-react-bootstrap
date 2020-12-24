import * as React from "react"
import {
    Row,
    Col
} from 'react-bootstrap'

import Layout from '../../components/layout'

const GettingStarted = () => {
    return (
        <Layout>
            <Row noGutters className="py-5">
                <Col xs={12} className="p-3">
                    <h2>getting started page</h2>
                </Col>
                <Col xs={12} className="p-3">
                    <p>Chalenge your self and build the remaining pages and let
                         <a href="https://twitter.com/Okuninoshi"> me </a>
                          know 📪 ✌️ </p>
                </Col>
            </Row>
        </Layout>
    )
}

export default GettingStarted
