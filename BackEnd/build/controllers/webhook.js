// import { Note } from '../models/note'

const { Webhook } = require('../models/index')

const router = require('express').Router()
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/:idmodulo', urlencodedParser, async (req, res) => {
  // console.log(req)
  // console.log(req.body)
  // console.log(req.params.idmodulo)
  const contenido = JSON.stringify(req.body)
  const contenido2 = '\'' + contenido + '\''
  console.log('contenido2=' + contenido2)

  const data = {
    content: contenido2,
    estado: 'P',
    modulo: req.params.idmodulo
  }

  try {
    const webhook = await Webhook.create(data)
    res.status(200).json(webhook)
  } catch (error) {
    return res.status(400).json({ error })
  }
  // return res.send('Data received')
})
/*
router.get('/', async (req, res) => {
  const webhook = await Webhook.findAll()
  res.json(webhook)
})

router.get('/:id', async (req, res) => {
  const webhook = await Webhook.findByPk(req.params.id)
  if (webhook) {
    res.json(webhook)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', async (req, res) => {
  const webhook = await Webhook.findByPk(req.params.id)
  if (webhook) {
    await webhook.destroy()
  }
  res.status(204).end()
})

router.put('/:id', async (req, res) => {
  const webhook = await Webhook.findByPk(req.params.id)
  if (webhook) {
    webhook.important = req.body.important
    await Webhook.save()
    res.json(webhook)
  } else {
    res.status(404).end()
  }
})
*/
module.exports = router
