import React  from 'react';
import useProducts from './../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from './../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products )
    const navigate = useNavigate()

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    
    const handleOrder = () =>{
        navigate('/placeOrder')
        setCart([])
        clearTheCart();
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                    /> )
                }
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className='btn-regular '>Place Order</button>
                </Cart>
                
           </div>
        </div>
    );
};

export default OrderReview;