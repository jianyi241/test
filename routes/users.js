const express = require('express');
const userDao = require('../dao/userDao')
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.post('/loginIn', function(req, res, next) {
  userDao.loginIn(req, res, next);
});

module.exports = router;
