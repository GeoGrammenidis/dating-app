import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("block").del()
        .then(() => {
            // Inserts seed entries
            return knex("block").insert([
                { user_id_requested: 1, user_id_blocked: 2 },
                { user_id_requested: 3, user_id_blocked: 2 },
                { user_id_requested: 4, user_id_blocked: 3 }
            ]);
        });
};
