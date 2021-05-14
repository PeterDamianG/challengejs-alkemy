/** @module Validation */
/**
 * Constant with all values for category.
 * @name ConstCategories
 * @constant
 * @readonly
 * @type {Array<String>}
 */
const CATEGORIES = [
  'Food',
  'Gas',
  'House',
  'Work',
  'Freelance',
  'Services',
  'Life',
  'Holiday',
  'Other',
  'None',
];
/**
 * Function to know if email is valid.
 * @name ValidEmail
 * @param {String} email An email with format for regex.
 * @example
 * isValidEmail("razzel@gmail.com");
 * true
 * @example
 * isValidEmail("razzelgmailcom");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format email.
 */
export const isValidEmail = (email) => {
  const rexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rexEmail.test(String(email).toLowerCase());
};
/**
 * Function to know if password is valid.
 * @name ValidPassword
 * @param {String} password A password with format for regex.
 * @example
 * isValidPassword("dmasdpasdsaf");
 * true
 * @example
 * isValidEmail("2ds");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format password.
 */
export const isValidPassword = (password) => {
  const rexPassword = /^.{8,32}$/;
  return rexPassword.test(String(password));
};
/**
 * Function to know if concept is valid.
 * @name ValidConcept
 * @param {String} concept A string with format for regex.
 * @example
 * isValidConcept("Buy gasoline for my car.");
 * true
 * @example
 * isValidEmail("2ds");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format for concept.
 */
export const isValidConcept = (concept) => {
  const rexConcept = /^.{4,128}$/;
  return rexConcept.test(String(concept));
};
/**
 * Function to know if amount is valid.
 * @name ValidAmount
 * @param {Number} amount A number with format for regex.
 * @example
 * isValidAmount(1000);
 * true
 * @example
 * isValidEmail("2ds");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format amount.
 */
export const isValidAmount = (amount) => amount >= 1 && amount <= 100000000;
/**
 * Function to know if category is valid.
 * @name ValidCategory
 * @see {@link CATEGORIES}
 * @param {String} category A string with format for compare to array.
 * @example
 * isValidCategory("Gas");
 * true
 * @example
 * isValidEmail("gas");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format for category.
 */
export const isValidCategory = (category) => CATEGORIES.includes(category);
/**
 * Function to know if isIncome is valid.
 * @name ValidIncome
 * @param {Boolean} isIncome A boolean to compare.
 * @example
 * isValidIsIncome(true);
 * true
 * @example
 * isValidIsIncome("false");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format isIncome.
 */
export const isValidIsIncome = (isIncome) => typeof isIncome === 'boolean';
/**
 * Function to know if isIncome is valid.
 * @name ValidDate
 * @param {String} date A string like a date.
 * @example
 * isValidIsIncome("2020-01-01");
 * true
 * @example
 * isValidIsIncome("20/01/10-054-0654");
 * false
 * @returns {Boolean} Returns true or false, depend if a valid format date.
 */
export const isValidDate = (date) => {
  const rexDate = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  return rexDate.test(String(date));
};
