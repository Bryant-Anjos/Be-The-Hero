import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles'

import logoImg from '../../assets/logo.png'

const Incidents = () => {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>.
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos caso abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>Cadelinha atropelada</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>R$ 120,00</IncidentValue>

            <DetailsButton onPress={navigateToDetail}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  )
}

export default Incidents
