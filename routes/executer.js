var express = require('express');
var router = express.Router();
var vm = require('vm');
var util = require('util');



router.post('/', function(req, res) {
    console.log(req.body.code)
    var output = {}
    var context = new vm.createContext(output);
    var script = new vm.Script(req.body.code);
    script.runInContext(output);
    var inspectedResult = util.inspect(output)
    console.log(inspectedResult);
    return res.status(200).send(inspectedResult)
});

module.exports = router;