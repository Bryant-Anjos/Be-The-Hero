import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import Incident from '../../interfaces/Incident'

import IncidentComponent from './Incident'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'

const Profile: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  const history = useHistory()

  useEffect(() => {
    api
      .get<Incident[]>('profiles', {
        headers: {
          Authorization: ongId,
        },
      })
      .then(response => {
        setIncidents(response.data)
      })
  }, [ongId])

  async function handleDeletIncident(id: number) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()

    history.push('/')
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <IncidentComponent
            key={incident.id}
            incident={incident}
            handleClick={handleDeletIncident}
          />
        ))}
      </ul>
    </Container>
  )
}

export default Profile
