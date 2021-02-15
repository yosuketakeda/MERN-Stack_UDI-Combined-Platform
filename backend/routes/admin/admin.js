const express = require('express');
const router = express.Router();
const ResponseFormat = require('../../core').ResponseFormat;
const User = require('../../models/User');

// @route POST admin/users/getUsersList
// @desc Get Users List
// @access Public
router.get('/getUsersList', (req, res) => {
  User.find({}, function (err, users) {
    let totoal = [];

    users.forEach(function (user) {
      let userMap = {};
      userMap['name'] = user.name;
      userMap['email'] = user.email;
      userMap['date'] = user.date;
      totoal.push(userMap);
    });

    res
      .status(201)
      .json(ResponseFormat.build(totoal, 'User List Successfully', 200, true));
  });
});

module.exports = router;
