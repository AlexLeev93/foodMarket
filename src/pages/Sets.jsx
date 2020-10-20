import React from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Button } from '../components/Buttons'
import { H2 } from '../components/H2'
import { Paragraph } from '../components/Paragraph'
import WorldFoodCardItem from '../components/WorldFoodCardItem'
import { Wrapper } from '../components/Wrapper'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import Basket from './Basket'

const Sets = (props) => {
    const dispatch = useDispatch()
    const {data} = props
    const history = useHistory()
    function stepBack(){
        history.goBack()
    }

    function addItem(id){
        let selectItem = data.filter(e => e.id === id)
            dispatch({type: 'ADD_ITEM', selectItem})
    }

    return (
        <Wrapper>
            <Wrapper display={'flex'} ai={'center'}>
                <Button onClick={() => stepBack()} width={'40'} height={'40'} mr={10} br={50} background={'#C4D8B7'}><ArrowLeftIcon/></Button>
                <H2>Сеты</H2>
                </Wrapper>
                <Paragraph color={'#000000'}>
                Для того, чтобы разнообразить ваши будни и выходные, познакомить вас с нашим меню, помочь определиться с выбором, команда Ужин дома разработала варианты сетов для особых случаев. Выбирайте свой под любое настроение: «Романтический ужин на двоих», «Семейный ужин», «Девичьи посиделки», «Мужская компания».
                <br/>
                Сеты от Ужин дома включают наборы блюд в формате конструктора: салаты, закуски, вторые блюда и напитки, которые связаны между собой не только определенной тематикой, но и отличаются ярким вкусом, творческим подходом в приготовлении. 
            </Paragraph>
            {data ? data.map(item => (
                <Wrapper key={item.imageURLforFirstCardItem} display={'grid'} pb={30}>
                    <WorldFoodCardItem addItem={addItem}  id={item.id} price={item.price} title={item.title} path={item.imageURLforFirstCardItem} pr={'7.5'}/>
                    <WorldFoodCardItem addItem={addItem}  id={item.id} price={item.price} title={item.title} path={item.imageURLforSecondCardItem} pl={'7.5'}/>
                </Wrapper>
            )): "Пока ничего нет '=('" }
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        data: state.worldFoodData,
        selectedItems: state.selectedItems
    }
}

export default connect(mapStateToProps, null)(Sets)