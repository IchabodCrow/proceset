import React from "react";
import {SubmissionError} from "redux-form";
import { withMutation } from "react-apollo";
import RegistrationForm from "./RegistrationForm";
import RegMutation from "../queries/signup";

import history from "../history/history";

const RegForm = (props) => {
  const handleSubmit = (fields) => {
    const { mutate } = props;
    return new Promise((resolve, reject) => {
      mutate({
        variables: {
          firstName: fields.firstName,
          secondName: fields.secondName,
          email: fields.email,
          password: fields.passwordField,
        },
      })
        .then((res) => {
          localStorage.setItem("token", res.data.signup);
          resolve(res);
          history.push("/setting");
        })
        .catch((e) => {
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  };

  return (
    <div>
      <RegistrationForm onSubmit={handleSubmit} />
      {props.error ? <span>{props.error}</span> : null}
    </div>
  );
};

export default withMutation(RegMutation)(RegForm);
