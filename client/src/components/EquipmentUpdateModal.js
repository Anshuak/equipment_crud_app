import axios from 'axios';
import React,{useState} from 'react'
import ModalForm from './ModalForm'

export default function EquipmentUpdateModal(props) {
const hostname = "https://equipmentcrudapp.herokuapp.com";
  const [details, setDetails] = useState(props.data);

  const handleUpdate = async(e)=>{
    try{
    await axios.put(`${hostname}/api/updateEquipmentData/${props.data._id}`,details);
    const dataFilter = props.masterData.map((d)=>{
      return (d._id===details._id)?details:d;
    })
    props.setMasterData(dataFilter);
    }
    catch(err){
      alert("Invalid Inputs");
    }
  }

    return (
        <>
        <i className="fas fa-edit text-warning manipulation_btn" data-toggle="modal" data-target="#exampleModal">
        </i>
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ModalForm data={props.data} details={details} setDetails={setDetails}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleUpdate}>Update changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
