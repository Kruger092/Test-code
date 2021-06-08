import React, { useState } from 'react'
import './Header.css'
import weightIcon from '../../image/weight.svg'
import correctIcon from '../../image/correct.svg'

export const ItemHeader = ({ image }) => {
    const [isAdded, setIsAdded] = useState(false)

    const toggleHandler = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className={"header-wrapp"}>
            <span>New</span>
            <div className="img-wrapp">
                <img src={image} alt="src"/>
            </div>
            <div className={"weights-img"} onClick={toggleHandler}>
                <img src={isAdded ? correctIcon : weightIcon} alt="src"/>
            </div>
        </div>
    )
}