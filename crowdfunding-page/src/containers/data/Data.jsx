import React from 'react'
import './data.css'

const Item = ({title, text}) => (
  <div className='item'>
    <h1 className='item__title'>{title}</h1>
    <p className='item__text'>{text}</p>
  </div>
)

const Data = () => {
  return (
    <div className='data'>
      <Item title="$89,914" text="of $100,000 backed"/>
      <Item title="5,007" text="total backers"/>
      <Item title="56" text="days left"/>
      <div className='data__stick'/>
    </div>
  )
}

export default Data
