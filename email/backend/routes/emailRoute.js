const express = require( 'express' )
const router = express.Router()
const {
    sendMail
} = require( '../controller/emailController.js' )
router.post( '/sendmail', sendMail );
module.exports = router;