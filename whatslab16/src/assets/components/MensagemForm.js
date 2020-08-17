import React from 'react'
import styled from 'styled-components'
import iconeEnviar from '../img/send.svg'

const FormContainer = styled.div`
  height: 4rem;
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem;
  background-color: #F0F0F0;
`

const NomeInput = styled.input`
  width: 100px;
  padding: 9px 12px 11px;
  font-size: 15px;
  border: none;
  border-radius: 21px;
  &:focus {
    outline: none;
  }
`

const TextoInput = styled.input`
  flex: 1;
  padding: 9px 12px 11px;
  font-size: 15px;
  border: none;
  border-radius: 21px;
  &:focus {
    outline: none;
  }
`

const IconeEnviar = styled.img`
  margin: 10px 0;
`



export class MensagemForm extends React.Component {
  state = {
    nomeValor: '',
    textoMensagem: ''
  }



  onChangeNome = (event) => {
    this.setState({ nomeValor: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ textoMensagem: event.target.value })
  }

  aoEnviarMensagem = () => {
    const mensagem = {
      nome: this.state.nomeValor,
      texto: this.state.textoMensagem
    }

    this.props.enviarMensagem(mensagem)

    this.setState({ nomeValor: '', textoMensagem: '' })
  }

  aoApertarEnter = (event) => {

    if (event.key === 'Enter') {
      const mensagem = {
        nome: this.state.nomeValor,
        texto: this.state.textoMensagem
      }
      this.props.enviarMensagem(mensagem)

      this.setState({ textoMensagem: '' })
    }
  }

  render() {
    return (
      <FormContainer>
        <NomeInput
          type='text'
          placeholder={'Nome'}
          onChange={ this.onChangeNome }
          value={ this.state.nomeValor }

        />
        <TextoInput
          type='textbox'
          placeholder={'Mensagem'}
          onChange={ this.onChangeMensagem }
          value={ this.state.textoMensagem }
          onKeyPress={ this.aoApertarEnter }
        />
        <IconeEnviar alt={ 'Enviar' } src={ iconeEnviar } onClick={ this.aoEnviarMensagem } />
      </FormContainer>
    )
  }
}