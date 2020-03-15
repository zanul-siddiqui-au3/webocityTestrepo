import React, { useState } from "react";
import { Row, Col, Card, CardImg } from "reactstrap";

function ShowImage(props) {
  const [mainImage, setMainImage] = useState(props.data.product_image[0]);

  const setImage = url => {
    setMainImage(url);
  };

  return (
    <React.Fragment>
      <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Flowers</li>
        <li className="breadcrumb-item">Rose</li>
      </ol>
      <Row>
        <Col xs="3">
          {props.data.product_image.map((Element, index) => {
            return (
              <div key={index}>
                <Card
                  style={{ marginBottom: "10px" }}
                  onMouseOver={() => setImage(Element)}
                >
                  <CardImg
                    top
                    width="100%"
                    src={Element}
                    alt="Card image cap"
                  />
                </Card>
              </div>
            );
          })}
        </Col>
        <Col xs="9">
          <Card>
            <CardImg top width="100%" src={mainImage} alt="Card image cap" />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ShowImage;
