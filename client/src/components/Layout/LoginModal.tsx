import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LoginModal = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <Modal backdrop="static" keyboard={false} onHide={close} show={open}>
      <Modal.Header closeButton>로그인</Modal.Header>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('login')
        }}
      >
        <Modal.Body>로그인 폼</Modal.Body>
        <Modal.Footer>
          <Button onClick={close} variant="danger">
            취소
          </Button>
          <Button variant="success" type="submit">
            로그인
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default LoginModal
