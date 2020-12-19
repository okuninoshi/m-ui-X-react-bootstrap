import React from 'react';
//@Material-ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TranslateIcon from '@material-ui/icons/Translate';
import LaunchIcon from '@material-ui/icons/Launch';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// react-bootstrap imports
import { Link } from 'gatsby';
import {
    Row,
    Col
} from 'react-bootstrap'

// styled component
// overide default styles
// make sure to inject first the M-ui styles in the gatsby-config.js folder in gatsby-plugin-material-ui
import styled from 'styled-components'


const AppBarStyles = styled.div`
    .app-bar{
        background:#20232a;
    }
    .react-logo{
        color: #61dafb;
        &:hover{
            text-decoration:none;
        }
        &:focus{
            color:#fff;
        }
        span{
            color: inherit;
            margin-left: 10px;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
        }
    }
    .link-bsb{
        color:#fff;
        font-weight: 300;
        height:64px;
        min-height:56px;
        display:flex;
        align-items:center;
        &:hover{
            text-decoration: none;
            color: #61dafb;
        }
        &:focus{
            outline: 0;
            background-color: #373940;
            color: #ffffff;
        }
    }

    .link-asb{
        color:#fff;
        font-weight: 300;
        display:flex;
        font-size:14px;
        align-items:center;
        &:hover{
            text-decoration: none;
            color: #61dafb;
        }
        &:focus{
            outline: 0;
            background-color: #373940;
            color: #ffffff;
            border-radius: 15px;
        }
    }
    .search-bar{
        width: 16px;
        background: transparent;
        border: 0;
        color: #ffffff;
        font-size: 18px;
        font-weight: 300;
        font-family: inherit;
        padding: 4px 4px 4px 29px;
        background-image: url('/img/search.svg');
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 4px;
        transition: width 0.2s ease, padding 0.2s ease;
    }
    .search-bar:focus{
        outline: 0;
        background-color: #373940;
        border-radius: 0.25rem;
        width:8rem;
    }

`
//bootstrap break points
const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
}
export default function PrimarySearchAppBar() {

    const xs = useMediaQuery(`(min-width: ${breakpoints.sm})`); // < 576px
    const sm = useMediaQuery(`(min-width: ${breakpoints.sm})`); // >= 576px
    const md = useMediaQuery(`(min-width: ${breakpoints.md})`); // >= 768px
    const lg = useMediaQuery(`(min-width: ${breakpoints.lg})`); // >= 992px
    const xl = useMediaQuery(`(min-width: ${breakpoints.xl})`); // >= 1200px


    return (
        <AppBarStyles>
            <AppBar position="fixed" className="app-bar px-lg-5">
                <Toolbar className="toolbar">
                    <Row className="align-items-center justify-content-center flex-grow-1">
                        <Col xs={1} md={2} className="d-flex justify-content-start">
                            <Link to={`/`} className="d-flex react-logo">
                                <img width="22px" height="20px" src="/img/ReactJS.svg" alt="ReactJS" />
                                {md &&
                                    <span>
                                        React
                                    </span>
                                }
                            </Link>
                        </Col>
                        <Col xs={7} md={4} className="d-flex align-items-center justify-content-lg-end">
                            <Link to={`/docs`} className="link-bsb px-2 px-lg-3" >
                                Docs
                                </Link>
                            <Link to={`/tutorial`} className="link-bsb px-2 px-lg-3" >
                                Tutorial
                                </Link>
                            <Link to={`/blog`} className="link-bsb px-2 px-lg-3" >
                                Blog
                                </Link>
                            <Link to={`/community`} className="link-bsb px-2 px-lg-3" >
                                Community
                            </Link>
                        </Col>
                        <Col xs={2} lg={3} className="d-flex align-items-center justify-content-end">
                            <input
                                className="search-bar ml-4"
                                placeholder='Search'
                                style={{
                                    width: lg && "100%",
                                }}
                            />
                        </Col>
                        <Col xs={1} md={3} lg={3} className="d-flex align-items-center justify-content-center">
                            {md && <Link to={`/docs`} className="link-asb mx-md-2">
                                v17.0.1
                                </Link>}
                            <Link to={`/tutorial`} className="link-asb mx-md-2">
                                <TranslateIcon className="mx-md-2" />
                                {md && <span>
                                    Languages
                                </span>}
                            </Link>
                            {lg && <a href="https://github.com/facebook/react/" className="link-asb mx-md-2">
                                GitHub
                                <LaunchIcon
                                    fontSize="inherit"
                                    className="mx-1 text-secondary" />
                            </a>}
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>
        </AppBarStyles>
    );
}
