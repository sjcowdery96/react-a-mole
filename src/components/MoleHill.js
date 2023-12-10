import React, { useState, useEffect } from 'react'
const moleHillIMG = require('../molehill.png')

function MoleHill(props) {
    useEffect(() => {
        let popDuration = Math.floor(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setVisible(true)
        }, popDuration)
        return () => {
            {/*don't forget to clean up! */ }
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <img onClick={props.missed} style={{ 'width': '30ev' }} src={moleHillIMG} alt="molehill"></img>
            <h2>just a hill</h2>
        </div>
    )

}

export default MoleHill