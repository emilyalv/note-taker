const router = require("express").Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

router.get('/notes', (req,res) => {
    res.json(db)
});

router.post('/notes', (req,res) => {
    //create unique id & add to body 
    const id = uniqid();
    req.body.id = id;
    db.push(req.body);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
    res.json();
});

router.delete('/notes/:id', (req,res) => {
    const newDb = db.filter(note => {
        return note.id !== req.params.id
    });
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newDb));
    res.json();
})


module.exports = router