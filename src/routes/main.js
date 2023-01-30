const express=require("express");
const { route }=require("express/lib/application");
// const detail = require("../models/detail");

const detailmodel=require("../models/detail");
const slidermodel=require("../models/slider");
const servicemodel=require("../models/service");
const contactschema=require("../models/contact");




const routes=express.Router();

routes.get("/",async(req,res)=>{
    const detail=await detailmodel.findOne({"_id":"63b9be2ee1a9c921160f7077"});
    // console.log(detail);
    const slider=await slidermodel.find();
    // console.log(slider);
    const service=await servicemodel.find();
    res.render("index",{
        detail:detail ,       // sending (detail) collection to views index -----we can use details on index page
        slider:slider ,       // sending (slider data) collection to views index -----we can use slider data on index page
        service:service,
    });
});

routes.get("/gallery",async(req,res)=>{
    const detail=await detailmodel.findOne({"_id":"63b9be2ee1a9c921160f7077"});
    res.render("gallery",{
        detail:detail        // sending (detail) collection to views gallery -----we can use details on index page
    });
});


routes.post("/process",async(req,res)=>{
    console.log("submited");
    // console.log(req.body);
    try{
       const data=await contactschema.create(req.body);
       res.redirect("/")
    }catch(e){
        console.log(e);
        res.redirect("/");
    }
});

module.exports=routes;   // exporting routes