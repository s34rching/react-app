const paymentCards = {
  basic: {
    visa: {
      number: '4242424242424242',
      cvv: '100',
      brand: 'Visa',
    },
    visaDebit: {
      number: '4000056655665556',
      cvv: '100',
      brand: 'Visa',
    },
    mastercard: {
      number: '5555555555554444',
      cvv: '257',
      brand: 'MasterCard',
    },
    mastercardDebit: {
      number: '5200828282828210',
      cvv: '257',
      brand: 'MasterCard',
    },
    amex: {
      number: '378282246310005',
      cvv: '1051',
      brand: 'American Express',
    },
    amex2: {
      number: '371449635398431',
      cvv: '1051',
      brand: 'American Express',
    },
    discover: {
      number: '6011111111111117',
      cvv: '100',
      brand: 'Discover',
    },
    discover2: {
      number: '6011000990139424',
      cvv: '100',
      brand: 'Discover',
    },
    jcb: {
      number: '3566002020360505',
      cvv: '100',
      brand: 'JCB',
    },
    dinersClub14digit: {
      number: '36227206271667',
      cvv: '100',
      brand: 'Diners Club',
    },
  },
  specific: {
    prepaid: {
      number: '5105105105105100',
      cvv: '257',
    },
    cvcCheckFails: {
      number: '4000000000000101',
      cvv: '123',
    },
    failingCharging: {
      number: '4000000000000341',
      cvv: '123',
    },
    declined: {
      number: '4000000000000002',
      cvv: '123',
    },
    declinedByFraudulentReason: {
      number: '4100000000000019',
      cvv: '123',
    },
    incorrectCvc: {
      number: '4000000000000127',
      cvv: '123',
    },
    expiredCode: {
      number: '4000000000000069',
      cvv: '123',
    },
    withProcessingError: {
      number: '4000000000000119',
      cvv: '123',
    },
  },
};

module.exports = paymentCards;
