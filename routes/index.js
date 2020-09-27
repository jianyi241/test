const express = require('express');
const userDao = require('../dao/userDao')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/list', function(req, res, next) {
  userDao.queryAll(req, res, next);
});

module.exports = router;
