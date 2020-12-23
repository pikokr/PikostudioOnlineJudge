import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LoginModal = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <Modal backdrop="static" keyboard={false} onHide={close} show={open}>
      <Modal.Header closeButton>로그인</Modal.Header>
      <Modal.Body>대충 로그인 폼</Modal.Body>
      <Modal.Footer>
        <Button onClick={close} variant="danger">
          취소
        </Button>
        <Button variant="success">로그인</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal
