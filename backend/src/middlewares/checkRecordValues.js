import {
  isValidConcept,
  isValidAmount,
  isValidCategory,
  isValidIsIncome,
  isValidDate,
} from '../utils/validation.js';

const checkRecordValues = (req, res, next) => {
  const { concept, amount, category, isIncome, date } = req.body;

  if (
    !(
      isValidConcept(concept) &&
      isValidAmount(amount) &&
      isValidCategory(category) &&
      isValidIsIncome(isIncome) &&
      isValidDate(date)
    )
  ) {
    return res.status(406).json({
      error: 'Invalid Request Format.',
    });
  }
  req.values = { concept, amount, category, isIncome, date };
  return next();
};

export default checkRecordValues;
