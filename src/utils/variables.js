export const BASE_URL = 'https://retoolapi.dev/7OWQC8/';

export const COLUMN_LIST =
  [
    { text: 'Статус', value: 'status' },
    { text: 'Имя', value: 'firstName' },
    { text: 'Фамилия', value: 'lastName' },
    { text: 'Компания', value: 'company' },
    { text: 'Специальность', value: 'job' },
    { text: 'Телефон', value: 'phone' },
    { text: 'E-mail', value: 'email' },
    { text: 'Интересы', value: 'hobby' },
  ];


export const MEMBER_STATUS = {
  ALL: 'all',
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',

};
export const MEMBER_STATUS_MENU = [
  {
    value: MEMBER_STATUS.ALL, text: 'Все', icon: 'mdi-check-circle',
  },
  {
    value: MEMBER_STATUS.CHECKED, text: 'Обработанные', icon: 'mdi-check-circle',
  },
  {
    value: MEMBER_STATUS.UNCHECKED, text: 'Не обработанные', icon: 'mdi-alert-circle',
  },
];