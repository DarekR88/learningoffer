// import React from "react";
import "./CustomerForm.scss";

const CustomerForm = (props) => {
  return (
    <div className="form-page">
      <div className="email-form">
        <form>
          <input type="text" name="name" placeholder="First Name" />
          <input type="text" name="e-mail" placeholder="Email&#42;" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
