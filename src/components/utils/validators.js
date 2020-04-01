

export const passLength = (len) => (value) => {
  return value?.length < len
    ? `Пароль не должен быть короче ${len} символов`
    : null;
};

export const matchInput = (field, allInputs) =>
field === allInputs.passwordField ? undefined : 'Пароли не совпадают';

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Не корректный email' : undefined

export const required = value => value ? undefined : 'Введите имя';
export const requiredSec = value => value ? undefined : 'Введите фамилию';