import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles'

const Tabs = ({ translateY }) => (
  <Container style={{
    transform: [{
      translateY: translateY.interpolate({
        inputRange: [0, 320],
        outputRange: [0, 30],
        extrapolate: 'clamp',
      }),
    }],
    opacity: translateY.interpolate({
      inputRange: [0, 320],
      outputRange: [1, 0.3],
      extrapolate: 'clamp',
    }),
  }}
  >
    <TabsContainer>
      <TabItem>
        <MaterialIcons name="person-add" size={24} color="#FFF" />
        <TabText>Indicar Amigos</TabText>
      </TabItem>
      <TabItem>
        <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
        <TabText>Cobrar</TabText>
      </TabItem>
      <TabItem>
        <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
        <TabText>Depositar</TabText>
      </TabItem>
      <TabItem>
        <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
        <TabText>Transferir</TabText>
      </TabItem>
      <TabItem>
        <MaterialIcons name="lock" size={24} color="#FFF" />
        <TabText>Bloquear Cartão</TabText>
      </TabItem>
    </TabsContainer>
  </Container>
)

Tabs.propTypes = {
  translateY: PropTypes.shape({
    interpolate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Tabs
