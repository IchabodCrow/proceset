import { isEmpty } from "lodash";

export const formValidator = (fields) => {
  const errors = {};

  if (isEmpty(fields?.loginField)) {
    errors.loginField = "Not empty login field";
  }

  if (isEmpty(fields?.passwordField)) {
    errors.passwordField = "Not empty pass field";
  }

  return errors;
};

export const passLength = (len) => (value) => {
  console.log('Click')
  return value?.length < len
    ? `Length of password will be more or equal ${len}`
    : null;
};

export const onlyEmail = (value) => {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
      
    return null;
  }
};

export const passValid = (fields) => {
    return isEmpty(fields?.passwordField.value != fields?.repPas.value) ? 'Password not clone' : null;
}

export const matchInput = (field, allInputs) =>
field === allInputs.passwordField ? undefined : 'Пароль не совпадает';