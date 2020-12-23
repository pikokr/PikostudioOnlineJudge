import React from 'react'
import { Nav, Navbar, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'
import { useQuery } from '@apollo/client'
import GET_CURRENT_USER from '../../queries/GET_CURRENT_USER'

const Header = () => {
  const [login, setLogin] = React.useState(false)
  const user = useQuery(GET_CURRENT_USER)

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
            {user.loading ? (
              <Nav.Item>
                <Nav.Link>
                  <Spinner animation="border" />
                </Nav.Link>
              </Nav.Item>
            ) : user.data && user.data.me && user.data.me.user.id ? null : (
              <Nav.Item>
                <Nav.Link onClick={() => setLogin(true)}>로그인</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal open={login} close={() => setLogin(false)} />
    </>
  )
}

export default Header
