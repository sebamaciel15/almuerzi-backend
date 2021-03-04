const express = require('express')
const orders = require('../models/Meals')
const router = express.Router()

router.get('/', (req, res) =>{
 orders.find()
  .exec()
  .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) =>{
  orders.findById(req.params.id)
  .exec()
  .then(x => res.status(200).send(x))
})
router.post ('/', (req, res) => {
  orders.create(req.body).then(x=> res.status(201).send(x))
})

router.put('/:id', (req,res) =>{
  orders.findOneAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(204))
})

router.delete('/i:id', (req, res) =>{
  orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})
module.exports = router
