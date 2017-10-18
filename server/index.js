const express = require('express');
const app = express();
const path = require('path');
const Router = require('./Router');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(Router);

const PORT = proces.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log("Listening on port 3000");
})