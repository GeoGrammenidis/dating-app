import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("users", (table) => {
        table.increments().notNullable();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("users");
}

