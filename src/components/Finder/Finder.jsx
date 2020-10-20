import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import { Button } from '../Buttons'
import { Input } from '../Input'
import { Line } from '../Line'
import { Wrapper } from '../Wrapper'
import { SearchForm } from '../SearchForm'

const Finder = () => {
    return (
        <Wrapper pt={10} pb={10}>
            <SearchForm>
                <Input type="text" placeholder="Попробуйте что-нибудь найти..."/>
                <Line height='28' border={'#9E9C9C'}/>
                <Button type="submit" width={42} height={38} background={'#fff'} ><SearchIcon/></Button>
            </SearchForm>
        </Wrapper>
    )
}

export default Finder