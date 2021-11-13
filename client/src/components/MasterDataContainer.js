import React from "react";
import MasterSingleData from "./MasterSingleData";

export default function MasterDataContainer(props) {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Plant</th>
          <th scope="col">Equipment Type</th>
          <th scope="col">Equipment No.</th>
          <th scope="col">Equipment Description</th>
          <th scope="col">Frequency</th>
          <th scope="col">Last Calibration Date</th>
          <th scope="col">Next Due Date</th>
          <th scope="col">Indimitation Days</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.masterData.map((data) => {
          return (
            <MasterSingleData
              key={data.Plant}
              data={data}
              masterData={props.masterData}
              setMasterData={props.setMasterData}
              handleDisplay={props.handleDisplay}
            />
          );
        })}
      </tbody>
    </table>
  );
}
