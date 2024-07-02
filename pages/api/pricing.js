// pages/api/pricing.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const prices = await stripe.prices.list({
    expand: ['data.product'],
  });

  res.status(200).json(prices.data);
}
