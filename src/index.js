import React from 'react'
import Router from './routes'
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Router />
    </>
  )
}

export default App