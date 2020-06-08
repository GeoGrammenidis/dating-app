import knex from './knex'; //the connection!


export class Queries {

    public insert(email: string, password: string) {
        return knex('users').insert({ email: email, password: password });
    }
    public find(email: string) {
        return knex('users').where({ email: email });
    }
    public getAll(userRequested: number) {
        return knex('users').whereNotIn('id', knex('block').select('user_id_requested').where('user_id_blocked', userRequested)).whereNot('id', userRequested);
    }
    public block(userRequested: number, blocked: number) {
        return knex('block').insert({ user_id_requested: userRequested, user_id_blocked: blocked });
    }
    public like(userRequested: number, picture_id: number) {
        return knex('likes').insert({ person_that_liked: userRequested, image_id: picture_id });
    }

    public notification(like_id: number) {
        return knex('likes').join('users', { 'users.id': 'likes.person_that_liked' }).where({ 'likes.id': like_id });
    }

}