import React from 'react'
import styled from 'styled-components'

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

export function Mensagem (props) {

  const duploClique = () => {
  if (window.confirm('Tem certeza que deseja deletar essa mensagem?')) {
    props.deletarMensagem(props.mensagem)
  }
}



  return(
    <MensagemLinha onDoubleClick={ duploClique }>
      <MensagemContainer>
        <NomeUsuario>{ props.mensagem.nome }</NomeUsuario>
        { props.mensagem.texto }
      </MensagemContainer>
    </MensagemLinha>
  )

}