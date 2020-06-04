import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("likes", (table) => {
        table.increments().notNullable();
        table.integer("image_id").notNullable();
        table.integer("person_that_liked").notNullable();
        table.foreign("image_id").references("images.id");
        table.foreign("person_that_liked").references("users.id");
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("likes");
}