/* Name: Shinya Abe
   Date: 3/31/22
   Pledge: I pledge my honor that I have abided by the Stevens honors system
   Class: CS 546
   Assignment: lab9
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('prime', {});
});

module.exports = router;