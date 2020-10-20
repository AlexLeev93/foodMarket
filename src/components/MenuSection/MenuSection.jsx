import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
    margin: 0 0 10px 0;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 97px;
    border-radius: 6px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image });
    cursor: pointer;
`

const Paragraph = styled.p`
    position: absolute; 
    z-index: 1000;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const MenuSection = ({title, image, path}) => {
    return (
        <StyledLink to={path} image={image}>
            <Paragraph>{title}</Paragraph>
        </StyledLink>
    )
}

export default MenuSection;