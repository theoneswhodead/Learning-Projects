import React, {useReducer} from 'react'

const AddToCart = () => {

  const reducer = (stateCount, action) => {
    switch(action.type) {
      case 'increment': {
        return {
          ...stateCount,
          count: stateCount.count + 1 
        }
      }
      case 'decrement': {
        return {
          ...stateCount,
          count: stateCount.count - 1
        }
      }
    }
  }
    const [count, dispatch] = useReducer(reducer, { count: 0 });

    const handleIncrement = () => {
      dispatch({ type: 'increment' })
    }

    const handleDecrement = () => {
      dispatch({type: 'decrement'})
    }


  return (
    <div className='m-6'>
      <h2 className='text-[12px] leading-[14.88px] tracking-[1.85px] uppercase font-bold text-Orange'>Sneaker Company</h2>
      <h1 className='text-[28px] leading-[32px] font-bold text-Very_dark_blue mb-[15px] mt-[16px]'>Fall Limited Edition <br />Sneakers</h1>

      <p className='text-[15px] leading-[25px] text-Dark_grayish_blue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

      <div className='flex justify-between mt-[28px] mb-[19px]'>
        <div className='flex items-center gap-4'>
          <h1 className='text-[28px] leading-[34.73px] font-bold text-Very_dark_blue'>$125.00</h1>
          <span className='text-[16px] font-bold leading-[19.84px] text-Orange bg-Pale_orange px-2 py-1 rounded-md '>50%</span>
        </div>
        <div>
          <span className='text-Grayish_blue text-[16px] font-bold leading-[26px] line-through'>$250.00</span>
        </div>
      </div>
        {/* //Go UseReducer */}
      <div className='flex justify-between items-center bg-Light_grayish_blue px-[24px] py-[5px] font-bold rounded-xl'> 
        <button className='text-Orange text-[30px]' onClick={handleDecrement}>-</button>
        <span className='text-[16px] leading-[19.84px] '>{count}</span>
        <button className='text-Orange text-[30px]' onClick={handleIncrement}>+</button>
      </div>
      <button className='flex items-center bg-Orange px-[104px] py-[16px] mt-[16px]  text-[16px] font-bold text-white rounded-xl'>
        <img src="../../images/icon-cart.svg" alt="" className='w-[17.46px] h-[16px] mr-[16px]'/>Add to cart
      </button>
    </div>
  )
}

export default AddToCart
