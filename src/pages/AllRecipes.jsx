import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { Button } from '../components/Buttons'
import { H2 } from '../components/H2'
import { Paragraph } from '../components/Paragraph'
import WorldFoodCardItem from '../components/WorldFoodCardItem'
import { Wrapper } from '../components/Wrapper'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'

const AllRecipes = (props) => {
    const {data} = props
    const history = useHistory()
    function stepBack(){
        history.goBack()
    }
    return (
        <Wrapper>
            <Wrapper display={'flex'} ai={'center'}>
                <Button onClick={() => stepBack()} width={'40'} height={'40'} mr={10} br={50} background={'#C4D8B7'}><ArrowLeftIcon/></Button>
                <H2>Америка</H2>
                </Wrapper>
                <Paragraph color={'#000000'}>
                Традиционная американская еда – это незатейливые блюда из простых ингредиентов, приготовление которых не требует много времени и фантазии.
            </Paragraph>
            {data ? data.map(item => (
                <Wrapper key={item.imageURLforFirstCardItem} display={'grid'} pb={30}>
                    <WorldFoodCardItem price={item.price} title={item.title} path={item.imageURLforFirstCardItem} pr={'7.5'}/>
                    <WorldFoodCardItem price={item.price} title={item.title} path={item.imageURLforSecondCardItem} pl={'7.5'}/>
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

export default connect(mapStateToProps, null)(AllRecipes)