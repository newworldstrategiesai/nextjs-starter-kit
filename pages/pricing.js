import React from 'react';
import Head from 'next/head';

const PricingPage = () => {
  return (
    <div>
      <Head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <stripe-pricing-table
        pricing-table-id="prctbl_1PY2NfEJct0cvYrGQw9XNunL"
        publishable-key="pk_live_51OUH9GEJct0cvYrGZsaXzutR3cLpWkGRlMVzKsqBCQjYaXHJUfuk9qtMjwy7fxlcQVOhgyyshPHGxIwZIgXby2QW00QPLmick3"
      ></stripe-pricing-table>
    </div>
  );
};

export default PricingPage;
