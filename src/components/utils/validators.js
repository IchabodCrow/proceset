

export const passLength = (len) => (value) => {
  return value?.length < len
    ? `Length of password will be more or equal ${len}`
    : null;
};

export const matchInput = (field, allInputs) =>
field === allInputs.passwordField ? undefined : 'Пароль не совпадает';

export const validate = values => {
  const errors = {}
  if (!values.loginField) {
    errors.loginField = 'Required'
  } else if (values.loginField.length > 15) {
    errors.loginField = 'Must be 15 characters or less'
  }
  if (!values.passwordField) {
    errors.passwordField = 'Введите ваш пароль';
  }
  if (!values.email) {
    errors.email = 'Invalid email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}
