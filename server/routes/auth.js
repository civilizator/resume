const jwt = require( 'jsonwebtoken' ) // https://jwt.io/

const db = require( "../db" )
const bcrypt = require( "../utilities/bcrypt" )

const secret = process.env.JWT_SECRET || 'navigator'

module.exports = async (ctx) => {
    const wrongUserPassMsg = "Incorrect username and, or password."
    const { username, password } = ctx.request.body

    if (!username) {
        ctx.throw( 422, 'Username required.' )
    } else if (!password) {
        ctx.throw( 422, 'Password required.' )
    }

    const dbUser = await db.first( [ 'id', 'passwordHash' ] )
        .from( 'users2' )
        .where( { username } )

    if (!dbUser) {
        ctx.throw( 401, wrongUserPassMsg )
    }

    if (await bcrypt.compare( password, dbUser.passwordHash )) {
        const payload = { sub: dbUser.id }
        ctx.body = jwt.sign( payload, secret )
    } else {
        ctx.throw( 401, wrongUserPassMsg )
    }
}
