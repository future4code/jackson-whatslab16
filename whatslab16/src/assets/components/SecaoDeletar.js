import React from 'react'
import styled from 'styled-components'

const IconeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const IconeImagem = styled.img`
  width: 25px;
`


export function SecaoDeletar(props) {
  return (
    <IconeContainer>
      <IconeImagem alt={ 'Cancelar' } src={ props.cancelar } onClick={ props.onClickCancelar } />
      <IconeImagem alt={ 'Deletar' } src={ props.deletar } onClick={ props.onClickDeletar } />
    </IconeContainer>
  )
}