const { Model, DataTypes } = require('sequelize')

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
    allowNull: false
  },
  estado: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fechagra: {
    type: DataTypes.DATE,
    defaultValue: Date
  },
  modulo: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'Webhook'
})

// export { Note }
module.exports = Webhook
