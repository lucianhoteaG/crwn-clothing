import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Oe7YG9llddFyM9sCWhzC8a2k000EhU9vsR'  

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')    
  }
  
  return (
    <StripeCheckoutButton
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKet={publishableKey}    
    />
  );  
};

export default StripeCheckoutButton;