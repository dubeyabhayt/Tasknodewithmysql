import con from '../Database.js';
import  jwt  from "jsonwebtoken";

export const create= async function(req,res){

     

    try {
        // Check if Authorization header is present
        if (!req.headers.authorization) {
            return res.status(401).json({
                success: false,
                message: "Authorization header is missing. Please provide a valid JWT token."
            });
        }

        // Extract user ID from JWT token
        const token = req.headers.authorization.split(' ')[1];
        console.log("abhay:-",token)
        const decodedToken = jwt.verify(token, 'Abhay');
        const userId = decodedToken.userId;

         console.log(userId);

        let  sql='INSERT INTO story(title,description,date,location,createdBy) VALUES(?,?,?,?,?)'
    let values = [
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.location,
        userId,
        
      ];
      const [result]=await con.query(sql,values) ;
      return  res.json(result);



        
        // return res.status(201).json({
        //     success: true,
        //     message: "Story created successfully",
        //     data: story
        // });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}




export const Fetchall= async function(req,res){

     

    try {
          const sql="Select * from story"
      const [result]=await con.query(sql) ;
      return  res.json(result);



        
        // return res.status(201).json({
        //     success: true,
        //     message: "Story created successfully",
        //     data: story
        // });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}