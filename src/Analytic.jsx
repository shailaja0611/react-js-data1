
import ReactGA from 'react-ga';

const GA_TRACKING_ID = 'UA-XXXXXX'; 

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logEvent = (category, action, label, value) => {
  ReactGA.event({ category, action, label, value });
};

export const logTransaction = (transaction) => {
  ReactGA.ecommerce.addTransaction({
    id: transaction.id,
    affiliation: 'Online Store',
    revenue: transaction.total,
    tax: transaction.tax,
    shipping: transaction.shipping,
    coupon: transaction.coupon,
  });

  transaction.items.forEach(item => {
    ReactGA.ecommerce.addItem({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: item.quantity,
    });
  });

  ReactGA.ecommerce.send();
};

