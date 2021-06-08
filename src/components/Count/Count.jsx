import React from 'react'
import './Count.css'

export const Count = ({ count, setCount }) => {
    const countMinusHandler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const countPlusHandler = () => {
        setCount(count + 1)
    }

    return (

        <div className={'container__amount'}>
            <div className={'amount'}>
                <button onClick={countMinusHandler}>-</button>
                <span>{count}</span>
                <button onClick={countPlusHandler}>+</button>
            </div>
            <button className={'button'}>Купить</button>
        </div>

    )
}