const express = require('express');
const app = express();


//app.use(express.static());

app.get('/', (req, res) => {
  res.send("<h1>Welcome to the Zenrez Studio Class Schedule!</h1>");      
});

app.listen(3000, ()=> {
  console.log("Listening on port 3000");
})