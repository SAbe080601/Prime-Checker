/* Name: Shinya Abe
   Date: 3/31/22
   Pledge: I pledge my honor that I have abided by the Stevens honors system
   Class: CS 546
   Assignment: lab9
*/

const primeRoutes = require('./prime');

const constructorMethod = (app) => {
    app.use('/', primeRoutes);
  
    app.use('*', (req, res) => {
      res.sendStatus(404);
    });
  };
  
  module.exports = constructorMethod;