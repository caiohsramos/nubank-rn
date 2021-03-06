import React from 'react'
import PropTypes from 'prop-types'
import QRCode from 'react-native-qrcode-svg'
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles'

const Menu = ({ translateY }) => (
  <Container style={{
    opacity: translateY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
    }),
  }}
  >
    <Code>
      <QRCode value="google.com" size={80} backgroundColor="#FFF" color="#8B10AE" />
    </Code>
    <Nav>
      <NavItem>
        <MaterialIcons name="help-outline" size={20} color="#FFF" />
        <NavText>Me ajuda</NavText>
      </NavItem>
      <NavItem>
        <MaterialIcons name="person-outline" size={20} color="#FFF" />
        <NavText>Perfil</NavText>
      </NavItem>
      <NavItem>
        <MaterialIcons name="credit-card" size={20} color="#FFF" />
        <NavText>Configurar cartão</NavText>
      </NavItem>
      <NavItem>
        <MaterialIcons name="smartphone" size={20} color="#FFF" />
        <NavText>Configurações do app</NavText>
      </NavItem>
    </Nav>
    <SignOutButton onPress={() => { }}>
      <SignOutButtonText>
        SAIR DO APP
      </SignOutButtonText>
    </SignOutButton>

  </Container>
)

Menu.propTypes = {
  translateY: PropTypes.shape({
    interpolate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Menu
