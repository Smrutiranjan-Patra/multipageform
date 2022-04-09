import React from "react";

const One = () => {
  return (
    <div className="one">
      <h1 className="heading">Multi Page Form</h1>
      <label htmlFor="name">Name</label>
      <div className="inputdiv">
        <input type="text" placeholder="Your name" name="name" />
      </div>
      <label htmlFor="age">Age</label>
      <div className="inputdiv">
        <input type="number" placeholder="Your age" name="age" />
      </div>
      <label htmlFor="DOB">Date of Birth</label>
      <div className="inputdiv">
        <input type="Date" placeholder="Your Date of Birth" name="DOB" />
      </div>
      <button className="btn">Next</button>
    </div>
  );
};

export default One;
