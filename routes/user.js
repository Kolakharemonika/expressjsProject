var express = require('express');
var router = express.Router();
// var CustomerService = require('../services/service.customer');

/* GET customer listing. */
router.get('/', async function (req, res, next) {
    // res.json({ error: "Invalid Customer UID." });
    res.send('Hello World!')
});
// router.post('/', (req, res) => {
//     res.send('Got a POST request')
// })
// router.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

module.exports = router;