import styled from 'styled-components'

export const IconWrapper = styled.div`
    margin-top: ${props => props.mt || 0}px;
    margin-bottom:  ${(props) => props.mb || 0}px;
    margin-left:  ${props => props.ml || 0}px;
    margin-right:  ${props => props.mr || 0}px;
`