import * as Yup from "yup"

export const validationSignUp = Yup.object( {
    username: Yup.string()
        // .trim()
        // .strict()
        .matches(/^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/,
            `Should be only alphanumeric characters or single hyphens, and can't begin or end with a hyphen` )
        .min( 4, "Must be at least 4 characters" )
        .max( 40, "Must be no more than 40 characters" )
        .required( 'Required' ),
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' ),
    password: Yup.string()
        .matches(/^[A-Za-z\d~#$^+-=!*()@%&]*$/,
            `Can be only letters, numbers and special character`)
        .min( 8, "Must be at least 8 characters" )
        .max( 100, "Must be no more than 100 characters" )
        .required( 'Required' )
} )
