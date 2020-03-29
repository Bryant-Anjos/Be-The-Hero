import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import Ong from '../../interfaces/Ong'

import { Container, Form } from './styles'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

const Logon: React.FC = () => {
  const [id, setId] = useState('')

  const history = useHistory()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    try {
      const response = await api.post<Ong>('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Form>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  )
}

export default Logon
