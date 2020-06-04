import * as Knex from "knex";
import bcrypt from "bcrypt-nodejs";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").del()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert([
                { email: "admin@admin.com", password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10)) },
                { email: "grammenidis@yahoo.gr", password: bcrypt.hashSync("qwe", bcrypt.genSaltSync(10)) },
                { email: "test@test.gr", password: bcrypt.hashSync("qwe", bcrypt.genSaltSync(10)) },
                { email: "testing@google.com", password: bcrypt.hashSync("123", bcrypt.genSaltSync(10)) },
                { email: "testing2@google.com", password: bcrypt.hashSync("123", bcrypt.genSaltSync(10)) },
                { email: "testing3@google.com", password: bcrypt.hashSync("123", bcrypt.genSaltSync(10)) },
                { email: "testing4@google.com", password: bcrypt.hashSync("123", bcrypt.genSaltSync(10)) },
            ]);
        });
};
