import styled from 'styled-components'

export const Input = styled.input`
    width: ${props => props.width || '100%'};
    padding-left: ${props => props.pl || '10'}px;
    border: ${props => props.border || 'none'};
    outline: ${props => props.outline || 'none'};
    color: ${props => props.outline || '#9E9C9C'};
`