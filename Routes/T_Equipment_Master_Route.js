const T_Equipment_Master = require("../models/T_Equipment_Master");

const router = require("express").Router();

router.post("/addMasterData", async (req, res) => {
  try {
    const {
      Business_Unit,
      Plant,
      Equipment_Number,
      Equipment_Desc,
      EquipmentType,
      Calibration_Frequency,
      Last_Calibration_Done_On,
      Due_Date,
      Indimitation_Days,
      Range,
      Desired_Accuracy,
      Deleted_On,
      Status,
      Section,
      Location_Of_Use,
      Remarks,
    } = req.body;

    if (
      !Business_Unit ||
      !Plant ||
      !Equipment_Number ||
      !Equipment_Desc ||
      !EquipmentType ||
      !Calibration_Frequency ||
      !Last_Calibration_Done_On ||
      !Indimitation_Days ||
      !Range ||
      !Desired_Accuracy ||
      !Status ||
      !Location_Of_Use ||
      !Remarks ||
      !Section
    ) {
      return res.status(200).json({ msg: "Input Cant be blank" });
    }

    const T_Equipment_Master_Data = new T_Equipment_Master({
      Business_Unit,
      Plant,
      Equipment_Number,
      Equipment_Desc,
      EquipmentType,
      Calibration_Frequency,
      Last_Calibration_Done_On,
      Due_Date,
      Indimitation_Days,
      Range,
      Desired_Accuracy,
      Deleted_On,
      Status,
      Section,
      Location_Of_Use,
      Remarks,
    });

    await T_Equipment_Master_Data.save();
    res.status(200).json({ msg: "Data Saved", data: T_Equipment_Master_Data });
  } catch (err) {
    res.status(501).json({ msg: "Internal Server Error", err });
  }
});

router.get("/getAllData", async (req, res) => {
  try {
    const response = await T_Equipment_Master.find({});
    res.status(200).send({ msg: "Data Successfully Recieved", data: response });
  } catch (err) {
    res.status(501).json({ msg: "Internal Server Error" });
  }
});

router.put("/updateStatus", async (req, res) => {
  try {
    const { Plant, EquipmentType, Status } = req.body;
    if (!Plant || !EquipmentType || !Status)
      return res.status(400).json({ msg: "Fill the Details Correctly" });

    const dataExists = await T_Equipment_Master.findOne({
      Plant,
      EquipmentType,
    });
    if (!dataExists) return res.status(401).json({ msg: "No data Found" });

    await T_Equipment_Master.findByIdAndUpdate(dataExists._id, {
      $set: { Status },
    });
    res.status(200).send({ msg: "Updated Successfully" });
  } catch (err) {
    res.status(501).json({ msg: "Internal Server Error" });
  }
});

router.delete("/deleteData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dataExists = await T_Equipment_Master.findById({ _id: id });
    if (!dataExists) {
      return res.status(200).json({ msg: "No data Exists" });
    }
    await T_Equipment_Master.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "Data deleted Successfully" });
  } catch (err) {
    res.status(501).json({ msg: "Internal Server Error" });
  }
});

router.put("/updateEquipmentData/:id",async(req, res) => {
  try {
    const {
      Plant,
      EquipmentType,
      Equipment_Number,
      Equipment_Desc,
      Calibration_Frequency,
      Last_Calibration_Done_On,
      Due_Date,
      Indimitation_Days,
    } = req.body;

    const id = req.params.id;
    await T_Equipment_Master.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          Plant,
          EquipmentType,
          Equipment_Number,
          Equipment_Desc,
          Calibration_Frequency,
          Last_Calibration_Done_On,
          Due_Date,
          Indimitation_Days,
        },
      }
    );
    res.status(200).json({msg: "Updated Successfully"});
  } catch (err) {
    res.status(501).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
