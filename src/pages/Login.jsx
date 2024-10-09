import React, { useState } from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import Heading from "../layers/Heading";
import Btn from "../layers/Btn";

const Login = () => {
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [password, setPassword] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  let manageEmail = (e) => {
    let emailCheck = e.target.value;
    setEmail(emailCheck);
    console.log(email);
    setEmailErr("");
  };
  let managePassword = (e) => {
    let passwordCheck = e.target.value;
    setPassword(passwordCheck);
    setPasswordErr("");
  };
  let manageLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("Email is required");
    }
    if (!password) {
      setPasswordErr("Email is required");
    }
  };
  return (
    <div>
      <Container>
        <BredCumb />
        <p className="text-base leading-[30px] max-w-[644px] tracking-wide ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <hr className="border-[#F0F0F0] my-[60px]" />
        <form className="mt-[150px]" action="">
          <div className="flex gap-10">
            <div className="w-[507px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                onChange={manageEmail}
                value={email}
                id="email"
                type="text"
                placeholder="company@domain.com"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 text-sm font-semibold absolute left-0 top-[105%]">
                {emailErr}
              </p>
            </div>
            <div className="w-[507px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={managePassword}
                value={password}
                id="password"
                type="password"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 text-sm font-semibold absolute left-0 top-[105%]">
                {passwordErr}
              </p>
            </div>
          </div>
          <Btn onClick={manageLogin} className="mt-8" btnText="Log in" />
        </form>
        <Heading className="mt-[58px] mb-[38px]" headingText="New Customer" />
        <p className="text-base leading-[30px] max-w-[644px] tracking-wide ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </Container>
    </div>
  );
};

export default Login;
