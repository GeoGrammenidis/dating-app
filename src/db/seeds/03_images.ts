import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("images").del()
        .then(() => {
            // Inserts seed entries
            return knex("images").insert([
                { image_url: "10000", owner_id: 1 },
                { image_url: "10001", owner_id: 1 },
                { image_url: "10002", owner_id: 1 },
                { image_url: "10003", owner_id: 1 },
                { image_url: "10004", owner_id: 1 },
                { image_url: "10005", owner_id: 1 },
                { image_url: "10006", owner_id: 1 },
                { image_url: "10007", owner_id: 1 },
                { image_url: "10008", owner_id: 1 },
                { image_url: "10009", owner_id: 1 },
                { image_url: "10010", owner_id: 2 },
                { image_url: "10011", owner_id: 2 },
                { image_url: "10012", owner_id: 2 },
                { image_url: "10013", owner_id: 2 },
                { image_url: "10014", owner_id: 2 },
                { image_url: "10015", owner_id: 1 },
                { image_url: "10016", owner_id: 2 },
                { image_url: "10017", owner_id: 2 },
                { image_url: "10018", owner_id: 2 },
                { image_url: "10019", owner_id: 2 },
                { image_url: "10020", owner_id: 3 },
                { image_url: "10021", owner_id: 3 },
                { image_url: "10022", owner_id: 3 },
                { image_url: "10023", owner_id: 3 },
                { image_url: "10024", owner_id: 3 },
                { image_url: "10025", owner_id: 3 },
                { image_url: "10026", owner_id: 3 },
                { image_url: "10027", owner_id: 3 },
                { image_url: "10028", owner_id: 3 },
                { image_url: "10029", owner_id: 3 },
                { image_url: "10030", owner_id: 4 },
                { image_url: "10031", owner_id: 4 },
                { image_url: "10032", owner_id: 4 },
                { image_url: "10033", owner_id: 4 },
                { image_url: "10034", owner_id: 4 },
                { image_url: "10035", owner_id: 4 },
                { image_url: "10036", owner_id: 4 },
                { image_url: "10037", owner_id: 4 },
                { image_url: "10038", owner_id: 4 },
                { image_url: "10039", owner_id: 4 }
            ]);
        });
};