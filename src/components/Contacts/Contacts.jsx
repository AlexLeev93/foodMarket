import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '../../icons/InstagramIcon'
import WhatsUpIcon from '../../icons/WhatsUpIcon'
import { Line } from '../Line'
import { Paragraph } from '../Paragraph'
import { Wrapper } from '../Wrapper'

const ContactsWrapper = styled.div`
    height: 254px;
    padding-left: 16px;
    padding-right: 16px;
    background: #000000;
`

const Contacts = () => {
    return(
        <ContactsWrapper >
            <Wrapper display='flex' jc='flex-end'>
                <InstagramIcon mt={20} mr={18} />
                <WhatsUpIcon mt={20} mr={5}/>
            </Wrapper>
            <Paragraph>+7 701 777 77 77</Paragraph>
            <Line width={84} mt={'26'}/>
            <Paragraph mt={16}>Договор-оферта</Paragraph>
            <Paragraph mt={16}>Обработка персональных данных</Paragraph>
        </ContactsWrapper>
    )
}

export default Contacts;