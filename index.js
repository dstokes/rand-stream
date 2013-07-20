var fs = require('fs')
  , through = require('through');

module.exports = function(count) {
  var i = 0
    , results = [];

  return through(
    function(data) {
      if(results.length < count) {
        return results.push(data);
      }
      var rand = Math.random() * i
        , roff = Math.floor(Math.random() * count);
      if(rand < count) results.splice(roff, 1, data);
      i++;
    },
    function() {
      results.forEach(function(a) { this.queue(a); }, this);
    }
  );
};
