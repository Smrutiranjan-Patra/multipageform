import React from "react";

const Two = () => {
  return (
    <div className="two">
      <h1 className="heading">Multi Page Form</h1>
      <label htmlFor="stateofresidence">State of Residence</label>
      <div className="inputdiv">
        <input
          type="text"
          placeholder="Your state of residence"
          name="stateofresidence"
        />
      </div>
      <label htmlFor="address">Address</label>
      <div className="inputdiv">
        <input type="text" placeholder="Your address" name="address" />
      </div>
      <label htmlFor="pincode">Pincode</label>
      <div className="inputdiv">
        <input type="number" placeholder="Your Pincode" name="pincode" />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};

export default Two;
