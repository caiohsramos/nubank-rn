import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container, Top, Logo, Title,
} from './styles'
import logo from '../../assets/Nubank_Logo.png'

export default () => (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>Caio</Title>
    </Top>
    <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
  </Container>
)
