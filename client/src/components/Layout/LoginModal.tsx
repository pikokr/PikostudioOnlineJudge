import React from 'react'
import { Modal } from 'react-bootstrap'

const LoginModal = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <Modal backdrop="static" keyboard={false} onHide={close} show={open}>
      <Modal.Header closeButton>로그인</Modal.Header>
    </Modal>
  )
}

export default LoginModal
