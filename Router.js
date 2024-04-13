import express  from "express";
import  {Loginuser,Adduser}  from './Controller/LoginController.js';
 
  import {create,Fetchall}  from './Controller/StoryController.js'

const app = express();

var  router=express.Router();

router.post('/login',Loginuser);

router.post('/Adduser',Adduser);
  router.post('/create',create);

  router.get('/Fetchalldata',Fetchall);

export default router;
