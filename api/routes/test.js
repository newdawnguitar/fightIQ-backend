const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User');
const secret = require('../../config/keys');

//@route POST api/test/online
//@description register  the users
//@access public route

router.get('/online', (req, res) => {
    res.json({success:true, data:"server is online and running!"})
});


module.exports = router;
