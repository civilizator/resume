const Koa = require( "koa" ) // https://koajs.com
const Router = require( "koa-router" ) // https://github.com/ZijianHe/koa-router
const logger = require( "koa-morgan" ) // https://github.com/koa-modules/morgan
const json = require( "koa-json" ) // https://github.com/koajs/json
const cors = require( "@koa/cors" ) // https://github.com/koajs/cors
const bodyParser = require( "koa-bodyparser" ) // https://github.com/koajs/bodyparser
const serve = require( "koa-static" ) // https://github.com/koajs/static

const errorHandler = require("./middleware/errorHandler")
const authenticated = require( "./middleware/authenticated" )

const authRoute = require("./routes/auth")
const petsRoute = require('./routes/pets')

const app = new Koa()
const router = new Router()

app.use( logger( "tiny" ) )
app.use( json() )
app.use( errorHandler )
app.use( cors( { "origin": "http://localhost:3000" } ) )
app.use( serve( "./../public" ) )
// app.use( bodyParser() )
// app.use(cors())



app.use( router.routes() ).use( router.allowedMethods() )
app.listen( process.env.PORT || 4000 )

router.post( "/auth", bodyParser(), authRoute )

router.get('/my-pets', authenticated, petsRoute)

router.get( "/admin", bodyParser(),(ctx) => {
    ctx.body = "Hello Admin!"
} )


router.get( "/", (ctx) => {
    ctx.body = {
        firstName: "Stan",
        lastName: "Kovrigin"
    }
} )


console.log( "http://localhost:4000" )
