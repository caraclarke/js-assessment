exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var output = '';
    var characterCount = {};
    
      for (var i = 0; i < str.length; i++) {
        
        if (typeof characterCount[str[i]] === 'undefined') {
           characterCount[str[i]] = 1;
             }  else {
           characterCount[str[i]] = characterCount[str[i]] + 1;
         }
         
         if (characterCount[str[i]] <= amount) {
           output += str[i];
         }
      }
    
    return output;
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
