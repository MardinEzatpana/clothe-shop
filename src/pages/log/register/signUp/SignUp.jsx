import React, { useState } from "react";
import CustomButton from "../../../../components/common/customButton/CustomButton";
import FormInput from "../../../../components/common/formInput/FormInput";

import "./signUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail(email);
    setPassword(password);
    displayName(displayName);
    setConfirmPassword(confirmPassword);
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
