import React from 'react'
import { H2 } from '../components/H2'
import { StyledImage } from '../components/StyledImage'
import { Wrapper } from '../components/Wrapper'
import Soup from '../images/Soups.jpg'

const CategoriesItem = ({title}) => {
    return (
        <Wrapper display={'flex'} ai={'center'} pb={12}>
            <StyledImage src={Soup}/>
            <H2>{title}</H2>
        </Wrapper>
    )
}

const Categories = () => {

    return (
        <Wrapper>
            <CategoriesItem title={'Супы'}/>
            <CategoriesItem title={'Салаты'}/>
            <CategoriesItem title={'Десерты'}/>
            <CategoriesItem title={'Паста'}/>
            <CategoriesItem title={'Стейки'}/>
        </Wrapper>
        
    )
}

export default Categories