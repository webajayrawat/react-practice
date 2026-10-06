import React, { useRef } from "react";
import Input from "./Input";
import { Button } from "antd";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const focusName = (e) => {
    e.preventDefault();
    nameRef.current.focus();
  };

  const focusEmail = (e) => {
    e.preventDefault();
    emailRef.current.focus();
  };

  const focusPhone = (e) => {
    e.preventDefault();
    phoneRef.current.focus();
  };

  return (
    <div className="queue-form-card">
      <form className="queue-form"  >
        <h2>User Form</h2>

        <Input
          ref={nameRef}
          label="Name"
          placeholder="Enter your name"
        />

        <Input
          ref={emailRef}
          label="Email"
          placeholder="Enter your email"
        />

        <Input
          ref={phoneRef}
          label="Phone"
          placeholder="Enter your phone"
        />

        <div>
          <Button
            className="add-queue-btn"
            onClick={focusName}>
            Focus Name
          </Button>

          <Button
            className="add-queue-btn"
            onClick={focusEmail}>
            Focus Email
          </Button>

          <Button
            className="add-queue-btn"
            onClick={focusPhone}>
            Focus Phone
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;