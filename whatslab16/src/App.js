import React from 'react'
import styled from 'styled-components'
import { MensagemForm } from './assets/components/MensagemForm'

const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid #000;
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
`

const NomeUsuario = styled.span`
  font-weight: bold;
`

export default class App extends React.Component {

  state = {
    mensagens: []
  }

  enviarMensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] })
  }

  render() {
    return (
      <AppContainer>
        <MensagensContainer>
          {
            this.state.mensagens.map((mensagem) =>
              <p><NomeUsuario>{mensagem.nome + ': '}</NomeUsuario>{mensagem.texto}</p>
            )}
        </MensagensContainer>
        <MensagemForm enviarMensagem={this.enviarMensagem} />
      </AppContainer>
    );
  }
}

