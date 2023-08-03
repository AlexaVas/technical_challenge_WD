const router = require("express").Router();

const data =require("../db/phone-data");

router.get("/phones", (req, res, next) => {

  console.log(data);
  res.status(200).json(data);
});

router.get("/phones/:id", (req, res, next) => {

const  {id} = req.params;

const phoneDetails = data.filter((phone) => phone.id == id );

console.log(phoneDetails);

if (phoneDetails) {
res.status(200).json(phoneDetails);
} else {

res.status(404).json("Upps details not found :(");


}






})




module.exports = router;
