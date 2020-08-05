import Knex from 'knex';

export async function up(kenx: Knex) {
  return kenx.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('classes_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(kenx: Knex) {
  return kenx.schema.dropTable('class_schedule');
}
