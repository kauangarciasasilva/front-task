import React from "react";

import AvatarGroup from '@mui/material/AvatarGroup'
import { Navbar, Container, NavDropdown, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";

interface Props{

}

export default class NavBar extends React.Component<Props>{
    render(){
        return(
           
            <div className="">

            
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                    <Navbar.Brand href="#" className="px-0">ListTask</Navbar.Brand>
                    
                    
                    <NavDropdown  className="navbar-toggler-icon" id="collasible-nav-dropdown" title={""}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    

                    </Container>
                    
                    <Avatar alt="Remy Sharp" className="mx-1" src="/static/images/avatar/1.jpg" />
                    <DropdownButton  variant="dark" bg="dark"as={ButtonGroup }title=""id="bg-vertical-dropdown-2">
                       
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                   </DropdownButton>
                    
                    
                    
                            
                </Navbar>
              </div>

           
        )
    }
}