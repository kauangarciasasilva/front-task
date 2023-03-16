import React from "react";
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Navbar, Container } from "react-bootstrap";

interface Props{

}

export default class NavBar extends React.Component<Props>{
    render(){
        return(
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand href="#">NavBar</Navbar.Brand>
                  
                 <span className="navbar-toggler-icon"></span>
                  

                </Container>
                <AvatarGroup>
                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </AvatarGroup>
               
                
                
                  
                          
            </Navbar>
               

           
        )
    }
}