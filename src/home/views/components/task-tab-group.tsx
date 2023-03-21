import React from "react";
import { ListGroup, Row, Col, FormCheck, Tab, Tabs, Badge, Button } from "react-bootstrap";
import { ArrowRight, Trash, Pencil } from 'react-bootstrap-icons';
import { MDBBtn } from "mdb-react-ui-kit";
interface Props{
    firstTabDescription: string;
    secondTabDescription: string;
}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="new" title="Novas">
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col className="py-3 px-3" >
                                                            <span>No style</span>
                                                        </Col>
                                                        <Col sm='1'>
                                                        <Button variant="primary"className="py-0 px-0 mx-4">Editar</Button>
                                                        
                                                         
                                                         <Col>
                                                         
                                                         </Col>
                                                         <Button variant="danger"className="py-0 px-0 mx-4">Delete</Button>
                                                        
                                                        </Col>
                                                       
                                                        
                                                       
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col className="py-3 px-3">
                                                            <span>No style</span>
                                                           
                                                        </Col >
                                                        <Col sm='1'>
                                                        <Button variant="primary"className="py-0 px-0 mx-4">Editar</Button>
                                                        
                                                         
                                                         <Col>
                                                         
                                                         </Col>
                                                         <Button variant="danger"className="py-0 px-0 mx-4">Delete</Button>
                                                        
                                                        </Col>
                                                        
                                                        
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col className="py-3 px-3">
                                                            <span>No style</span>
                                                           
                                                           
                                                           
                                                          
                                                          
                                                        </Col>
                                                        <Col sm='1'>
                                                        <Button variant="primary"className="py-0 px-0 mx-4">Editar</Button>
                                                        
                                                         
                                                         <Col>
                                                         
                                                         </Col>
                                                         <Button variant="danger"className="py-0 px-0 mx-4">Delete</Button>
                                                        
                                                        </Col>
                                                        
                                                        
                                                        
                                                         
                                                      
                                                        
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                        </Tab>
                                        <Tab eventKey="done" title="Concluídas">
                                            
                                        </Tab>                                        
                                    </Tabs>
                                                        
        )
    }
        
}
