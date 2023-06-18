exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id')
  table.string('dish_id').references('id').inTable('dishes').onDelete('CASCADE')
  table.string('name')
});

exports.down = knex => knex.schema.dropTable('ingredients');