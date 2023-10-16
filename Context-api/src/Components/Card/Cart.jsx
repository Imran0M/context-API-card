import React, { useContext } from 'react'
import { Data } from './Data'
import { PriceContext } from '../ContextAPI/ContextApi'
import './Card.css'

function Cart() {
    const price = 549
    const { apple9, setApple9, count, setCount, empty, setEmpty} = useContext(PriceContext)

    function handleAdd() {
        setApple9(apple9 + price)
        setCount(count + 1)
    }
    function handleSub() {
        setApple9(apple9 - price)
        setCount(count - 1)
    }
    function removeCart(){
        setCount(0)
        setApple9(0)
        if(count <= 0){
            setEmpty('Cart is Empty')
        }
    }

    return (
        <div className='card'>
            <div className='container'>
            <h1 className='shop-name'>Shopping Cart</h1>
                <div>{Data.products.map((items, index) => (
                    <div key={index} className='display-items'>
                        <div>
                            <img className='img' src={items.images[0]} alt='Error in server' />
                            <h2>{items.title}</h2>
                            <button className='remove-cart'onClick={removeCart}>Remove Cart</button>
                            <p className='limited-Stock'>{empty}</p>
                        </div>
                        <div >
                            <p><span>Brand :</span>{items.brand}</p>
                            <p><span>Description:</span>{items.description}</p>
                            <p><span>Price :</span>{items.price}</p>
                            <p><span>Discount Percentage :</span>{items.discountPercentage}</p>
                        </div>
                        <div >
                            <h3>Cart</h3>
                            <button className='btn' onClick={handleAdd}>+</button> 
                             <p className='bolt'>{count}</p> 
                              <button className='btn' onClick={handleSub}>-</button>
                              <hr/>
                            <p className='bolt'>Total  ${ apple9}</p>
                            <hr/>
                            <p className='limited-Stock'>{count >5 ? 'We have Limited stock': ''}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}

export default Cart