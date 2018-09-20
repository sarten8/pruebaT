import React, {Component} from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg'

const HeaderDiv = styled.header`
  background-color: #1C2833;
  color: white;
  opacity: 1;
  padding: 34px 5% 10px 5%;
  text-align: left;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  width: 80px;
  eight: 80px;
  display: inline-block;
  animation: ${rotate360} 3s linear infinite;
`

const H1 = styled.h1`
  text-align: left;
  font-size: 1.5em;
  display: inline-block;
`

class Header extends Component{
  render() {
    return (
      <HeaderDiv>
        <Logo src={ logo } />
        <H1>App con ReactJs</H1>
      </HeaderDiv>
    )
  }
}

export default Header;