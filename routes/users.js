const express = require('express');
const router = express.Router()

router.use(logger); //all the routes defined in this router are going to use logger


// static route. put at the top
router.get('/', (req,res) => {
    res.send('user list');
})

router.get('/new', (req,res) => {
    res.send('user new');
})

router.post('/', (req,res) => {
    res.send('create user');
})


// 2nd version - much cleaner, only write a route at the top
router.route('/:id')
.get((req,res) => {
    console.log(req.user) //print user name based on id/array index
    res.send(`get user ${req.params.id}`)
})
.put((req,res) => {
    res.send(`get user ${req.params.id}`)
})
.delete((req,res) => {
    res.send(`get user ${req.params.id}`)
})

const users = [{name: 'kyle'}, {name: 'sally'}]

router.param('id', (req,res,next, id) => {
    req.user = users[id]
    next() //callback arguement to the middleware fx, to pass control to the next middleware fx
})


function logger(req,res, next) {
    console.log(req.originalUrl)
    next()
}

//first version

// router.get('/:id', (req,res) => {
//     res.send(`get user ${req.params.id}`)
// })

// router.put('/:id', (req,res) => {
//     res.send(`get user ${req.params.id}`)
// })

// router.delete('/:id', (req,res) => {
//     res.send(`get user ${req.params.id}`)
// })




module.exports = router;

//if static route make sure put at the top.