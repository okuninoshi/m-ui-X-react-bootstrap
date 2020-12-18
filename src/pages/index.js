import * as React from "react"
import {
  Row,
} from 'react-bootstrap'

import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <div style={{              // add vertical scrolling 
          background: "#aebece",
          height: "2000px",
          width: "100%",
          padding: 0,
          margin: 0,
        }}>

        </div>
      </Row>
    </Layout>
  )
}

export default IndexPage
