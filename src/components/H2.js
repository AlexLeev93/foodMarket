import styled from 'styled-components';

export const H2 = styled.h2`
    color: ${props => props.color || '#32564A'};
    font-style: ${props => props.fs || 'normal'};
    font-weight: ${props => props.fw || '600'};
    font-size: ${props => props.fz || '24'}px;
    line-height: ${props => props.lh || '29'}px;
    margin-bottom: ${props => props.mb || ''}px;
    text-align: ${props => props.ta || 'inherit'};
`