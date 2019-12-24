import * as Yup from "yup" // https://github.com/jquense/yup

export const validationSignIn = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' ),
    password: Yup.string()
        .max( 100, "Too many symbols" )
        .required( 'Required' ),
    // remember: Yup.boolean()
    //     .oneOf( [ false ], "remember me" )
} )
