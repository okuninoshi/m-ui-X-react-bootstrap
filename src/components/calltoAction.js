import React from 'react'
import styled from 'styled-components'
import {
    Row,
} from 'react-bootstrap'
import Button from './button'


const Styles = styled.div`
    .CTAContainer{
        background: ${props => props.bgc || "#282c34"};
        color: #ffffff;
        padding-top: 45px;
        padding-bottom: 25px;
    }
`

const CallToAction = ({ backgroundColor }) => {
    return (
        <Styles bg={backgroundColor}>
            <div className="CTAContainer">
                <Row className="d-flex justify-content-center m-0">
                    <Button style="primary">Get Started</Button>
                    <Button >Take the Tutorial &gt;</Button>
                </Row>
            </div>
        </Styles>
    )
}

export default CallToAction