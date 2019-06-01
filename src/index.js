import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { StatusBar } from 'react-native'
import Router from './routes'

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Router />
  </>
)

export default App
