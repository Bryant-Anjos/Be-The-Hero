import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

import Incident from '../../../interfaces/Incident'

import { Container } from './styles'

const IncidentComponent = ({
  incident,
  handleClick,
}: {
  incident: Incident
  handleClick: (id: number) => void
}) => {
  return (
    <Container>
      <strong>Caso:</strong>
      <p>{incident.title}</p>

      <strong>Descrição:</strong>
      <p>{incident.description}</p>

      <strong>Valor:</strong>
      <p>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </p>

      <button onClick={() => handleClick(incident.id)} type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </Container>
  )
}

export default IncidentComponent
