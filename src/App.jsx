// import react
import { useState } from "react";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

// import components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
