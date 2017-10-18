const Router = require('express').Router();

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
Router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
  
Router.get('/show/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = Router;