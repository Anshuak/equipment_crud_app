import React  from "react";

export default function ModalForm(props) {
  const {details,setDetails} = props;
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
  }
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="plant">Plant</label>
          <input
            type="text"
            className="form-control"
            id="plant"
            name="Plant"
            value={details.Plant}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="equipment_type">Equipment Type</label>
          <input
            type="text"
            className="form-control"
            id="equipment_type"
            name="EquipmentType"
            value={details.EquipmentType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="equipment_number">Equipment Number</label>
          <input
            type="text"
            className="form-control"
            id="equipment_number"
            name="Equipment_Number"
            value={details.Equipment_Number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="equipment_desc">Equipment Description</label>
          <input
            type="text"
            className="form-control"
            id="equipment_desc"
            name="Equipment_Desc"
            value={details.Equipment_Desc}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calibration_frequency">Calibration_Frequency</label>
          <input
            type="text"
            className="form-control"
            id="calibration_frequency"
            name="Calibration_Frequency"
            value={details.Calibration_Frequency}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_calibration_done_on">Last_Calibration_Done_On</label>
          <input
            type="date"
            className="form-control"
            id="last_calibration_done_on"
            name="Last_Calibration_Done_On"
            value={getFormattedDate(new Date(details.Last_Calibration_Done_On))}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="due_date">Due Date</label>
          <input
            type="date"
            className="form-control"
            id="due_date"
            name="Due_Date"
            value={getFormattedDate(new Date(details.Due_Date))}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="indimitation_days">Indimitation Days</label>
          <input
            type="number"
            className="form-control"
            id="indimitation_days"
            min="0"
            max="99"
            name="Indimitation_Days"
            value={details.Indimitation_Days}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}
