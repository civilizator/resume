import React, { useEffect, useState } from "react"
import Loader from "react-loaders"
import "./PreloaderContainer.scss"

export const PreloaderContainer = () => {
    const [ isLoader, setLoader, ] = useState( !0 )
    const [ isRemove, setRemove ] = useState( !0 )

    useEffect( () => {

            setTimeout( () => {

                setLoader( !1 )

                setTimeout( () => { setRemove( !1 ) }, 300 )

            }, 10 )
        },
        [ isLoader, isRemove ]

    )

    const containerLoader = [ "container-loader" ]
    !isLoader && containerLoader.push( "fade" )

    return (
        isRemove &&
        <div className={ containerLoader.join( " " ) }>
            <Loader type="pacman" active/>
        </div>
    )
}
