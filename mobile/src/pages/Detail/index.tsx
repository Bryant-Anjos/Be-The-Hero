import React from 'react'
import { Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Mailer from 'react-native-mail'

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles'

import logoImg from '../../assets/logo.png'

const Detail = () => {
  const navigation = useNavigation()
  const message = 'Uma mensagem de teste'

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    Mailer.mail(
      {
        subject: 'Mensagem de teste',
        recipients: ['teste@email.com'],
        body: message,
        isHTML: false,
      },
      (error, event) => {
        console.log(error)
      }
    )
  }

  function sendWhasapp() {
    Linking.openURL(`whatsapp://send?phone=5517992232920&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhasapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  )
}

export default Detail
