import Knex from 'knex';

export async function up(kenx: Knex) {
  return kenx.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('created_at')
      .defaultTo('now()')
      .notNullable();
  });
}

export async function down(kenx: Knex) {
  return kenx.schema.dropTable('connections');
}
