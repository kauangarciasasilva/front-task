import React from "react";
import { ListGroup, Row, Col, FormCheck, Tab, Tabs, Badge } from "react-bootstrap";
import { ArrowRight, Trash, Pencil } from 'react-bootstrap-icons';
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
                                                        <Col>
                                                            <span>No style</span>
                                                        </Col>
                                                        <Col sm='1'>
                                                         <Trash/>
                                                         <Pencil/>
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
                                                        <Col>
                                                            <span>No style</span>
                                                            
                                                        </Col>
                                                        <Col sm='1'>
                                                         <Trash/>
                                                         <Pencil/>
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
                                                        <Col>
                                                            <span>No style</span>
                                                           
                                                           
                                                           
                                                          
                                                          
                                                        </Col>
                                                        <Col sm='1'className="mx-5">
                                                         <Trash/>
                                                         <Col>
                                                         <Pencil/>
                                                         </Col>
                                                         
                                                         
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
