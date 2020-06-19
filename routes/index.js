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
  res.redirect('/test');
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

/*GET todo page.*/
router.get('/todo',function(req,res,next){


  res.render('todo',{
    title: "TODO OPC",
  })
})

module.exports = router;
