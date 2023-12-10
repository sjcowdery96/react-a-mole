import Mole from "./Mole"
import MoleHill from "./MoleHill"
import React, { useState, useEffect } from 'react'

function MoleContainer(props) {
    let [displayMole, setVisible] = useState(false)

    function whacked() {
        //score increment
        props.setScore(props.score + 1)
        //set mole to invisible
        setVisible(false)
    }
    function missed() {
        //score decrement
        props.setScore(props.score - 1)
    }

    return (
        <div>
            {displayMole ? <Mole style={{ 'width': '100%' }} whacked={whacked} setVisible={setVisible}></Mole> : <MoleHill missed={missed} style={{ 'width': '100%' }} setVisible={setVisible}></MoleHill>}
        </div>
    )

}

export default MoleContainer