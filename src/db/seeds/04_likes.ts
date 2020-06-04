import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("likes").del()
        .then(() => {
            // Inserts seed entries
            return knex("likes").insert([
                { image_id: 1, person_that_liked: 3 },
                { image_id: 4, person_that_liked: 3 },
                { image_id: 22, person_that_liked: 4 },
                { image_id: 12, person_that_liked: 1 },
                { image_id: 10, person_that_liked: 4 },
                { image_id: 29, person_that_liked: 2 }
            ]);
        });
};