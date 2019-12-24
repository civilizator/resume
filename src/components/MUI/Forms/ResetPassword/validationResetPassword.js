import * as Yup from "yup"

export const validationResetPassword = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' )
} )
