import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

// --------------------------------------------- Context

import CountContext from "../context/countContext";

function ShowDetails(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate({ date });
  };
  const toggle = () => setDropdownOpen(prevState => !prevState);

  //   ----------------------------- Use Context
  const Count = useContext(CountContext);

  return (
    <React.Fragment>
      <p style={{ marginTop: "55px", fontWeight: "bold" }}>
        {props.data.product_name}
      </p>
      <h5 style={{ color: "red", fontSize: "80px" }}>
        <sup> $ </sup>
        {props.data.price}
      </h5>
      <p>Inclusive All Taxes</p>
      <div style={{ display: "flex" }}>
        <div className="dropDown" style={{ width: "40%" }}>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret style={{ width: "100%" }}>
              {" "}
              Deliver To
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Dubai</DropdownItem>
              <DropdownItem>Abu Dhabi</DropdownItem>
              <DropdownItem>Sharjah</DropdownItem>
              <DropdownItem>Ajamn</DropdownItem>
              <DropdownItem>Al Ain</DropdownItem>
              <DropdownItem>Umm Al Quwain</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="date" style={{ width: "40%" }}>
          <Button
            color="secondary"
            size="lg"
            style={{ width: "100%", marginLeft: "50px", height: "40px" }}
            onClick={() => setShowDate(!showDate)}
          >
            Select Date
          </Button>
          {showDate ? (
            <Calendar onChange={() => onChange()} value={date} />
          ) : null}
        </div>
      </div>
      <br />
      <div className="actionBtn">
        <Button
          color="success"
          style={{ width: "40%" }}
          disabled={Count.countData < 4 ? false : true}
          onClick={() => Count.countDispatcher({ type: "Add_To_Cart" })}
        >
          Add To Cart
        </Button>
        <Button color="warning" style={{ width: "40%", marginLeft: "50px" }}>
          Buy Now
        </Button>
      </div>
      <br />
      <div className="Description">
        <h6>Description</h6>
        <hr />
        <p>Product Details</p>
        <ul>
          {props.data.product_details.map((Element, i) => {
            return <li key={i}>{Element}</li>;
          })}
        </ul>
      </div>
      <br />
      <div className="careInstruction">
        <p>Care Instructions</p>
        <ul>
          {props.data.care_instructions.map((Element, i) => {
            return <li key={i}>{Element}</li>;
          })}
        </ul>
      </div>
      <hr />
      <div className="note">
        <p>
          Note : <br /> {props.data.note}
        </p>
      </div>
    </React.Fragment>
  );
}

export default ShowDetails;
