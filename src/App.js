import React from "react";
import Quotes from "./features/quotes/Quotes";
import QuoteForm from "./features/quotes/QuoteForm";

function App() {

  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
      <hr />
      <QuoteForm />
      <Quotes />
    </div>
  );
}

export default App;
