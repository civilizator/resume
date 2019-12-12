
import { SendToFakeServer as sendToFakeServer } from "../../dev/FackeServer"

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test( String( email ).toLowerCase() )
}

export const checkEmail = async (value) => {

    if (!value) {
        return "Email is required"
    }

    if (!validateEmail( value )) {
        return "Please enter a valid email addresss"
    }

    console.log( `Checking email: ${ value }...` )

    await sendToFakeServer(value)

    return value === "tanner@gmail.com" ? "Email is already being used" : !1
}
