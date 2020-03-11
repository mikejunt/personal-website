const express = require('express');
const router = express.Router();
const Project = require('../models/projects.schema')

router.post('/new', (req, res) => {
    let tags = req.body.tags.split(",")
    tags = tags.filter(t=>t != "")
    let post = { ...req.body, tags: tags }
    const project = new Project(post)
    project.save().then(result => {
        if (result) { res.send({ success: true, msg: "New project written to DB" }) }
    },
        err => {
            if (err) { res.send({ success: false, msg: "Failed to save to database." }) }
        })
})

router.post('/edit', (req, res) => {
    let tags = req.body.tags
    if (typeof(tags) === "string") {
    tags = tags.split(",")
    tags.forEach(string => { string.trim()})
    tags = tags.filter(t=>t != "")};
    let post = { ...req.body, tags: tags }
    Project.findByIdAndUpdate(post._id, post, {new: true}, (err, result) => {
        if (err) {return res.send({success: false, msg: "Could not write to database."})}
        if (result) {return res.send({success: true, msg: "Updated", data:result})}
    })
})


router.get('/all', (req, res) => {
    Project.find({},null,{sort: {highlight: -1}}).then(
        result => res.send({ success: true, msg: "All projects retrieved.", data: result }),
        err => res.send({ success: false, msg: "Database did not return a response.", error: err }))
})

router.get('/feature', (req, res) => {
    Project.find({ highlight: true }).then(
        result => res.send({ success: true, msg: "Features retrieved.", data: result }),
        err => res.send({ success: false, msg: "Database did not return a response.", error: err }))
})


router.post('/delete', (req, res) => {
    const doomed = req.body["delete"]
    Project.deleteMany({_id: { $in: doomed}},(err) =>{
        if (err) {return res.send({success: false, msg: "Database error on delete."})}
        else {return res.send({success: true, msg: "Successful deletion."})}
    })
})

router.post('/grantfeature', (req,res) => {
    const feature = req.body['feature'];
    Project.updateMany({_id: { $in: feature}, highlight: false},{highlight: true},(err, result) => {
    if (err) {return res.send({success: false, msg: "Error on DB write."})}
    if (!result) {return res.send({success: false, msg: "Something went very wrong."})}
    else return res.send({success: true, msg: "Updated successfully.", data: result})})
})

router.post('/removefeature', (req,res) => {
    const nofeature = req.body['nofeature'];
    Project.updateMany({_id: { $in: nofeature}, highlight: true},{highlight: false},(err, result) => {
    if (err) {return res.send({success: false, msg: "Error on DB write."})}
    if (!result) {return res.send({success: false, msg: "Something went very wrong."})}
    else return res.send({success: true, msg: "Updated successfully.", data: result})})
})

module.exports = router