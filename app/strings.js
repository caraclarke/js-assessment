exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var matches;
    
    while (matches = /(\w)\1{2,}/g.exec(str)) {
      str = str.replace(matches[0], matches[0].substr(0, amount));
    }
    return str;
  },
  wordWrap: function(str, cols) {
      var words = str.split(' ');
      var ouput = '';
      var currentLength = 0;
      var word;
      var separator;

      for (var i = 0; i < words.length; i++) {
       currentLength += words[i].length;

       if (i === 0) {
         separator = '';
       } else if (currentLength > cols) {
         currentLength = words[i].length;
         separator = '\n';
       } else {
         separator = ' ';
       }

       ouput += separator + words[i];
      }

      return ouput;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
