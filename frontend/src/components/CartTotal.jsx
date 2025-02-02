import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

  const {currency, getCartAmount, delivery_Fee} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className='prata-regular'>Subtotal</p>
          <p className='prata-regular'>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className='prata-regular'>Shippinig Fee</p>
          <p className='prata-regular'>{currency} {delivery_Fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b className='prata-regular'>Total</b>
          <b className='prata-regular'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_Fee}.00 </b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal