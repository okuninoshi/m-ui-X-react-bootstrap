import * as React from "react"
import {
  Container
} from 'react-bootstrap'
import {
  Button
} from '@material-ui/core'

const IndexPage = () => {
  return (
    <Container fluid="lg">
      <main>
        <p style={{ color: 'yellow' }}>yellow</p>
        <Button variant="outlined" color="primary">Secondary button</Button>
      </main>
    </Container>
  )
}

export default IndexPage
