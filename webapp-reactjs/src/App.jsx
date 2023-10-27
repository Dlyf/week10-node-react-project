import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import GetFurnituresData from "./components/GetFurnituresData";
import FormAddMaterial from "./components/FormAddMaterial";

function App() {

  return (
    <>
      <Home />
      <FormAddMaterial />
      <GetFurnituresData />
      {/* <Login /> */}
    </>
  )
}

export default App;
