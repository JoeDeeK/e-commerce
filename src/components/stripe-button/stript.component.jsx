import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hzoj7KlHgZAKdzXCSFMR8hlltIXLftM7sFW56JLf73okHVInkYxpbYwFAdVMU7EplRaxGbnZGJNeu5x7MCkyjc900uxYKdaL1';

    const onToken = token => {
        // pass token to backend which creates the charge
        alert('Payment Successful');
    };

    return (
        //TODO: Upgrade to newer version of Stripe Checkout
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;