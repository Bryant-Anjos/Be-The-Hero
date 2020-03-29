import React, { useState, useEffect } from 'react'
import { Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import api from '../../services/api'
import Incident from '../../interfaces/Incident'

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentView,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles'

import logoImg from '../../assets/logo.png'

const Incidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [total, setTotal] = useState(0)

  const navigation = useNavigation()

  function navigateToDetail(incident: Incident) {
    navigation.navigate('Detail', { incident })
  }

  useEffect(() => {
    api.get<Incident[]>('incidents').then((response) => {
      setIncidents(response.data)
      setTotal(response.headers['x-total-count'])
    })
  }, [])

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>.
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos caso abaixo e salve o dia.</Description>

      <FlatList<Incident>
        style={{ marginTop: 32 }}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <IncidentView>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.description}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </IncidentValue>

            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </IncidentView>
        )}
      />
    </Container>
  )
}

export default Incidents
