import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DisplayMasterData from "./components/DisplayMasterData";
import EquipmentMasterDataForm from "./components/EquipmentMasterDataForm";
import Navbar from "./components/Navbar";
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <EquipmentMasterDataForm />
        </Route>
        <Route exact path="/displayMasterData">
          <DisplayMasterData />
        </Route>
      </Switch>
    </Router>
  );
}
