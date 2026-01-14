import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = ({showSidebar, handleSideBar}) => {
  return (
    <>
        <Button variant='primary' onClick={handleSideBar}>Sidebar</Button>
        <Offcanvas show={showSidebar} onHide={handleSideBar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Options
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <hr className='my-4' />
            <Link to='/login' className='btn btn-primary'>Login</Link>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Sidebar