import { loadStripe } from '@stripe/stripe-js';

// This is your test publishable API key.
const stripePromise = loadStripe('pk_test_51234567890abcdef...');

export default stripePromise;

export const createPaymentIntent = async (amount: number, currency: string = 'usd') => {
  console.log('Creating payment intent for amount:', amount, currency);
  
  // In a real application, this would be a call to your backend
  // For demo purposes, we'll simulate the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        client_secret: 'pi_test_1234567890_secret_test123',
        amount,
        currency
      });
    }, 1000);
  });
};