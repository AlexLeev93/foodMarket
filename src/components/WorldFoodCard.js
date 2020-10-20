import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WorldFoodCardItem from './WorldFoodCardItem'
import { H2 } from './H2'
import { Paragraph } from './Paragraph'
import { Wrapper } from './Wrapper'

const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;
    color: #32564A;
`

const WorldFoodCard = ({title, linkTitle, text , firstImage, secondImage, country}) => {
    return (
        <Wrapper>
            <Wrapper display={'flex'} jc={'space-between'} ai={'center'}>
                <H2>{country}</H2>
                <StyledLink to={'/allrecipes'}>{linkTitle}</StyledLink>
            </Wrapper>
            <Paragraph color={'#000000'}>
                {text}
            </Paragraph>
            <Wrapper display={'grid'} pb={30}>
                <WorldFoodCardItem title={title} path={firstImage} pr={'7.5'}/>
                <WorldFoodCardItem title={title} path={secondImage} pl={'7.5'}/>
            </Wrapper>
        </Wrapper>
        
    )
}

export default WorldFoodCard