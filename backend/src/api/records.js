import express from 'express';
import prisma from '../config/prisma.js';
import checkToken from '../middlewares/checkToken.js';
import checkRecordValues from '../middlewares/checkRecordValues.js';
import errorResponse from '../utils/errorResponse.js';
// Express Router
const records = express.Router();
// Middlewares
records.use(checkToken);
records.post('/', checkRecordValues);
records.patch('/:IDRecord', checkRecordValues);
/**
 * Create a Record.
 * @namespace Record
 * @name CreateRecord
 * @service Create a Record
 * @version v1
 * @since v1
 * @path {POST} /api/records
 * @auth This route requires a Token JWT.
 * @header {String} Content-Type Set to application/json.
 * @header {String} Authorization Set to protocol bearer + token.
 * @body {String} concept A concept to describe the record.
 * @body {Number} amount A number to set amount.
 * @body {String} category Pre-set list of options to set category.
 * @body {Boolean} isIncome Set true o false, to set filter income/expense.
 * @body {String} date Set a string to next transform in a Date. Format "2012-01-01".
 * @code {200} Request is successful.
 * @code {401} Request unauthorized.
 * @code {409} Request is bad format of body incorrect.
 * @response {{message: string, concept: string, id: string}} metadata.record Response about record sucess register.
 */
records.post('/', async (req, res) => {
  const { id } = req.user;
  const { concept, amount, category, isIncome, date } = req.values;
  // Using prisma to create record or catch error.
  try {
    const result = await prisma.record.create({
      data: {
        concept,
        amount,
        category,
        isIncome,
        updatedAt: new Date(date),
        author: { connect: { id } },
      },
    });
    // Response
    return res.json({
      message: 'Success new record',
      concept: result.concept,
      id: result.id,
    });
  } catch (e) {
    return errorResponse(e, res);
  }
});
/**
 * Update a Record.
 * @namespace Record
 * @name UpdateRecord
 * @service Update a Record
 * @version v1
 * @since v1
 * @path {PATCH} /api/records/:IDRecord
 * @auth This route requires a Token JWT.
 * @header {String} Content-Type Set to application/json.
 * @header {String} Authorization Set to protocol bearer + token.
 * @body {String} concept A concept to describe the record.
 * @body {Number} amount A number to set amount.
 * @body {String} category Pre-set list of options to set category.
 * @body {Boolean} isIncome It's set default to original record.
 * @body {String} date Set a string to next transform in a Date. Format "2012-01-01".
 * @code {200} Request is successful.
 * @code {401} Request unauthorized.
 * @code {409} Request is bad format of body incorrect.
 * @response {{message: string, concept: string}} metadata.record Response about record sucess updated.
 */
records.patch('/:IDRecord', async (req, res) => {
  const { id } = req.user;
  const { concept, amount, category, date } = req.values;
  const { IDRecord } = req.params;
  // Using prisma to update record or catch error.
  try {
    // Find only record with exact id.
    const record = await prisma.record.findUnique({
      where: { id: Number(IDRecord) },
    });
    // If token not is correct. Abort update a return error.
    if (record.authorId !== id) {
      return res.status(401).json({
        error: 'User Unauthorized.',
      });
    }
    // If is correct. Update.
    const updateRecord = await prisma.record.update({
      where: { id: Number(IDRecord) },
      data: {
        concept,
        amount,
        category,
        updatedAt: new Date(date),
      },
    });
    // Response.
    return res.json({
      message: 'Success Updated',
      concept: updateRecord.concept,
    });
  } catch (e) {
    return errorResponse(e, res);
  }
});
/**
 * Delete a Record.
 * @module Record
 * @namespace Record
 * @name DeleteRecord
 * @service Delete a Record
 * @version v1
 * @since v1
 * @path {DELETE} /api/records/:IDRecord
 * @auth This route requires a Token JWT.
 * @header {String} Content-Type Set to application/json.
 * @header {String} Authorization Set to protocol bearer + token.
 * @code {200} Request is successful.
 * @code {401} Request unauthorized.
 * @code {409} Request error with Prisma.
 * @response {{message: String, id: String}} metadata.record Response about record sucess deleted.
 */
records.delete('/:IDRecord', async (req, res) => {
  const { id } = req.user;
  const { IDRecord } = req.params;
  // Using prisma to delete record or catch error.
  try {
    // Find only record with exact id.
    const record = await prisma.record.findUnique({
      where: { id: Number(IDRecord) },
    });
    // If token not is correct. Abort delete a return error.
    if (record.authorId !== id) {
      return res.status(401).json({
        error: 'User Unauthorized.',
      });
    }
    // If is correct. Delete.
    const deletedRecord = await prisma.record.delete({
      where: { id: Number(IDRecord) },
    });
    // Response.
    return res.json({
      message: 'Success Remove!',
      id: deletedRecord.id,
    });
  } catch (e) {
    return errorResponse(e, res);
  }
});

export default records;
