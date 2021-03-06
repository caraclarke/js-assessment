exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i=0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    
    for (var i=0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var itemCount = 0;
    
    for (var i=0; i < arr.length; i++) {
      if (arr[i] == item) {
        itemCount++;
      }
    }
    return itemCount;
  },

  duplicates : function(arr) {
    var dup = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (dup.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i+1) !== -1) {
        dup.push(arr[i]);
      }
    }
    
    return dup;
  },

  square : function(arr) {
    var squared = [];

    for (var i = 0; i < arr.length; i++) {
      squared.push(arr[i] * arr[i]);
    }
    return squared;
  },

  findAllOccurrences : function(arr, target) {
    var indexShown = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indexShown.push(i);
      }
    }
    return indexShown;
  }
};
