exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures : function(arr, fn) {
    var returnArr = [];

    var makeFn = function(val) {
      return function() {
        return fn(val);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      returnArr.push(makeFn(arr[i]));
    }

    return returnArr;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
