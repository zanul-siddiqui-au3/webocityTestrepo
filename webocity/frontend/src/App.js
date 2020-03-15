import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// ---------- components//
import Home from "./components/home";
import ProductDetail from "./components/productDetails";
// ----------------- context
import CountContext from "./context/countContext";

// ----------------------- reducers
import CountReducer from "./reducers/countReducer";

function App() {
  const [countData, countDispatcher] = useReducer(CountReducer, 0);
  return (
    <React.Fragment>
      <Router>
        <CountContext.Provider value={{ countData, countDispatcher }}>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetail} />
        </CountContext.Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;
