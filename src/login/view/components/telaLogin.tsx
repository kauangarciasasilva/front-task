import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Container, NavDropdown, Button } from "react-bootstrap";




export default class Tela extends React.Component{
    render(){
        return(
            <div className="cortela vh-100 ">
            <MDBContainer className="container py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="12" xl="4">
                  <MDBCard >
                    <MDBCardBody className="text-center">
                      <div className="mt-3 mb-4">
                        <MDBCardImage src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1556952644.jpg"
                          className="rounded-circle" fluid style={{ width: '100px' }} />
                      </div>
                      <MDBTypography tag="h4">***********</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                      <i className="bi bi-pencil-square"></i>
                      </MDBCardText>
                      <div className="mb-4 pb-2">
                        
                      </div>
                      <Container className="px-2 py-5">
                      
                        <NavDropdown title="Alterar" id="basic-nav-dropdown">
                         
                            <NavDropdown.Item href="#action/3.2">
                             link
                            </NavDropdown.Item>
                                 
                            <NavDropdown.Item href="#action/3.4">
                              link
                           </NavDropdown.Item>
                        </NavDropdown>
                      
                      </Container>
                      <MDBBtn rounded size="lg" className="py-1 px-1 mx-3">
                        confirma
                      </MDBBtn>
                      <MDBBtn rounded size="lg" className="py-1 px-1">
                        sair
                      </MDBBtn>
                      <div className="d-flex justify-content-between text-center mt-5 mb-2">
                        
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        )
    }
}