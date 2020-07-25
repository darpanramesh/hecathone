const express = require('express');
const router = express.Router();


router.use('/users', require('./Auth/Auth'));

router.get((req,res)=>{
res.send({
    message: "we are i=on router"
})
})

module.exports = router