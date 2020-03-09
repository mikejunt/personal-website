const express = require('express');
const router = express.Router();
const authModel = require('../models/auth.model')


router.post('/login', (req, res) => {
    if (req.body.username === undefined || req.body.password === undefined) { return res.send(({ success: false, msg: "Invalid input provided." })) }
    console.log(req.body, "from user-login route")
    authModel.login(req, res)
})


module.exports = router