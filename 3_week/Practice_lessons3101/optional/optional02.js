'use strict';

/**
Re-write the getPaymentValue function without using if conditions.
 * @param {object} user
 * @param {object} [user.payment]
 * @param {object} [user.payment.details]
 * @param {number} [user.payment.details.value]
 */
const getPaymentValue = (user) => user.payment?.details?.value;

// Sample usage - do not modify
console.log(getPaymentValue({ id: 1, name: 'Alex' })); // undefined
console.log(
  getPaymentValue({ id: 2, name: 'Sam', payment: { details: { value: 59 } } })
); // 59
