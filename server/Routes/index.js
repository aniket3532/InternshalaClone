const express =require("express")
const router= express.Router();
const ApplicationRoute=require("./ApplicationRoute")
const intern=require("./internshipRout")
const job=require("./jobRoute")
const admin=require("./admin")
const login=require("./login")
const verification=require("./verification")

router.get("/",(req,res)=>{
    res.send("the is backend of api")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);
router.use('/admin',admin);
router.use('/verification',verification);
router.use('/login',login);

module.exports=router;