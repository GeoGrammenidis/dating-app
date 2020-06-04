import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("images", (table) => {
        table.increments().notNullable();
        table.string("image_url").notNullable().unique();
        table.integer("owner_id").notNullable();
        table.timestamps(true, true);
        table.foreign("owner_id").references("users.id");
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("images");
}

