import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { number } from "prop-types";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51M2VS2DXTtItBmIFVBFuJKx3GyGBm4UUQFvFUE6ZFdPNYN1MAm56vVqBx8S31lpMpvgbC9SOJdbAKL8PcR3BlSR300R0u0gmcc";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MARDIN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: number,
};

export default StripeCheckoutButton;
