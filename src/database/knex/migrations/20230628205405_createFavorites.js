exports.up = knex => knex.schema.createTable('favorites', table => {
  table.increments('id')
  table.string('dish_id').references('id').inTable('dishes').onDelete('CASCADE')
  table.string('user_id').references('id').inTable('users').onDelete('CASCADE')
});

exports.down = knex => knex.schema.dropTable('favorites');