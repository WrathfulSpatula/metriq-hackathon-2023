import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const MainNavLeft = () =>
  <Nav className='metriq-navbar'>
    <Nav.Link as={NavLink} activeClassName='active-navlink' to='/About' eventKey='6'><p className='metriq-navbar-text'>About</p></Nav.Link>
    <Nav.Link as={NavLink} activeClassName='active-navlink' to='/Partners' eventKey='7'><p className='metriq-navbar-text'>Partners</p></Nav.Link>
    <Nav.Link as={NavLink} activeClassName='active-navlink' to='/FAQ' eventKey='8'><p className='metriq-navbar-text'>F.A.Q.</p></Nav.Link>
    <Nav.Link as={NavLink} activeClassName='active-navlink' to='/UserGuidelines' eventKey='9'><p className='metriq-navbar-text'>User Guidelines</p></Nav.Link>
    <Nav.Link as={NavLink} activeClassName='active-navlink' to='/Register' eventKey='10'><p className='metriq-navbar-text'>Register</p></Nav.Link>
  </Nav>

export default MainNavLeft
