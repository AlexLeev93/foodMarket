import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width || 'initial'}px;
    height: ${props => props.height || '0'}px;
    border: ${props => props.border || 'none'};
    background: ${props => props.background || '#fff'};
    outline: none;
    border-radius: ${props => props.br || 'none'}px;
    margin-right: ${props => props.mr || '0'}px; 
    margin-left: ${props => props.ml || '0'}px; 
    color:  ${props => props.color || '#fff'};
    font-weight: 600;
    font-size: ${props => props.fs || '0'}px;
`

export const NavLinkButton = styled(NavLink)`
    width: ${props => props.width || '0'}px;
    height: ${props => props.height || '0'}px;
    border: ${props => props.border || 'none'};
    background: ${props => props.background || '#fff'};
    outline: none;
    border-radius: ${props => props.br || 'none'}px;
    margin-right: ${props => props.mr || '0'}px; 
    color:  ${props => props.color || '#fff'};
    font-weight: 600;
    font-size: ${props => props.fz || '0'}px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &.active{
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`