import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Button,
  NavbarText
} from "reactstrap";

// ----------------------- Context

import CountContext from "../context/countContext";

function NavbarC(props) {
  const [isOpen, setIsOpen] = useState(false);
  const Count = useContext(CountContext);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar color="success" expand="md" light>
        <NavbarBrand href="/" style={{ color: "white" }}>
          Logo
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem style={{ width: "400px", display: "flex" }}>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="search placeholder"
              />
              <Button color="warning" style={{}}>
                Search
              </Button>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              {/* <div> */}
              <NavbarText
                style={{
                  color: "white",
                  marginRight: "25px",
                  marginLeft: "650px"
                }}
              >
                Help
              </NavbarText>
              <NavbarText
                style={{
                  color: "white",
                  marginRight: "25px",
                  marginLeft: "25px"
                }}
              >
                Coporate
              </NavbarText>
              <NavbarText
                style={{
                  color: "white",
                  marginRight: "25px",
                  marginLeft: "25px"
                }}
              >
                Cart {Count.countData}
              </NavbarText>
              <NavbarText
                style={{
                  color: "white",
                  marginRight: "25px",
                  marginLeft: "25px"
                }}
              >
                Account
              </NavbarText>
              {/* </div> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarC;
