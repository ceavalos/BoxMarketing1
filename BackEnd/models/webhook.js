const { Model, DataTypes, DATE } = require('sequelize')

const { sequelize } = require('../util/base')

class Webhook extends Model {}

Webhook.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  estado: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fechagra: {
    type: DataTypes.DATE
  },
  modulo: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'Webhook'
})

// export { Note }
module.exports = Webhook
