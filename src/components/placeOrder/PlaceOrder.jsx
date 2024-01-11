import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div>
            <h1>Your Order Placed Already</h1>
            <img src={img} alt="" />
            <h1>Thank You !</h1>
        </div>
    );
};

export default PlaceOrder;