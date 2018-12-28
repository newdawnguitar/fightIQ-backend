const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User');
const secret = require('../../config/keys');
const Fighter = require('../../models/Fighter');
const FightEvent = require('../../models/FightEvent');
const mongoose = require('mongoose');

//@route POST api/test/online
//@description register  the users
//@access public route

router.get('/online', (req, res) => {
    res.json({success:true, data:"server is online and running!"})
});

//test routes
router.get('/fighters', (req, res) =>{
  Fighter.find((err, data) => {
    if (err) {
      console.log('error:', err);
      return res.json({ success: false, error: err });
    }    else {
      console.log('got all data:', data);
      return res.json({ success: true, data: data });
    }
  });
})

router.get('/events', (req, res) =>{
  FightEvent.find((err, data) => {
    if (err) {
      console.log('error:', err);
      return res.json({ success: false, error: err });
    }    else {
      console.log('got all data:', data);
      return res.json({ success: true, data: data });
    }
  });
})

router.post('/addEvent', (req, res) => {
  var fightEvent = new FightEvent();
  fightEvent.name = req.body.name;
  fightEvent.fighterA = req.body.fighterAID;
  fightEvent.fighterB = req.body.fighterBID;
  fightEvent.organization = req.body.organization;
  fightEvent.save(function(err) {
    if(err){
      res.send(err);
    }

    res.json({success:true, message:"added event!"})
  })

})

router.post('/addFighter', (req, res) => {
    var fighter = new Fighter();
    fighter.name = req.body.name;
    //save and check
    fighter.save(function(err) {
      if(err){
        res.send(err);
      }

      res.json({success:true, message:"added fighter!"})
    })
});


module.exports = router;
