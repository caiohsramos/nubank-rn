import React from 'react'
import { Container, Top, Logo, Title } from "./styles"
import logo from "../../assets/Nubank_Logo.png"
import { MaterialIcons } from '@expo/vector-icons'

export default () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Caio</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  )
}