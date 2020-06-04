import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("block", (table) => {
        table.increments().notNullable();
        table.integer("user_id_requested").notNullable();
        table.integer("user_id_blocked").notNullable();
        table.foreign("user_id_requested").references("users.id");
        table.foreign("user_id_blocked").references("users.id");
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("block");
}

