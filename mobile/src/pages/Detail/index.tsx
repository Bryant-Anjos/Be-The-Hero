import React from 'react'
import { Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Mailer from 'react-native-mail'

import Incident from '../../interfaces/Incident'
import Ong from '../../interfaces/Ong'

import {
  Container,
  Header,
  IncidentView,
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

type DetailScreenRouteProp = {
  incident: { incident: Incident & Ong }
}

const Detail = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<DetailScreenRouteProp, 'incident'>>()

  const { incident } = route.params
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    Mailer.mail(
      {
        subject: `Herói do caso ${incident.name}`,
        recipients: [incident.email],
        body: message,
        isHTML: false,
      },
      (err) => {
        console.log(err)
      }
    )
  }

  function sendWhasapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    )
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </Header>

      <IncidentView>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </IncidentValue>
      </IncidentView>

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
