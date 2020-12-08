const express = require('express');
const app = express();

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
    

app.listen(8000, () => {
    console.log('server is running');
});