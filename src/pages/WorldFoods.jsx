import React from 'react'
import { connect } from 'react-redux'
import WorldFoodCard from '../components/WorldFoodCard'

const WorldFoods = (props) => {
    const {data} = props
    return (
        <div>
            {data ? data.map(item => (
                <WorldFoodCard key={item.country}
                country={item.country}
                    title={item.title}
                    linkTitle={'Все блюда'} 
                    text={item.text} 
                    firstImage={item.imageURLforFirstCardItem}
                    secondImage={item.imageURLforSecondCardItem}
                />
            )): "Пока ничего нет '=('" }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.worldFoodData
    }
}

export default connect(mapStateToProps, null)(WorldFoods)