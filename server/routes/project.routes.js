const express = require('express');
const router = express.Router();
const Project = require('../models/projects.schema')

router.post('/new', (req, res) => {
    let tags = req.body.tags.split(",")
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
    let tags = req.body.tags.split(",")
    tags.forEach(string => { string.trim()});
    let post = { ...req.body, tags: tags }
    console.log(post)
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
    console.log(doomed)
    Project.deleteMany({_id: { $in: doomed}},(err) =>{
        if (err) {return res.send({success: false, msg: "Database error on delete."})}
        else {return res.send({success: true, msg: "Successful deletion."})}
    })
})

router.post('/update', (req,res) => {
    const feature = req.body['feature'];
    Project.updateMany({}, {highlight: false},(err, res) => {if (err) {return res.send({success: false, msg: "Error accessing DB."})}else {return}})
    Project.updateMany({_id: { $in: feature}},{highlight: true},(err, result) => {
    if (err) {return res.send({success: false, msg: "Error on DB write."})}
    if (!result) {return res.send({success: false, msg: "Something went very wrong."})}
    else return res.send({success: true, msg: "Updated successfully.", data: result})})
})

module.exports = router