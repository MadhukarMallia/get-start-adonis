'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('<table>', function (table) {
      table.increments('id')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('<table>')
  }

}

module.exports = NewSchema
