exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {
    var arr = [];

    for (var i = 7; i > -1; i--) {
      arr.push( num & (1 << i) ? 1 : 0 );
    }

    return arr.join('');
  },

  multiply: function(a, b) {
    return +(a * b).toFixed(4);
  }
};
