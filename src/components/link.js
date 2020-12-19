import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from "gatsby"

import LaunchIcon from '@material-ui/icons/Launch';


const StyledLink = styled(GatsbyLink)`
    color:#fff;
    font-weight: 700;
    display:flex;
    align-items:center;
    line-height: 2;
    &:hover{
        text-decoration: none;
        color: #61dafb;
    }
    &:focus{
        outline: 0;
        color: #ffffff;
    }

`

const StyledA = styled.a`
    color:#fff;
    font-weight: 700;
    display:flex;
    align-items:center;
    line-height: 2;
    &:hover{
        text-decoration: none;
        color: #61dafb;
    }
    &:focus{
        outline: 0;
        color: #ffffff;
    }

`

//go to for more details on how to use gatsby link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links

const Link = ({ children, to, activeClassName, partiallyActive, Icon, ...other }) => {

    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
        return (
            <StyledLink
                to={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </StyledLink>
        )
    }
    return (
        <StyledA href={to} Icon={Icon} {...other}>
            {children}
            {!Icon &&
                <LaunchIcon
                    fontSize="inherit"
                    className="mx-1 text-secondary" />
            }
        </StyledA>
    )
}

export default Link