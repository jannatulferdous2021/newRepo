import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity,img, key} =props.product;
    const {handleRemove} = props;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3 className='product-name'>{name}</h3>
            <p>{price}</p>
            <p>{quantity}</p>
            <button onClick={()=>handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;