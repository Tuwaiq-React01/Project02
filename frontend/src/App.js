import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AcedmyScreen from './screens/AcedmyScreen'
import CustomersScreen from './screens/CustomersScreen'
import OrdersScreen from './screens/OrdersScreen'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b22a00',
    },
    secondary: {
      main: '#482880',
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/orders" component={OrdersScreen} />
          <Route path="/customers" component={CustomersScreen} />
          <Route path="/" component={AcedmyScreen} exact />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
