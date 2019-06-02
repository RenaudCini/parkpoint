const express = require('express');
const models = require("./models"); // fonctions principales

const router = express.Router();


// création d'un user
router.post("/sing-up", (req, res) => {
    console.log('stringify ' + JSON.stringify(req.body));

    let result = models.createUser(JSON.stringify(req.body));

    result.then(result => { 
      console.log('result = ' + result[0]);
      res.send(JSON.stringify(result[0]));
    }).catch(error => res.end(JSON.stringify(error)));
});

router.post("/users/login", (req, res) => {
	models.logUser(req.body).then(({ success, id }) => {
      if (success) {
      	console.log('success');

        res.send(JSON.stringify(id));
      	//res.sendStatus(200);
      }
      else {
      	console.log('failure');
      	res.sendStatus(401);
      }
    })
	//result.then(result => res.send("User login")).catch(error => res.end(error));
});
/*

// listing d'un user
router.get("/users", (req, res) => {
    let result_promise = models.listUsers(req.body);
    return result_promise.then(result => res.send(JSON.stringify(result)));
});

*/

module.exports = router;



/* inscription
{
	"mail":"test3",
	"password":"test",
	"avatar":"test",
	"languages":"test"
}
*/