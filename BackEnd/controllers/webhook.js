// import { Note } from '../models/note'

const { Webhook } = require('../models/index')

const router = require('express').Router()


router.get('/', async (req, res) => {
  const webhook = await Webhook.findAll()
  res.json(webhook)
})

router.post('/:idmodulo', async (req, res) => {
  try {
    console.log('req.body= ' + req.body)
    const contenido = JSON.stringify(req.body)
    const contenido2 = '\'' + contenido + '\''
    console.log('contenido2=' + contenido2)

    const data = {
      content: contenido2,
      estado: 'P',
      modulo: req.params.idmodulo
    }
    const dataproceso = JSON.stringify(data)
    console.log(dataproceso)
    // const webhook = await Webhook.create(req.body)
    const webhook = await Webhook.create(data)
    // sequelize.close(webhook)
    res.json(webhook)
  } catch (error) {
    return res.status(400).json({ error })
  }
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

module.exports = router
