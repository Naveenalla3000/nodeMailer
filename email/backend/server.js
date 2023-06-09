const express = require( 'express' )
const dotenv = require( 'dotenv' ).config()
const colors = require( 'colors' )
const app = express()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || localhost
app.use( express.json() )
app.use( express.urlencoded( { extended: false } ) )
app.use( '/api', require( './routes/emailRoute.js' ) )
app.listen( PORT, () => console.log( `server running on ${ HOST } port ${ PORT }`.cyan.bgWhite.bold ) )