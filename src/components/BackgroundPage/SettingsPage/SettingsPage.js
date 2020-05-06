import React, { Component } from "react";
import { withMutation,useQuery } from "react-apollo";
import { SubmissionError,Field, reduxForm } from "redux-form";

import setting from "./SettingsPage.module.css";
import Button from "../../UI/Button/Button";
import editUser from "../../queries/editUser";
import history from "../../history/history";


import { matchInput, passLength, email } from "../../utils/validators";
import { load as loadAccount } from "../../../reducers/initialValueFieldsReducer";
import { connect } from "react-redux";
import currentUserQuery from "../../queries/currentUserQuery";
import SettingForm from "./SettingForm";


let SettingPage = (props) => {

  const { data } = useQuery(currentUserQuery, {
    fetchPolicy: "network-only",
  });

  const handleSubmit = (fields) => {
    const { mutate } = props;
    return new Promise((resolve, reject) => {
      mutate({
        variables: {
          id: data?.currentUser.id,
          firstName: fields.firstName,
          secondName: fields.secondName,
          email: fields.email,
        },
      })
        .then((res) => {
          resolve(res);
          history.push("/process");
        })
        .catch((e) => {
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  };

  return (
    <div className={setting.box}>
      <SettingForm onSubmit={handleSubmit} data={data}/>
    </div>
  );
};


export default withMutation(editUser)(SettingPage);
