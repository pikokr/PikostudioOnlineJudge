import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import apollo from '../../apollo'
import { gql } from '@apollo/client'

const LoginModal = ({ open, close }: { open: boolean; close: () => void }) => {
  const [id, setID] = React.useState('')
  const [pw, setPW] = React.useState('')

  return (
    <Modal backdrop="static" keyboard={false} onHide={close} show={open}>
      <Modal.Header closeButton>로그인</Modal.Header>
      <Form
        onSubmit={async (e) => {
          e.preventDefault()
          const data = await apollo.mutate({
            mutation: gql`
              mutation($id: String!, $password: String!) {
                login(id: $id, password: $password)
              }
            `,
            variables: { id, password: pw },
          })
          console.log(data.data)
        }}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => setPW(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close} variant="danger">
            취소
          </Button>
          <Button variant="success" type="submit">
            로그인
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default LoginModal
