import React, {Component} from 'react'
import styled from 'styled-components'
import Header from './header/Header.jsx'
import Content from './content/Content.jsx'

const Wrapper = styled.div`
  text-align: center;
`

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Content />
      </Wrapper>
    )
  }
}

export default App;
