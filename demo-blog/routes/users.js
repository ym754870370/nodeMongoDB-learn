var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users', {//.render参数用来渲染ejs模版， 传入的第一个参数时模版的名称，第二个参数时传入模版的数据
    name: req.params.name
  });
});

module.exports = router;