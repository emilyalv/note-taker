const path = require('path');
const router = require('express').Router();

//notes page
router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
//home
router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });  


module.exports = router;