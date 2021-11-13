import React, { useState } from "react";
import axios from "axios";
import MasterDataContainer from "./MasterDataContainer";

export default function DisplayMasterData() {
  const hostname = "https://equipmentcrudapp.herokuapp.com";
  const [updateDetails, setUpdateDetails] = useState({
    Plant: "",
    EquipmentType: "",
    Status: "",
  });
  const [masterData, setMasterData] = useState([]);
  const handleDisplay = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${hostname}/api/getAllData`);
      setMasterData(res.data.data);
    } catch (err) {
      alert("Something Went Wrong");
    }
  };

  const handleChange = (e) => {
    setUpdateDetails({ ...updateDetails, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${hostname}/api/updateStatus`, updateDetails);
      setMasterData([]);
      setUpdateDetails({ Plant: "", EquipmentType: "", Status: "" });
    } catch (err) {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">Update Equipment Status</h2>
      <form className="my-2">
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="plant">
              Plant<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="plant"
              value={updateDetails.Plant}
              onChange={handleChange}
              name="Plant"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="equipment_type">
              Equipment Type<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="equipment_type"
              value={updateDetails.EquipmentType}
              onChange={handleChange}
              name="EquipmentType"
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="status">
              Status<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              value={updateDetails.Status}
              onChange={handleChange}
              name="Status"
            />
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={handleDisplay}
          >
            Display
          </button>
          <button
            type="button"
            className="btn btn-warning mx-2"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
      <MasterDataContainer masterData={masterData} setMasterData={setMasterData} handleDisplay={handleDisplay} />
    </div>
  );
}
