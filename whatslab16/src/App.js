import React from 'react'
import styled from 'styled-components'
import { MensagemForm } from './assets/components/MensagemForm'
import { Mensagem } from './assets/components/Mensagem'

const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  border: none;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MensagensContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: #E5DDD5;
`

export default class App extends React.Component {
  state = {
    mensagens: []
  }

  enviarMensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] })
  }

  deletarMensagem = (mensagemADeletar) => {
    this.setState({ mensagens: this.state.mensagens.filter(mensagem => {
      if (mensagem !== mensagemADeletar) {
        return true
      } else {
        return false
      }
    })})
  }

  render() {
    return (
      <AppContainer>
        <MensagensContainer>
          {
            this.state.mensagens.map((mensagem) =>
              <Mensagem
                deletarMensagem={ this.deletarMensagem }
                mensagem={ mensagem }
              />)
          }
        </MensagensContainer>
        <MensagemForm enviarMensagem = { this.enviarMensagem } />
      </AppContainer>
    )
  }
}