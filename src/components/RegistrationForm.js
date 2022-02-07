import React from "react";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {}

  render() {
    return (
      <div className="registrationFormContainer">
        <h1>Register Your Company with Clocky!</h1>
        <div className="registrationInputFields">
          <div className="inputFieldWrapper">
            <label for="companyName">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputFieldWrapper">
            <label for="adminEmail">Administrator Email</label>
            <input
              id="adminEmail"
              name="adminEmail"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputFieldWrapper">
            <label for="companyPassword">Company Password</label>
            <input
              id="companyPassword"
              name="companyPassword"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputFieldWrapper">
            <label for="companyComfirmPassword">Confirm Password</label>
            <input
              id="companyComfirmPassword"
              name="companyComfirmPassword"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
