import React, { useState } from 'react';
import { Count } from '../Count/Count'
import { Size } from '../Size/Size'
import { Options } from '../Options/Options'
import { ItemHeader } from '../Header/Header'
import './Item.css'

export const Item = ({ image, title, desc, price, id }) => {
  const [size, setSize] = useState(1);
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('Цвет');

  let fullPrice = size * count * price;

  return (

    <div className={"item"}>

      <ItemHeader image={image} />

      <div>
        <h1>{title}</h1>
      </div>

      <div className={'desc'}>{desc}</div>

      <div className={'optionsWrap'}>
        <Options color={color} setColor={setColor} />
        <div>{fullPrice} грн</div>
      </div>

      <Size
        id={id}
        size={size}
        setSize={setSize}
      />

      <Count
        count={count}
        setCount={setCount}
      />

    </div>
  )
}
