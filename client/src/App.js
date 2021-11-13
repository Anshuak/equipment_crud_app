import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayMasterData from "./components/DisplayMasterData";
import EquipmentMasterDataForm from "./components/EquipmentMasterDataForm";
import Navbar from "./components/Navbar";
import './App.css';

export default function App() {
  return (
    <Navbar/>
  );
}
