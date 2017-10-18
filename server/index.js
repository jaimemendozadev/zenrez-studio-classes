const express = require('express');
const app = express();
const path = require('path');
const Router = require('./Router');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(Router);


app.listen(3000, ()=> {
  console.log("Listening on port 3000");
})