import React, { useState, useEffect } from 'react'
const moleIMG = require('../mole.png')

function Mole(props) {

    useEffect(() => {
        if (props.timeLeft) {
            let popDuration = Math.floor(Math.random() * 3000)
            let timer = setTimeout(() => {
                props.setVisible(true)
            }, popDuration)
            return () => {
                {/*don't forget to clean up! */ }
                clearTimeout(timer)
            }
        }
        else {
            props.setVisible(false)
        }
    })

    return (
        <div>
            <img onClick={props.whacked} style={{ 'width': '100%' }} src={moleIMG} alt="mole"></img>
            <h2>Holy Sh*t a MOLE!</h2>
        </div>
    )

}

export default Mole