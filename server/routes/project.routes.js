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
    router.get('/all',(req,res)=> {
        Project.find({}).then(result=>{console.log(result),res.send({result})}, err=>{console.log(err);res.send({msg:"FAIL at find"})})
    })

    router.get('/feature', (req,res) => {
        Project.find({highlight: true}).then(result=>{console.log(result);res.send(result)}, err => res.send({err}))
    })

module.exports = router