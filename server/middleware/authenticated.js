const jwt = require( "jsonwebtoken" ) // https://jwt.io/

const secret = process.env.JWT_SECRET || 'navigator'

module.exports = async (ctx, next) => {

    if (!ctx.headers.authorization) {
        ctx.throw( 403, 'No token.' )
    }

    const token = ctx.headers.authorization.split( ' ' )[1]

    try {
        ctx.request.jwtPayload = jwt.verify( token, secret )
    } catch (err) {
        ctx.throw( err.status || 403, err.text )
    }

    await next()
}
