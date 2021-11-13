import React from "react";
import axios from "axios";
import EquipmentUpdateModal from "./EquipmentUpdateModal";

export default function MasterSingleData(props) {
const hostname = "https://equipmentcrudapp.herokuapp.com";
  const data = props.data;

  const getDate = (d) => {
    return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this data?")) {
      await axios.delete(`${hostname}/api/deleteData/${data._id}`);
      const filterData = props.masterData.filter((d) => {
        return d._id !== data._id;
      });
      props.setMasterData(filterData);
    }
  };


  return (
    <tr>
      <td>{data.Plant}</td>
      <td>{data.EquipmentType}</td>
      <td>{data.Equipment_Number}</td>
      <td>{data.Equipment_Desc}</td>
      <td>{data.Calibration_Frequency}</td>
      <td>{getDate(new Date(data.Last_Calibration_Done_On))}</td>
      <td>{getDate(new Date(data.Due_Date))}</td>
      <td>{data.Indimitation_Days}</td>
      <td>{data.Status}</td>
      <td>
        <i
          className="fas fa-trash text-danger manipulation_btn"
          onClick={handleDelete}
        ></i>
      </td>
      <td>
        <EquipmentUpdateModal data={data} handleDisplay={props.handleDisplay} masterData={props.masterData} setMasterData={props.setMasterData}/>
      </td>
    </tr>
  );
}
