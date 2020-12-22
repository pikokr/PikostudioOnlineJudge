import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'

const Header = () => {
  const [login, setLogin] = React.useState(false)

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          PIKOSTUDIO JUDGE
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>문제</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link onClick={() => setLogin(true)}>로그인</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal open={login} close={() => setLogin(false)} />
    </>
  )
}

export default Header
