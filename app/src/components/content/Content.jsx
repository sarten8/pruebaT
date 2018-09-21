import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import store from '../../store'

const Titulo = styled.h1`
    color: #FFF;
`

const Mensaje = styled.h3`
  text-align: left;
  margin-top: 5%;
  padding-left: 2%;
  background: #3c5779;
  color: #FEE;
  font-size: 19px;
  width: 100%;
  height: 30px;
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
        this.addMessage = this.addMessage.bind(this);

        store.subscribe( () => {
            this.setState({
                mensaje: store.getState().mensaje
            })
        })
    }

    enviarTexto(e) {
        e.preventDefault();

        axios.post('http://localhost:3002/mensaje/', {
            msg: this.state.texto
        })
        .then(res => {
            console.log(res.data)
            this.addMessage(res.data)
        })
        .catch(err => this.addMessage(`ERROR: ${ err }`))
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
                        <Texto type="text" name="name" onChange={ this.updateTexto } />
                    </label>
                    <Button type="submit"> Enviar </Button>
                </form>

                <Mensaje><span>{this.state.mensaje}</span></Mensaje>
            </Contenedor>
        )
    }

    addMessage(mensaje) {
        store.dispatch({
            type: "ADD_MESSAGE",
            mensaje
        })
    }
}

export default Content;