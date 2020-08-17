import React from 'react'
import styled from 'styled-components'
import iconeCancelar from '../img/clear.svg'
import iconeDeletar from '../img/delete.svg'

const MensagemLinha = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const MensagemContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column; 
`

const NomeUsuario = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`

export class Mensagem extends React.Component {
  state = {
    deletando: false
  }

  duploClique = () => {
    this.setState({ deletando: !this.state.deletando })
  }

  onClickCancelar = () => {
    this.setState({ deletando: false })
  }

  onClickDeletar = () => {
    this.setState({ deletando: false })
    this.props.deletarMensagem(this.props.mensagem)
  }  

  render() {

    let componenteDeletar

    if (this.state.deletando) {
      componenteDeletar = <div> Deletar esta mensagem?
        <img alt={ 'Cancelar' } src={ iconeCancelar } onClick={ this.onClickCancelar } />
        <img alt={ 'Deletar' } src={ iconeDeletar } onClick={ this.onClickDeletar } />
      </div>
    }

    return(
      <MensagemLinha onDoubleClick={this.duploClique}>
        <MensagemContainer>
          <NomeUsuario>{this.props.mensagem.nome}</NomeUsuario>
          {this.props.mensagem.texto}
        </MensagemContainer>
        { componenteDeletar }
      </MensagemLinha>
    )
  }
}