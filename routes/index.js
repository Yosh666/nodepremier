var express = require('express');
var router = express.Router();
const heros=[
  'Krak le Nain',
  'Tharn le Vicieux',
  'Freya la Furieuse',
  'Yorden le Barbare'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Gloire',
    name: 'Aventurier' 
  });
});

/* GET test page. */
router.get('/test/:nb?', function(req, res, next) {

  let nb=0;
  if(req.params.nb && typeof heros[req.params.nb]!== 'undefined'){
    nb=req.params.nb;
  }

  
  res.render('index', { 
    title: 'Honte',
    name: heros[nb],
    heros: heros
  });
});

module.exports = router;
