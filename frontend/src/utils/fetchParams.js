/** @module FetchingParams */
/**
 * Constant with LOGIN URL.
 * @name LOGINURL
 * @constant
 * @readonly
 */
export const LOGINURL = '/api/login';
/**
 * Constant with REGISTER URL.
 * @name USERURL
 * @constant
 * @readonly
 */
export const USERSURL = '/api/users';
/**
 * Constant with RECORD URL.
 * @name RECORDURL
 * @constant
 * @readonly
 */
export const RECORDURL = '/api/records';
/**
 * Function to get url record based on ID.
 * @name getRecordIDURL
 * @func
 * @param {String} IDRecord A alphanumeric character.
 * @example
 * getEditURL("1");
 * http://localhost:3001/api/records/1
 * @returns {String} Returns a string literal to use like a URL.
 */
export const getRecordIDURL = (IDRecord) => `/api/records/${IDRecord}`;
/**
 * Function Set a POST object send to API. LOGIN or REGISTER.
 * @name userObject
 * @func
 * @param {String} email A string like a email, unique id.
 * @param {String} password A convination to handshake with API.
 * @example
 * USEROBJECT("emailtest@gmail.com", "emailtest");
 * {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ "email": "emailtest@gmail.com", "password": "emailtest" }),
 * }
 * @returns {{object}} Returns a object to use with useFetch Hook.
 */
export const userObject = (email, password) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
/**
 * Function Set a VERB object send to API with only Auth from user.
 * @name authObject
 * @func
 * @param {String} token A token to authorized user.
 * @example
 * authObject("GET", user.token);
 * {
 *   method: 'GET',
 *   headers: {
 *   'Content-Type': 'application/json',
 *   Authorization: `bearer gdfp4n4329u5.fsd9y2332lr.s90y32r54kbj`,
 *  },
 * }
 * @returns {{object}} Returns a object to use with useFetch Hook.
 */
export const authObject = (verb, token) => ({
  method: verb,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${token}`,
  },
});
/**
 * Function Set a POST object send to API. RECORD. It's used to create/edit record.
 * @name recordObject
 * @func
 * @param {String} verb A string with verb http like a POST, PUT, PATCH. Only use POST and PATCH.
 * @param {String} token A token JWT.
 * @param {String} concept A string with concept about record.
 * @param {Number} amount A number with amount of the record. Not negative numbers.
 * @param {String} category A string of the list of category.
 * @param {Boolean} isIncome A boolean to set type of record.
 * @param {String} date A string with a special format like a date.
 * @example
 * RECORDOBJECT("PATCH", "29014y3kjlaf8xz.asiopdhasdop24.fgdoighao", "New Record", 1000, "Gas", false, "2020-06-06");
 * @returns {{object}} Returns a object to use with useFetch Hook.
 */
export const recordObject = (
  verb,
  token,
  concept,
  amount,
  category,
  isIncome,
  date,
) => ({
  method: verb,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${token}`,
  },
  body: JSON.stringify({
    concept,
    amount,
    category,
    isIncome,
    date,
  }),
});
