const express = require('express');
const router = express.Router();
const projectModel = require('../models/projects.schema')

router.post('/write', (req, res) => {
    let object = {username: "Mike"}
    console.log(req.body, "from projects path")
    res.send({msg: "Hello from projects/write"})
    // projectModel.save(object).then(()=>console.log("I sent it"))
})

module.exports = router