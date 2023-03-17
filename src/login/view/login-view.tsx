import React from "react";
import { Card, Col, Container,Row} from "react-bootstrap";


interface Props{
    
}

export default class HomeView extends React.Component<Props >{

    render(){
         
        return (
            
                
                   

            <div className="">
               

                <Container className="vh-100">                    
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                        
                            <Card>
                               
                                <Card.Body className="py-5 px-5 corTask"> 
                                        
                                    
                                                                      
                                    
                                </Card.Body>
                            </Card>
                        </Col>                    
                    </Row>
                </Container> 
                </div>
        
        );
    }
}