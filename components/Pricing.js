// components/Pricing.js

import { useEffect, useState } from 'react';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/pricing')
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h2>{plan.product.name}</h2>
          <p>{plan.unit_amount / 100} {plan.currency.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
