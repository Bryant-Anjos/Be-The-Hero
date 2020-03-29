import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

const NewIncident = () => (
  <Container>
    <Content>
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>Cadastrar novo caso</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pesssoas a encontrarem
          os casos da sua ONG
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para a página inicial
        </Link>
      </section>

      <form>
        <input type="text" placeholder="Título do caso" />
        <textarea placeholder="Descrição" />
        <input type="text" placeholder="Valor em reais" />

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </Content>
  </Container>
)

export default NewIncident
