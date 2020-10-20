import styled from 'styled-components'

export const Paragraph = styled.p`
    color: ${props => props.color || '#fff'};
    font-style: ${props => props.fs || 'normal'};
    font-weight: ${props => props.fw || 'normal'};
    font-size: ${props => props.fs || '14'}px;
    line-height: ${props => props.lh || '17'}px;
    margin-top: ${props => props.mt || '0'}px;
    text-align: ${props => props.ta || 'inherit'}
`