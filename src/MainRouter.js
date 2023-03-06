import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './views/Home'
import Register from './views/Register'
import About from './views/About'
import Partners from './views/Partners'
import FAQ from './views/FAQ'
import NotFound from './views/NotFound'
import UserGuidelines from './views/UserGuidelines'
import MainNavbar from './components/MainNavbar'

const MainRouter = () => {
  return (
    <Router>
      <MainNavbar title='Metriq Hackathon, March 2023' subtitle={<span>Make <a target="_blank" href="https://metriq.info/AddSubmission">submissions</a> and tackle <a target="_blank" href="https://github.com/unitaryfund/metriq-app/issues">issues</a> to win stickers and swag!</span>} />
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          exact
          path='/Register'
          component={Register}
        />
        <Route
          exact
          path='/About'
          component={About}
        />
        <Route
          exact
          path='/Partners'
          component={Partners}
        />
        <Route
          exact
          path='/FAQ'
          component={FAQ}
        />
        <Route
          exact
          path='/UserGuidelines'
          component={UserGuidelines}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default MainRouter
