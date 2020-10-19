const express = require('express');
const router = express.Router();
const db = require('../config/database');
const test = require('../models/testmodel');
const bodyParser = require('body-parser');





router.get('/users', (req, res) => {
    test.findAll()
    .then(response => {
            // console.log(response)
            res.json(response)
    })
    .catch(err =>{
        console.log('Erorrrrr:'+err);
    })
})

router.delete('/del-users/:id', (req, res) => {
    test.destroy({
        where: {
           id: req.params.id //this will be your id that you want to delete
        }
     }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
       if(rowDeleted === 1){
          console.log('Deleted successfully');
          res.sendStatus(200).send({success: true});
        }
     }, function(err){
         res.send({success: false})
         console.log(err); 
     });
})


router.put('/update/:id', (req, res) => {
    
    test.update(
        
        {
            password: req.body.password
        },
        { 
            where: 
            {
                id: req.params.id
            }
        }
    ).then(count => {
        console.log('Rows updated ' + count);
        res.sendStatus(200).send({success: true});
    })
         

    })



 

    router.post("/users", async (req,res) =>{
        let result ={}
        try{
           test.create({
               username: req.body.username,
               password: req.body.password
           })
           result.success = true;
        }
        catch(e){
            console.log(e)
            result.success = false;
        }
        finally{
            res.setHeader("content-type", "application/json")
            res.send(JSON.stringify(result))
        }
    })
  

module.exports= router;