import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          PIKOSTUDIO JUDGE
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
