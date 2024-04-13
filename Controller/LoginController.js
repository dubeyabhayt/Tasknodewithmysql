import express from "express";

 import con from '../Database.js';

  import  bcrypt from 'bcrypt';
 //const bcrypt = require('bcrypt');
const saltRounds = 10;


 
import  Jwt  from "jsonwebtoken";

 export const Loginuser= async function(req,resp){

    const password = req.body.password;    
       const sql="SELECT * FROM users  WHERE username= ?";
         const values=[
          req.body.username,
         
         ]
        
          const [result]=await con.query(sql,values);
         
           if(result.length>0)
           {
            const Passswordcheck = await bcrypt.compare(password, result[0].password)  
             if(Passswordcheck)
             {
           
              const token = Jwt.sign(
                { userId: result[0].id, username: result[0].username },
                'Abhay', 
                { expiresIn: '1h' } 
            );
            return  resp.json({Login:true,token});
             }
              else{
                return  resp.json({Login:false});
              }
           }
           else{
            return  resp.json({Login:false});
           }


     
   } 


   export const Adduser= async function(req,res){

     

    const password = req.body.password;    
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    let  sql='INSERT INTO users(username,password) VALUES(?,?)'
    let values = [
        req.body.username,
        encryptedPassword
      ];
      const [result]=await con.query(sql,values) ;
      return  res.json(result);

   }
  