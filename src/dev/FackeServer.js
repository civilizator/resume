
export const SendToFakeServer = async (values, time = 1000) => {
    await new Promise( resolve => setTimeout( resolve, time ) )
    return values
}

