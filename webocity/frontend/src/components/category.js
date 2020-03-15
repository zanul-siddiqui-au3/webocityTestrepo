import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function CategoryC(props) {
  return (
    <React.Fragment>
      <div>
        <Nav
          style={{
            borderBottom: "2px solid grey",
            boxShadow: "0px 15px 10px -15px #111"
          }}
        >
          <NavItem>
            <NavLink href="#" style={{ color: "black", marginLeft: "50px" }}>
              Mothers Day
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              BirthDay
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Anniversary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Flowers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Cake
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Personalised
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Plant
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Other Gifts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: "black" }}>
              Ocassions
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </React.Fragment>
  );
}

export default CategoryC;
