export const projectConstants = {
  SORT_BY_VIEWS_ASC: 'Sorted by views count in ascending order!',
  SORT_BY_VIEWS_DESC: 'Sorted by views count in descending order!',
  SORT_BY_DATE_ASC: 'Sorted by published date in ascending order!',
  SORT_BY_DATE_DESC: 'Sorted by published date in descending order!',
  SIX_MONTHS_IN_SECONDS: 15552000000,
  ONE_MONTH_IN_SECONDS: 2592000000,
  SEVEN_DAYS_IN_SECONDS: 604800000,
  INACTIVE_FILTERS_WARNING: 'Please use search first to enable query filters!',
  CLICK_ON_LOGIN_BUTTON: 'Login button has been clicked!',
  EMPTY_EMAIL_FIELD_MESSAGE: 'Please enter a login email!',
  INVALID_EMAIL_FIELD_MESSAGE: 'The login email is invalid!',

  EMPTY_PASSWORD_FIELD_MESSAGE: 'Please enter a password!',
  PASSWORD_LENGTH_MESSAGE: 'at least 8 characters',
  PASSWORD_UPPER_LOWER_CASE_MESSAGE: 'a mixture of both uppercase and lowercase letters',
  PASSWORD_DIGITS_LETTERS_MESSAGE: 'a mixture of letters and numbers',
  PASSWORD_SPECIAL_SYMBOLS_MESSAGE: 'at least one special character, e.g., ! @ # ?',

  ADMIN_FORM_TITLE_MESSAGE_REQUIRED: 'Please enter a title',
  ADMIN_FORM_TITLE_MESSAGE_MIN_LENGTH: 'The title is too short',
  ADMIN_FORM_TITLE_MESSAGE_MAX_LENGTH: 'The title is too long',
  ADMIN_FORM_CREATION_DATE_MESSAGE_REQUIRED: 'Please enter a creation date',
  ADMIN_FORM_CREATION_DATE_MESSAGE_FUTURE_DATE: 'The date is invalid',
};

export enum ProjectPath {
  Empty = '',
  Login = 'login',
  Search = 'search',
  Admin = 'admin',
  Item = 'item',
  ItemId = ':id',
  Favorite = 'favorite',
}
