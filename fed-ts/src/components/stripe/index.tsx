import * as React from "react";
import rocket from "../../assets/images/rocket.png";
import StripeCheckout from "react-stripe-checkout";
import {
  STRIPE_BTN_LABEL,
  APP_NAME,
  STRIPE_DESCRIPTION,
  STRIPE_PUBLISH_KEY
} from "../../config/config";

import { withRouter } from "react-router-dom";

const StripeButton = (props: any) => {
  const onToken = (token: any) => {
    props.history.push("/billing", { token });
    return token;
  };

  return (
    <StripeCheckout
      label={STRIPE_BTN_LABEL} //Component button text
      name={APP_NAME} //Modal Header
      description={STRIPE_DESCRIPTION}
      panelLabel={STRIPE_BTN_LABEL} //Submit button in modal
      amount={12000} //Amount in cents $9.99
      token={onToken}
      stripeKey={STRIPE_PUBLISH_KEY}
      image={rocket} //Pop-in header image
      billingAddress={false}
    />
  );
};

export default withRouter(StripeButton);
