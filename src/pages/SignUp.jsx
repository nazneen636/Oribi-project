import React, { useState } from "react";
import BredCumb from "../layers/BredCumb";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
("");
import Btn from "../layers/Btn";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

const divisions = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Mymensingh",
];
const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

const SignUp = () => {
  // =============usestate=============
  let [firstName, setFirstName] = useState();
  let [fNameErr, setfNameErr] = useState();

  let [lastName, setlastName] = useState();
  let [lastNameErr, setlastNameErr] = useState();

  let [emailId, setemailId] = useState();
  let [emailErr, setemailErr] = useState();

  let [phone, setphone] = useState();
  let [phoneErr, setphoneErr] = useState();

  let [password, setpassword] = useState();
  let [passwordErr, setpasswordErr] = useState();

  let [repeatPassword, setrepeatPassword] = useState();
  let [repeatPasswordErr, setrepeatPasswordErr] = useState();

  let [addressOne, setaddressOne] = useState();
  let [addressOneErr, setaddressOneErr] = useState();

  let [city, setcity] = useState();
  let [cityErr, setcityErr] = useState();

  let [pCOde, setpCOde] = useState();
  let [pCOdeErr, setpCOdeErr] = useState();

  let [district, setdistrict] = useState();
  let [districtErr, setdistrictErr] = useState();

  let [division, setdivision] = useState();
  let [divisionErr, setdivisionErr] = useState();

  let [eye, setEye] = useState(true);
  // =============usestate=============

  // =============function=============
  let manageFirstName = (element) => {
    let fName = element.target.value;
    setFirstName(fName);
    setfNameErr("");
  };

  let manageLastName = (element) => {
    let lName = element.target.value;
    setlastName(lName);
    setlastNameErr("");
  };

  let manageEmail = (element) => {
    let email = element.target.value;
    setemailId(email);
    setemailErr("");
  };

  let managePhone = (element) => {
    let phnNo = element.target.value;
    setphone(phnNo);
    setphoneErr("");
  };

  let managePassword = (element) => {
    let passwd = element.target.value;
    setpassword(passwd);
    setpasswordErr("");
  };

  let manageRepeatPassword = (element) => {
    let rPasswd = element.target.value;
    setrepeatPassword(rPasswd);
    setrepeatPasswordErr("");
  };

  let manageAddressOne = (element) => {
    let address1 = element.target.value;
    setaddressOne(address1);
    setaddressOneErr("");
  };

  let managecity = (element) => {
    let c = element.target.value;
    city(c);
    cityErr("");
  };

  let managepCOde = (element) => {
    let code = element.target.value;
    pCOde(code);
    pCOdeErr("");
  };

  let manageDistrict = (element) => {
    let dis = element.target.value;
    district(dis);
    districtErr("");
  };

  let manageDivision = (element) => {
    let div = element.target.value;
    division(div);
    divisionErr("");
  };

  // --------btn function----------
  let manageBtn = () => {
    if (!firstName) {
      setfNameErr("First name is required");
    }
    if (!lastName) {
      setlastNameErr("Last name is required");
    }
    if (!emailId) {
      setemailErr("Email is required");
    }
    if (!phone) {
      setphoneErr("Phone no is required");
    }
    if (!password) {
      setpasswordErr("Password is required");
    } else if (!/^(?=.*[0-9])/.test(password)) {
      setpasswordErr("Password must contain one digit from 1 to 9");
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setpasswordErr("Password must contain one lowercase letter");
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setpasswordErr("Password must contain one uppercase letter");
    } else if (!/^(?=.*\W)/.test(password)) {
      setpasswordErr("Password must contain one special character");
    } else if (!/^.{8,16}/.test(password)) {
      setpasswordErr("Password must be 8-16 characters long");
    }
    if (!repeatPassword) {
      setrepeatPasswordErr("Repeat password is required");
    }
    if (!addressOne) {
      setaddressOneErr("Address is required");
    }
    if (!city) {
      setcityErr("City is required");
    }
    if (!pCOde) {
      setpCOdeErr("Post code is required");
    }
    if (!district) {
      setdistrictErr("District is required");
    }
    if (!division) {
      setdivisionErr("Division is required");
    }
  };
  // =============function=============
  return (
    <div>
      <Container>
        <BredCumb />
        <p className="mb-[120px] w-[600px] text-[16px] leading-8 text-[#767676]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        {/* ========================================
                personal details start
        ======================================== */}
        <div className="personalDetail pb-[69px] border-b  border-b-[#f0f0f09c]">
          <Heading className="mb-[42px]" headingText="Your Personal Details" />
          <div className="form flex flex-wrap gap-x-10 gap-y-8">
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="fName"
              >
                First Name
              </label>
              <input
                onChange={manageFirstName}
                value={firstName}
                id="fName"
                type="text"
                placeholder="First Name"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {fNameErr}
              </p>
            </div>
            {/* ============================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="lName"
              >
                Last Name
              </label>
              <input
                onChange={manageLastName}
                value={lastName}
                id="lName"
                type="text"
                placeholder="Last Name"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {lastNameErr}
              </p>
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                onChange={manageEmail}
                value={emailId}
                id="email"
                type="text"
                placeholder="company@domain.com"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {emailErr}
              </p>
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="phone"
              >
                Telephone
              </label>
              <input
                onChange={managePhone}
                value={phone}
                id="phone"
                type="text"
                placeholder="Your phone number"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {phoneErr}
              </p>
            </div>
            {/* ================================ */}
          </div>
        </div>
        {/* ========================================
                personal details end
        ======================================== */}
        {/* ========================================
                new customer start
        ======================================== */}
        <div className="newCustomer mt-[60px] pb-[69px] border-b border-b-[#f0f0f09c]">
          <Heading className="mb-[42px]" headingText="New Customer" />
          <div className="form flex flex-wrap gap-x-10 gap-y-6">
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="address-1"
              >
                Address 1
              </label>
              <input
                onChange={manageAddressOne}
                value={addressOne}
                id="address-1"
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {addressOneErr}
              </p>
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px]">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="address-2"
              >
                Address 2
              </label>
              <input
                id="address-2"
                type="text"
                placeholder="-"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="city"
              >
                City
              </label>
              <input
                onChange={managecity}
                value={city}
                id="city"
                type="text"
                placeholder="Your city"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {cityErr}
              </p>
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="postCode"
              >
                Post Code
              </label>
              <input
                onChange={managepCOde}
                value={pCOde}
                id="postCode"
                type="text"
                placeholder="05228"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {pCOdeErr}
              </p>
            </div>
            {/* ================================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="address-1"
              >
                Division
              </label>
              <select
                onChange={manageDivision}
                value={division}
                className="py-2 outline-none pb-4 border-b text-sm border-b-[#F0F0F0] text-[#262626]"
                name=""
                id=""
              >
                <option className="" value="please select">
                  Please select
                </option>
                {divisions.map((item, i) => (
                  <option key={i} className="" value="please select">
                    {item}
                  </option>
                ))}
              </select>
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {divisionErr}
              </p>
            </div>
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="address-1"
              >
                District
              </label>
              <select
                onChange={manageDistrict}
                value={district}
                className="py-2 outline-none pb-4 border-b text-sm border-b-[#F0F0F0] text-[#262626]"
                name=""
                id=""
              >
                <option className="" value="please select">
                  Please select
                </option>
                {districts.map((item, i) => (
                  <option key={i} className="" value="please select">
                    {item}
                  </option>
                ))}
              </select>
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {districtErr}
              </p>
            </div>
          </div>
        </div>
        {/* ========================================
                new customer end
        ======================================== */}

        {/* ========================================
                password start
        ======================================== */}
        <div className="password mt-[60px] pb-[69px] border-b border-b-[#f0f0f09c]">
          <Heading className="mb-[42px]" headingText="Your Password" />
          <div className="form flex flex-wrap gap-x-10 gap-y-6">
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="passwd"
              >
                Password
              </label>
              <input
                onChange={managePassword}
                value={password}
                id="passwd"
                type={`${eye ? "password" : "text"}`}
                placeholder="Password"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {passwordErr}
              </p>
              <IoMdEye
                onClick={() => {
                  setEye(!eye);
                }}
                className={`text-xl absolute right-4 bottom-4 ${
                  eye ? "opacity-100" : "opacity-0"
                }`}
              />
              <FaEyeSlash
                onClick={() => {
                  setEye(!eye);
                }}
                className={`text-xl absolute right-4 bottom-4 ${
                  eye ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            {/* ============================ */}
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="rPassword"
              >
                Repeat Password
              </label>
              <input
                onChange={manageRepeatPassword}
                value={repeatPassword}
                id="rPassword"
                type={`${eye ? "password" : "text"}`}
                placeholder="Repeat Password"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {repeatPasswordErr}
              </p>
              <IoMdEye
                onClick={() => {
                  setEye(!eye);
                }}
                className={`text-xl absolute right-4 bottom-4 ${
                  eye ? "opacity-100" : "opacity-0"
                }`}
              />
              <FaEyeSlash
                onClick={() => {
                  setEye(!eye);
                }}
                className={`text-xl absolute right-4 bottom-4 ${
                  eye ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
        {/* ========================================
                password end
        ======================================== */}
        <Btn onclick={manageBtn} btnText="Log in" />
      </Container>
    </div>
  );
};

export default SignUp;
