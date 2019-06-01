import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Main from './components/main'

const AppNavigator = createSwitchNavigator({
  Main,
})

export default createAppContainer(AppNavigator)
