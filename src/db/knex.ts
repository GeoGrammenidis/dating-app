
const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://george:qwe@localhost:5432/dating_site'
});

export default knex;