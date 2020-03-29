import 'react-native-gesture-handler'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import Routes from './src/routes'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return <Routes />
}

export default App
