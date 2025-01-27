import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutButton = () => {
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch('http://localhost:4000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: [
                    { price: 'price_1Example123', quantity: 1 }, // Replace with your Price ID
                ],
            }),
        });

        const session = await response.json();
        await stripe.redirectToCheckout({ sessionId: session.url });
    };

    return (
        <button onClick={handleCheckout}>
            Checkout
        </button>
    );
};

export default CheckoutButton;
