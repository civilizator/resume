import * as Yup from "yup" // https://github.com/jquense/yup

export const validationSignIn = Yup.object( {
    login: Yup.string()
        .max( 100, "Too many symbols" )
        .required( 'Required' ),
    password: Yup.string()
        .max( 100, "Too many symbols" )
        .required( 'Required' ),
    // remember: Yup.boolean()
    //     .oneOf( [ false ], "remember me" )
} )
