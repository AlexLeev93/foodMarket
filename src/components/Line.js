import styled from 'styled-components'

export const Line = styled.div`
    border: 1px solid ${props => props.border || '#555555'};
    margin-top: ${props => props.mt || ''}px;
    width: ${props => props.width || ''}%;
    height: ${props => props.height || ''}px;
`