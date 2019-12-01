const Koa = require( "koa" )
const logger = require( "koa-morgan" )
const Router = require( "koa-router" )
const cors = require( "@koa/cors" ) // https://github.com/koajs/cors
const koaBody = require( "koa-body" ) // https://github.com/dlau/koa-body
const redis = require( "redis" ) // https://github.com/NodeRedis/node_redis
const bluebird = require( "bluebird" )

bluebird.promisifyAll( redis )
const client = redis.createClient()

const server = new Koa()
const router = new Router()


router.get( "/", (ctx) => {
    ctx.body = {
        firstName: "Stan",
        lastName: "Kovrigin"
    }
} )

router.post( "/resume", koaBody(),  async (ctx) => {
    await client.setAsync( "WISP", "HEY" )
    ctx.body = { data: ctx.request.body }
} )

server.use( logger( "tiny" ) )
// server.use( koaBody() )
server.use( cors( { "origin": "http://localhost:3000" } ) )
server.use( router.routes() )
server.listen( 4000 )

console.log( "http://localhost:4000" )
