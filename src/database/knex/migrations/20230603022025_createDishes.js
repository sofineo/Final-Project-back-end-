exports.up = knex => knex.schema.createTable('dishes', table => {
  table.increments('id')
  table.string('avatar')
  table.string('name')
  table.string('category')
  table.string('description')
  table.decimal('price')
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.string('created_by').references('id').inTable('users')
  table.timestamp('updated_at').defaultTo(knex.fn.now())
  table.string('updated_by').references('id').inTable('users')
});

exports.down = knex => knex.schema.dropTable('dishes');