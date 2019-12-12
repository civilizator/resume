const path = require( "path" ) // https://github.com/jinder/path
const knex = require( "knex" ) // https://github.com/knex/knex http://knexjs.org/

module.exports = knex({
    client: 'sqlite3',
    connection: { filename: path.join(__dirname, 'db.sqlite') },
    useNullAsDefault: true,
})

