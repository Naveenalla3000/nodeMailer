const nodemailer = require( 'nodemailer' )
const sendMail = async ( req, res ) => {
    const { userEMail } = req.body;
    let transport = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    } )
    let message = {
        from: process.env.EMAIL,
        to: userEMail,
        subject: "sending a mail through coding",
        html: "<h1>Naveen alla</h1> <p>is a good boy<p>"
    }
    transport.sendMail( message )
        .then( () => res.status( 200 ).json( { message: "you should recive an email" } ) )
        .catch( ( error ) => res.status( 400 ).json( { error } ) )
}

module.exports = {
    sendMail
}