import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
`

const NomeInput = styled.input`
  width: 100px;
`

const TextoInput = styled.input`
  flex: 1;
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
      const enter = {
        nome: this.state.nomeValor,
        texto: this.state.textoMensagem
      }
      this.props.enviarMensagem(enter)

      this.setState({ nomeValor: '', textoMensagem: '' })
    }
  }

  render() {
    return (
      <FormContainer>
        <NomeInput
          type='text'
          placeholder={'Nome'}
          onChange={this.onChangeNome}
          value={this.state.nomeValor}

        />
        <TextoInput
          type='textbox'
          placeholder={'Mensagem'}
          onChange={this.onChangeMensagem}
          value={this.state.textoMensagem}
          onKeyPress={this.aoApertarEnter}
        />
        <button onClick={this.aoEnviarMensagem}  >Enviar</button>
      </FormContainer>
    )
  }




}