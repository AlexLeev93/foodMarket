import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Button } from '../components/Buttons'
import { H2 } from '../components/H2'
import { Paragraph } from '../components/Paragraph'
import WorldFoodCardItem from '../components/WorldFoodCardItem'
import { Wrapper } from '../components/Wrapper'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'

const Shop = (props) => {
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
                <H2>Магазин</H2>
                
                </Wrapper>
                <Paragraph color={'#000000'}>
                В магазине Ужин дома, вы найдете вкусные и полезные готовые продукты по авторским рецептам от ресторана «Тито Арканум»:
                - мясо собственного копчения;
                - бездрожжевой домашний хлеб;
                - домашнее печенье из натуральных продуктов;
                - шоколадные конфеты из натуральных продуктов.
            </Paragraph>
            {data ? data.map(item => (
                <Wrapper key={item.imageURLforFirstCardItem} display={'grid'} pb={30}>
                    <WorldFoodCardItem addItem={addItem} price={item.price} title={item.title} path={item.imageURLforFirstCardItem} pr={'7.5'}/>
                    <WorldFoodCardItem addItem={addItem} price={item.price} title={item.title} path={item.imageURLforSecondCardItem} pl={'7.5'}/>
                </Wrapper>
            )): "Пока ничего нет '=('" }
            
        </Wrapper>
    )
}


const mapStateToProps = state => {
    return {
        data: state.worldFoodData
    }
}

export default connect(mapStateToProps)(Shop)