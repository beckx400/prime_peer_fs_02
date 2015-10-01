var express = require('express');
var path = require('path');
var fs = require('fs');
var jsonquery = require('json-query');
var router = express.Router();

/* GET home page. */

var fileLocation = path.join(__dirname, '../models/data.json');


router.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/:id", function(req,res){

  var id = req.params.id;

  fs.readFile(fileLocation, function(err,data){

    var obj = JSON.parse(data);

    var query = getJsonQueryString('id',id);

    if(id){
      var img = jsonquery(query, {data: obj});

      res.json(img);
    }else{
      res.send(obj);
    }

  });//end  get id


});

function getJsonQueryString(key, value){
  var queryString = '[' + key + '=' + value + ']';
  console.log('Generate query string: ' + queryString);
  return queryString;
}



module.exports = router;
