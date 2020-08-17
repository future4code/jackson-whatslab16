import React from 'react'
import styled from 'styled-components'
import iconeCancelar from '../img/clear.svg'
import iconeDeletar from '../img/delete.svg'
import { SecaoDeletar } from './SecaoDeletar'

const MensagemLinha = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const MensagemContainer = styled.div`
  max-width: 40%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 7.5px;
  text-align: ${ props => props.posicao };
  align-self: ${ props => {
    if (props.posicao === 'right'){
      return 'flex-end'
    }else {
      return 'flex-start'
    }
  } };
  display: flex;
  flex-direction: column;
  background-color: ${ props => {
    if (props.posicao === 'right') {
      return '#DCF8C6'
    } else {
      return '#FFF'
    }
  } };
  box-shadow: 0 1px .5px rgba(0, 0, 0, .13);
  font-size: 14px;
`

const NomeUsuario = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #E542A3;
`

const DeletarContainer = styled.div`
  max-width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 22px 24px 20px;
  margin: 10px;
  background-color: #FFF;
  border-radius: 3px;
  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, .19),0 12px 15px 0 rgba(0, 0, 0, .24);
`

const ConfirmarDeletar = styled.p`
  margin-top: 0;
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
    let posicao
    let usuario

    if (this.props.mensagem.nome === 'eu') {
      posicao = 'right'
    } else {
      posicao = 'left'
      usuario = <NomeUsuario>{ this.props.mensagem.nome }</NomeUsuario>
    }

    let componenteDeletar

    if (this.state.deletando) {
      componenteDeletar = <DeletarContainer>
        <ConfirmarDeletar>Deletar esta mensagem?</ConfirmarDeletar>
        <SecaoDeletar
          cancelar={ iconeCancelar }
          deletar={ iconeDeletar }
          onClickCancelar={ this.onClickCancelar }
          onClickDeletar={ this.onClickDeletar }
        />
      </DeletarContainer>
    }

    return(
      <MensagemLinha onDoubleClick={this.duploClique}>
        <MensagemContainer posicao={ posicao }>
          { usuario }
          {this.props.mensagem.texto}
        </MensagemContainer>
        { componenteDeletar }
      </MensagemLinha>
    )
  }
}