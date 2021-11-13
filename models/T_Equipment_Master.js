const mongoose = require("mongoose");

const T_Equipment_Master_Schema = new mongoose.Schema({
  Business_Unit: {
    type: String,
    required: true,
  },
  Plant: {
    type: String,
    required: true,
  },
  Equipment_Number: {
    type: String,
    required: true,
  },
  Equipment_Desc: {
    type: String,
    required: true,
  },
  EquipmentType: {
    type: String,
    required: true,
  },
  Calibration_Frequency: {
    type: String,
    required: true,
  },
  Last_Calibration_Done_On: {
    type: Date,
    required: true,
  },
  Due_Date: {
    type: Date,
  },
  Indimitation_Days: {
    type: Number,
    required: true,
  },
  Range: {
    type: String,
    required: true,
  },
  Desired_Accuracy: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Deleted_On: {
    type: Date,
  },
  Section: {
    type: String,
    required: true,
  },
  Location_Of_Use: {
    type: String,
    required: true,
  },
  Remarks: {
    type: String,
    required: true,
  },
});


const T_Equipment_Master = mongoose.model('T_Equipment_Master_Data',T_Equipment_Master_Schema);

module.exports = T_Equipment_Master;