import React from 'react'
import { Route, Switch, useHistory } from 'react-router'
import { Button, NavLinkButton } from '../components/Buttons'
import { H2 } from '../components/H2'
import { Paragraph } from '../components/Paragraph'
import { Wrapper } from '../components/Wrapper'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import WorldFoods from './WorldFoods'
import Categories from './Categories'

const FoodConstructor = () => {
    const history = useHistory()
    function stepBack(){
        history.goBack()
    }
    return(
        <Wrapper>
        <Wrapper display={'flex'} ai={'center'}>
            <Button onClick={() => stepBack()} width={'40'} height={'40'} mr={10} br={50} background={'#C4D8B7'}><ArrowLeftIcon/></Button>
            <H2>Конструктор еды</H2>
        </Wrapper>
        <Paragraph color={'#000000'}>
            Конструктор еды  «Ужин дома» – сервис по доставке готовых наборов блюд, с пошаговым рецептом от ресторана «Тито Арканум».
            Все для сбалансированного завтрака, обеда и ужина!
        </Paragraph>
        <Wrapper display={'flex'} pb={12} jc={'center'}>
            <NavLinkButton to='/constructor/' fz={14} width={'185'} height={'98'} mr={15} br={6} background={'#32564A'}>Кухни мира</NavLinkButton>
            <NavLinkButton to='/constructor/categories' fz={14} width={'185'} height={'98'} br={6} background={'#32564A'}>Разделы меню</NavLinkButton>
        </Wrapper>
            <Switch>
                <Route exact path={'/constructor/'} component={WorldFoods}/>
                <Route path={'/constructor/categories'} component={Categories}/>
            </Switch>
        </Wrapper>
    )
}

export default FoodConstructor 