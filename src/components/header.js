import React from 'react'
import styled from 'styled-components'
import {
    Row,
    Col
} from 'react-bootstrap'
import CallToAction from "./calltoAction"




const Styles = styled.div`
    .background-container{
        padding-top: 95px;
        padding-bottom: 85px;
        position: relative;
        width:100%;
        background-color: #282c34;
        color:#ffffff;
        &:before{
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: url('img/ReactJS.svg');
            background-repeat: no-repeat;
            background-position: 100% 100px;
            background-size: 50% auto;
            opacity: 0.05;
        }
    }
    h1{
        color: #61dafb;
        text-align: center;
        margin: 0;
        font-size: 60px;
        letter-spacing: 0.01em;
    }
    p{
        padding-top: 20px;
        padding-top: 15px;
        text-align: center;
        font-size: 30px;
        letter-spacing: 0.01em;
        font-weight: 200;
    }
    .button-container{
        padding-top: 65px;
    }
`

const Header = () => {
    return (
        <Styles>
            <div className="background-container">
                <Row className="m-0">
                    <Col xs={12}>
                        <h1>React</h1>
                    </Col>
                    <Col xs={12}>
                        <p>A JavaScript library for building user interfaces</p>
                    </Col>
                </Row>
                <CallToAction backgroundColor="transparent" />
            </div>
        </Styles>
    )
}

export default Header