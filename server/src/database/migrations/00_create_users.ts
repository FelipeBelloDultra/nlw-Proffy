import Kenx from 'knex';
import Knex from 'knex';

export async function up(kenx: Knex) {
  return kenx.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(kenx: Knex) {
  return kenx.schema.dropTable('users');
}
