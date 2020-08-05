import Knex from 'knex';

export async function up(kenx: Knex) {
  return kenx.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(kenx: Knex) {
  return kenx.schema.dropTable('classes');
}
