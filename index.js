
 import  express  from "express";
 import bodyParser from 'body-parser';
 const  app=express();
 

import MigrationModel from "./Model/Migration.js";

 import route  from './Router.js';
   MigrationModel.setupDatabase()  
   MigrationModel.Story_Model();
   MigrationModel.addStory_Model();


   app.use(bodyParser.json());
   app.use('/api',route);

   app.listen(3000,(err)=>{
    if(!err){
        console.log("server is successfully running on 3000 port")
    }
    if(err){
        console.log("err occur server cant start");
    }
    })