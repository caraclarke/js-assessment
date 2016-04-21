exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    
    processDir(data);
    
    function processDir(dir) {
      
      dirs.push( dir.dir );
      
      for (var i = 0; i < dir.files.length; i++) {
        if (typeof dir.files[i] === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(dir.files[i]);
          }
        } else {
          processDir(dir.files[i]);
        }
      }
      
      dirs.pop();
    }
    
    return listOfFiles;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {

      for (var i = 0; i < arr.length; i++) {
        
        var item = arr.splice(i, 1)[0];
        temp.push(item);

        if (arr.length) {
          doIt(arr);
        } else {
          logResult();
        }
        
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    function logResult() {
      answer.push(
        temp.slice()
      );
    }
  },

  fibonacci: function(n) {
    
    if(n <= 1) {
      return n;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);   
    }
    
  },

  validParentheses: function(n) {
    var validParentheses = [];
    
    brackets('', 0, 0, n);  
    
    function brackets(bracket, open, close, pairs) {
      if( (open === pairs) && (close === pairs) ) {
        validParentheses.push(bracket);
      } else {
        if (open < pairs) {
          brackets(bracket + '(', open+1, close, pairs);
        }
        if (close < open) {
          brackets(bracket + ')', open, close+1, pairs);
        }
      }
    }
    
    return validParentheses;
  }
};
