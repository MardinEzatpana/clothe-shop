import React, { useState } from "react";
import CustomButton from "../../../components/common/customButton/CustomButton";
import FormInput from "../../../components/common/formInput/FormInput";
import "./signIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail(email);
    setPassword(password);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={(event)=>setEmail(event.target.value)}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={(event)=>setPassword(event.target.value)}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
