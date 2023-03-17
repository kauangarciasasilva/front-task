import React from "react";
import { Card, Col, Container,Row} from "react-bootstrap";
import Tela from "./components/telaLogin";




interface Props{
    
}

export default class HomeView extends React.Component<Props >{

    render(){
         
        return (
            
                
                   

            <div className="cortela">
               

                <Container className="vh-100 cortela">                    
                    <Row >
                        <Col>
                        
                               
                                
                              <Tela/>
                                                                      
                                
                            
                        </Col>                    
                    </Row>
                </Container> 
                </div>
        
        );
    }
}