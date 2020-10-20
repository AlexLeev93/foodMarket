import React from "react";
import styled from "styled-components";
import { device } from "../utils/devices";
import { Button } from "./Buttons";
import { H2 } from "./H2";
import { Paragraph } from "./Paragraph";
import { Wrapper } from "./Wrapper";

const Image = styled.img`
    width: 100%;
    height: 165px;
    @media ${device.laptop} {
      height: 165px;
    }
`;


const WorldFoodCardItem = ({ path, pr, pl, title, price, addItem, id }) => (
  <Wrapper display={'flex'} fd={'column'} pr={pr} pl={pl}>
    <Image isChange={true} src={path}  />
    <H2 fz={'16'} lh={'19'} mb={0} ta={'center'} color={'#000000'}>{title}</H2> 
    <Paragraph color={'#000000'} mt={'23'} fw={200} fs={12} lh={15} ta={'center'}>
        Спагетти с беконом и сыром
        пармезан со сливочным
        кремом из шампиньонов и
        трюфелей.
    </Paragraph>
    <Paragraph color={'#000000'} ta={'center'} fs={'18'} lh={'21'}>
        {price} сом
    </Paragraph>
    <Button onClick={() => addItem(id)} fs={'14'} color='#32564A'  height={'40'} background={'#C4D8B7'} br={'20'}>В корзину</Button>
  </Wrapper>
);

export default WorldFoodCardItem;