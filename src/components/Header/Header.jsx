import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  background-color: #C3D5B6;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px
`

const Header = ({ name }) => <H1>{name}</H1>;

export default Header;