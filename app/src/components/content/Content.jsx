import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Titulo = styled.h1`
    color: #FFF;
`

const Mensaje = styled.div`
  text-align: center;
  margin-top: 2%;
  background: #555;
  color: #FEE;
  font-size: 14px;
  width: 590px;
`

const Contenedor = styled.div`
  text-align: center;
`

const Texto = styled.input`
    display: inline-block;
    border-radius: 3%;
    background-color: #EEF0EF;
    border: none;
    outline: none;
    color: #8C8C8C;
    text-align: left;
    font-size: 18px;
    padding: 20px;
    width: 400px;
    transition: all 0.5s;
    cursor: text;
    margin: 5px 5px;
`

const Button = styled.button`
  display: inline-block;
  border-radius: 10%;
  background-color: #330033;
  border: none;
  outline: none;
  color: #8C8C8C;
  text-align: center;
  font-size: 18px;
  padding: 20px;
  width: 190px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px 5px;
  &:hover {
    cursor: pointer;
    font-size: 20px; 
  }
`

class Content extends Component {

    constructor(){
        super();
        this.state = {
            texto: '',
            mensaje: ''
        }
        this.updateTexto = this.updateTexto.bind(this);
        this.enviarTexto = this.enviarTexto.bind(this);
    }

    enviarTexto(e) {
        e.preventDefault();

        axios.get(`localhost:3002/mensaje/?msg=${ this.state.texto }`)
        .then(res => {
            console.log(res)
        })
        .catch(err => this.setState({ mensaje: `ERROR: ${ err }` }))
    }

    updateTexto(e){
        this.setState({ texto: e.target.value });
    }

    render(){
        return(
            <Contenedor>
                <Titulo>Escriba un mensaje</Titulo>
                
                <form onSubmit={ this.enviarTexto }>
                    <label>
                        <input type="text" name="name" onChange={ this.updateTexto } />
                    </label>
                    <button type="submit"> Enviar </button>
                </form>

                <Mensaje>
                    {
                        this.state.mensaje
                    }
                </Mensaje>
            </Contenedor>
        )
    }
}

export default Content;