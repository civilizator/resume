const bcrypt = require( 'bcrypt-nodejs' )

/*
> node
> const bcrypt = require('./utilities/bcrypt');
> bcrypt.hash('mypassword').then(hash => console.log(hash));

$2a$10$3pwJNVCM6NKzBOD1HPZHjuFdjX2Dg771aPZNbbBw9jTUbEMS919Te
*/

const saltRounds = process.env.SALT_ROUNDS || 20000

const genSalt = (rounds) => new Promise( (resolve, reject) => {
    bcrypt.genSalt( rounds, (err, result) => {
        if (err) {
            reject( err )
        } else {
            resolve( result )
        }
    } )
} )

const hash = (data) => new Promise( async (resolve, reject) => {
    const salt = await genSalt( saltRounds )

    bcrypt.hash( data, salt, null, (err, result) => {
        if (err) {
            reject( err )
        } else {
            resolve( result )
        }
    } )
} )

const compare = (data, encrypted) => new Promise( (resolve, reject) => {
    bcrypt.compare( data, encrypted, (err, result) => {
        if (err) {
            reject( err )
        } else {
            resolve( result )
        }
    } )
} )

module.exports = {
    hash,
    compare,
}