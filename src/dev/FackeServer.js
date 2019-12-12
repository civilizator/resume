import React from "react"

export const SendToFakeServer = async (values) => {
    await new Promise( resolve => setTimeout( resolve, 1000 ) )
    return values
}

