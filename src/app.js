const express=require("express");
const hbs=require("hbs");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}));

// app.use(express.static("public"));   //using static file middleware         path example->   css/style.css
app.use("/static",express.static("public"));   //using static file middleware alternate way      path example-> static/css/style.css

const routes=require("./routes/main");  // importing routes
app.use("/",routes);


app.set("view engine","hbs");  // templets engine
app.set("views","views");
hbs.registerPartials("views/partials");

const detailmodel=require("./models/detail");
const slidermodel=require("./models/slider");
const servicemodel=require("./models/service");
//db connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/dynamic_web",()=>{
    console.log("db connected");
    // detailmodel.create({                                  //detail model
    //     brandName:"Dynamic",
    //     brandIconUrl:"static/images/download.png",
    //     links:[
    //     {
    //         label:"Home",
    //         url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact-Us",
    //         url:"/contact"
    //     },
    // ]
    // });      // only one time need to run this function --these are web site navbar data--


//     slidermodel.create([                                  //slider model
//         {               
//           title:"Labour and Employer",
//           subtitle:"We love to work together.Lets take a move toward devlopment.!!!!",
//           imageUrl:"static/images/1.jpg",
//           class:"active",
//         },
//         {               
//             title:"We are hear to Help",
//             subtitle:"You are happy if you trust us.!!!!",
//             imageUrl:"static/images/2.jpg",
//           },
//           {               
//             title:"Banana",
//             subtitle:"It is a fruit.It is used for many purpuse.!!!!",
//             imageUrl:"static/images/6.jpg",
//           },
//    ]);      // only one time need to run this function --these are web site slider data--


//     servicemodel.create([                                  //service model
//         {               
//           icon:"fa fa-medkit",
//           title:"Provide Best Facility",
//           description:"We provide best facility which you love",
//           linkText:"check",
//           link:"https://www.abhiakme.com",
//         },
//           {               
//             icon:"fa fa-address-book",
//             title:"Padh Bhai",
//             description:"We provide best facility which you love",
//             linkText:"check",
//             link:"https://www.abhiakme.com",
//           },
//           {               
//             icon:"fa fa-snowflake-o",
//             title:"thanda Hai",
//             description:"We provide best facility which you love",
//             linkText:"check",
//             link:"https://www.abhiakme.com",
//           },
//    ]);       // only one time need to run this function --these are service data
      
});


app.listen(process.env.PORT|3000,()=>{
    console.log("lisning");
});
