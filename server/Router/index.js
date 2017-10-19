const Router = require('express').Router();
const path = require('path');

console.log("the dirname in Router is", __dirname);

Router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
  
Router.get('/show/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = Router;