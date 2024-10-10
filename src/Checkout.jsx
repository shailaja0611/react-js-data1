import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import UserDetails from './ShippingImfo';
import PaymentOptions from './PaymentOptions';
import OrderSummary from './OrderSummary';

function Checkout() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/user-details" component={UserDetails} />
        <Route path="/payment-options" component={PaymentOptions} />
        <Route path="/order-summary" component={OrderSummary} />
      </Switch>
    </Router>
  );
}
export default Checkout