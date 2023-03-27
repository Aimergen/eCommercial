import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {CiDeliveryTruck} from 'react-icons/ci';
import {AiOutlineUser ,AiOutlineHeart} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../../components/style.css'
import {  Nav, NavDropdown } from "react-bootstrap";

function ContainerInsideExample() {
  return (
    <>
    <Navbar expand="lg" variant="light" bg="light">
      <Container >
        <Row className='w-100'>
            <Col xs={8}>
                <Navbar.Brand href="#">Need help? Call us: (+98) 0234 456 789r</Navbar.Brand>
            </Col>
            <Col xs={4} md={4}>    
                    <HiOutlineLocationMarker/> Our store &nbsp;&nbsp;
                    <CiDeliveryTruck /> Track you order    
            </Col>
        </Row>
      </Container>
    </Navbar>      
        {/* second nav */}
    <Navbar style={{background: "#003F62", color: '#fff', height: '80px'}}>
        <Container>
            <Row className='w-100'>
                <Col xs={2} className='d-flex justify-content-between align-items-center'>
                    <img src='/logo.svg'/>
                </Col>
                <Col xs={6} style={{width: '440px', height: '56px', background: '#fff', borderRadius: '20px', color: '#292D32'}}>
                    <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Col xs={6}>
                            Search any think
                        </Col>
                        <Col xs={6} style={{width: '132px', height: '56px', borderRadius: '20px', background: '#EDA415',display:'flex', justifyContent:'center' , alignItems: 'center'}}>
                            Search
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="d-flex justify-content-end align-items-center">
                    <AiOutlineUser/>&nbsp;&nbsp; Sign in &nbsp;&nbsp;
                    <AiOutlineHeart/> &nbsp;&nbsp;0 &nbsp;&nbsp;
                    <SlBasket/> &nbsp;&nbsp;0 &nbsp;&nbsp;
                </Col>
            </Row>
        </Container>  
    </Navbar>
    {/* Third nav */}
    <Navbar expand="lg" variant="light" bg="light" style={{padding: '0'}}>
      <Container >
        <Row className='w-100 d-flex justify-content-between align-items-center'>
            <Col xs={2} style={{margin: '0'}} > 
                <Nav className="h-100">
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Browse categories"
                    className="w-100 h-100 s d-flex justify-content-end align-items-center p-3 "
                >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Col>
            <Col xs={6}>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="1" flush>
                          <Accordion.Item eventKey='0'>
                            <Accordion.Header>Home</Accordion.Header>
                            <Accordion.Body>
                                End undsen tsesnudd bn
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="1" flush>
                          <Accordion.Item eventKey='0'>
                            <Accordion.Header>Catalog</Accordion.Header>
                            <Accordion.Body>
                                Cataloguudiin tsugluulag
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                       <Button variant='outline-none'>
                            Blog
                       </Button>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="1" flush>
                          <Accordion.Item eventKey='0'>
                            <Accordion.Header>Pages</Accordion.Header>
                            <Accordion.Body>
                                End undsen tsesnudd bn
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <Alert variant='light'>
                            <Button variant='outline-none'>
                                About us
                            </Button>
                        </Alert>
                    </Col>
                </Row>
            </Col>
            <Col  md={4}>    
                30 Days Free Return   
            </Col>
        </Row>
      </Container>
    </Navbar>     
    </>
  );
}

export default ContainerInsideExample;
