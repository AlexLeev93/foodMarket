import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button } from '../components/Buttons'
import { H2 } from '../components/H2'
import { Paragraph } from '../components/Paragraph'
import { Wrapper } from '../components/Wrapper'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'

export const StyledImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 4px;
    margin-right: 5px;
` 

const Basket = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {data} = props
    function stepBack(){
        history.goBack()
    }
    function increment(id){
        dispatch({type: 'INCREMENT', id})
    }
    function decrement({quantity,id}){
        if(quantity > 1){
            dispatch({type: 'DECREMENT', id})
        }
    }
    function removeItem(id) {
        dispatch({type: 'DELETE_ITEM', id})
    }

    // function getSum(){
    //     let dataCopy = data
    // let totalSum = 0;
    // for (let i=0; i<dataCopy.length; i++) {
    //     totalSum += dataCopy[i].quantity * dataCopy[i].price;
    // }
    // }
    // console.log('total', total)

    return (
        <Wrapper display={'flex'} fd={'column'}>
            <Wrapper display={'flex'} ai={'center'}>
                <Button onClick={() => stepBack()} width={'40'} height={'40'} mr={10} br={50} background={'#C4D8B7'}><ArrowLeftIcon/></Button>
                <H2>Корзина</H2>
                </Wrapper>
                
               {!!data.length ? data.map(item => (
                       <Wrapper key={item.country} display={'flex'} jc={'space-between'}>
                   <Wrapper display={'flex'} ai={'center'}>
                        <StyledImage src={item.imageURLforFirstCardItem} />
                        <Wrapper>
                            <H2 fz={'16'}>{item.title}</H2>
                            <Paragraph color={'#000'}  fs={'16'}>{item.price} сом</Paragraph>
                        </Wrapper>
                    </Wrapper>
                   <Wrapper display={'flex'} ai={'flex-end'} fd={'column'} height={'70'}>
                        <Button onClick={() => removeItem(item.id)} fs={'20'} width={'35'} height={'35'} color={'#C4C4C4'}>&#10005;</Button>
                    <Wrapper display={'flex'} ai={'center'} pb={'0'} >
                        <Button mr={'5'} border={'1px solid #2E2E2E'} br={'50'} fs={'24'} color={'#2E2E2E'} width={'35'} height={'35'} onClick={() => increment(item.id)}>+</Button>
                        <Paragraph mt={'24'} color={'#2E2E2E'} fs={'24'}>{item.quantity}</Paragraph>
                        <Button ml={'5'} border={'1px solid #2E2E2E'} br={'50'}  fs={'24'} color={'#2E2E2E'} width={'35'}  height={'35'} onClick={() => decrement({quantity: item.quantity,id: item.id})}>-</Button>
                    </Wrapper>
                    </Wrapper>
                    
                   </Wrapper>
               )) : <H2>Вы еще ничего не выбрали</H2>}
               {!!data.length ? <Button onClick={() => console.log('click')} fs={'14'} color='#32564A'  height={'40'} background={'#C4D8B7'} br={'20'}>Оформить заказ на </Button> : ''}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        data: state.selectedItems
    }
}

export default connect(mapStateToProps, null)(Basket)