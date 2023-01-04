const Note = require('./note')
const Webhook = require('./webhook')

// para sincronizar los objetos declarados en base de datos
Note.sync()
Webhook.sync()

module.exports = {
  Note,
  Webhook
}
