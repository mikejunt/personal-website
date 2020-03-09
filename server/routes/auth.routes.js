const express = require('express');
const router = express.Router();
const authModel = require('../models/auth.model')


router.post('/login', (req, res) => {
    console.log(req)
    if (req.body.username === undefined || req.body.password === undefined) { return res.send(({ success: false, msg: "Invalid input provided." })) }
    console.log(res, req.body, "from user-login route")
    authModel.login(res, req)
})


module.exports = router