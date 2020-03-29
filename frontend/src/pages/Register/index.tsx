import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

const Register: React.FC = () => (
  <Container>
    <Content>
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pesssoas a encontrarem
          os casos da sua ONG
        </p>

        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#e02041" />
          Não tenho cadastro
        </Link>
      </section>

      <form>
        <input type="text" placeholder="Nome da ONG" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="WhatsApp" />

        <div>
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </Content>
  </Container>
)

export default Register
