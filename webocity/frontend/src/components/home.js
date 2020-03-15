import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <React.Fragment>
      <Link to="/product/b5bbaaf0-c56d-4416-9ffa-4a6d97ab5841">
        Product Details
      </Link>
    </React.Fragment>
  );
}

export default Home;
