import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
// -------------- Componets
import Navbar from "./navbar";
import CategoryC from "./category";
import ShowImage from "./showImage";
import ShowDetails from "./showDetails";

function ProductDetails(props) {
  const [ProductDetails, setProductDetails] = useState({});

  const fetchDetails = async () => {
    try {
      const ProductData = await axios.get(
        `http://localhost:5000/api/products/${props.match.params.id}`
      );
      setProductDetails(ProductData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <CategoryC />
      <div className="container" style={{ marginTop: "10px" }}>
        <Row>
          <Col xs="5">
            {ProductDetails.id ? <ShowImage data={ProductDetails} /> : null}
          </Col>
          <Col xs="7">
            {ProductDetails.id ? <ShowDetails data={ProductDetails} /> : null}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default ProductDetails;
