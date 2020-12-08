const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users/:name', (req,res) => {
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: req.params.name
         })
    })

    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })

    //Making a post request made to the login endpoint for when a user wants to login
    app.post('/login', (req,res) => {
        const username=req.body.username; //body represents 
        const password=req.body.password;
    
        const mockUsername="billyTheKid";
        const mockPassword="superSecret";

        if (username===mockUsername && password===mockPassword){
            res.json({
                 success: true,
                 message: 'password and username match!',
                 token: 'encrypted token goes here'
            })
       } else {
            res.json({
                 success: false,
                 message: 'password and username do not match'
            })
       }
  });


    

app.listen(8000, () => {
    console.log('server is running');
});