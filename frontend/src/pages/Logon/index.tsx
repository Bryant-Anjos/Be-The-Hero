import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import { Container, Form } from './styles'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

const Logon: React.FC = () => (
  <Container>
    <Form>
      <img src={logoImg} alt="Be The Hero" />

      <form>
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="Sua ID" />
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

export default Logon
