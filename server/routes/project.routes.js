const express = require('express');
const router = express.Router();
const Project = require('../models/projects.schema')

router.post('/new', (req, res) => {
    let tags = req.body.tags.split(",")
    let post = {...req.body, tags: tags}
    project = new Project(post)
    project.save().then(result=> {
        if (result) { res.send({success: true, msg: "New project written to DB"})}
    },
    err => {if (err)
        {res.send({success: false, msg: "Failed to save to database."})}
    })
})

module.exports = router