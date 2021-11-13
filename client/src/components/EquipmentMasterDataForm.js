import React, { useState } from "react";
import axios from "axios";

export default function EquipmentMasterDataForm() {
  const [equipmentMasterDetails, setEquipmentMasterDetails] = useState({
    Business_Unit: "",
    Plant: "",
    Equipment_Number: "",
    Equipment_Desc: "",
    EquipmentType: "",
    Calibration_Frequency: "",
    Last_Calibration_Done_On: "",
    Due_Date: "",
    Indimitation_Days: "",
    Range: "",
    Desired_Accuracy: "", 
    Deleted_On: "",
    Status: "",
    Section: "",
    Location_Of_Use: "",
    Remarks: "",
  });

  const handleChange = (e) => {
    setEquipmentMasterDetails({
      ...equipmentMasterDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${hostname}/api/addMasterData`,
        equipmentMasterDetails
      );
      alert(res.data.msg);
      setEquipmentMasterDetails({
        Business_Unit: "",
        Plant: "",
        Equipment_Number: "",
        Equipment_Desc: "",
        EquipmentType: "",
        Calibration_Frequency: "",
        Last_Calibration_Done_On: "",
        Due_Date: "",
        Indimitation_Days: "",
        Range: "",
        Desired_Accuracy: "",
        Deleted_On: "",
        Status: "",
        Section: "",
        Location_Of_Use: "",
        Remarks: "",
      });
    } catch (err) {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="container my-2">
      <h2 className="text-center">Add Equipment Master Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="business_Unit">
              Business Unit<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="business_Unit"
              placeholder="Enter the name of Business Unit"
              name="Business_Unit"
              value={equipmentMasterDetails.Business_Unit}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="plant">
              Plant<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="plant"
              placeholder="Enter Plant Name"
              name="Plant"
              value={equipmentMasterDetails.Plant}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="equipment_number">
              Equipment Number<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="equipment_number"
              name="Equipment_Number"
              value={equipmentMasterDetails.Equipment_Number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="equipment_type">
              Equipment Type<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="equipment_type"
              name="EquipmentType"
              value={equipmentMasterDetails.EquipmentType}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="calibration_frequency">
              Calibration Frequency<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="calibration_frequency"
              name="Calibration_Frequency"
              value={equipmentMasterDetails.Calibration_Frequency}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="equipment_desc">
            Equipment Description<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="equipment_desc"
            placeholder="Descrbe the Equipment"
            name="Equipment_Desc"
            value={equipmentMasterDetails.Equipment_Desc}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="last_calibration_done_on">
              Last Calibration Done On<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="last_calibration_done_on"
              name="Last_Calibration_Done_On"
              value={equipmentMasterDetails.Last_Calibration_Done_On}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              className="form-control"
              id="due_date"
              name="Due_Date"
              value={equipmentMasterDetails.Due_Date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="indimidation_days">
              Indimidation Days<span className="text-danger">*</span>
            </label>
            <input
              type="Number"
              className="form-control"
              id="indimidation_days"
              min="0"
              max="99"
              name="Indimitation_Days"
              value={equipmentMasterDetails.Indimitation_Days}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="range">
              Range<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="range"
              name="Range"
              value={equipmentMasterDetails.Range}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="section">
              Section<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="section"
              name="Section"
              value={equipmentMasterDetails.Section}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="desired_accuracy">
              Desired Accuracy<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="desired_accuracy"
              name="Desired_Accuracy"
              value={equipmentMasterDetails.Desired_Accuracy}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="location_of_use">
              Location Of Use<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="location_of_use"
              name="Location_Of_Use"
              value={equipmentMasterDetails.Location_Of_Use}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="status">
              Status<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="Status"
              value={equipmentMasterDetails.Status}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="remarks">
            Remarks<span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            id="remarks"
            placeholder="Enter Remarks"
            rows="5"
            name="Remarks"
            value={equipmentMasterDetails.Remarks}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}
