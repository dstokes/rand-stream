var assert = require('assert')
  , through = require('through')
  , rand= require('../');

var chunks = 'test all the things and eat tacos'.split(' ');

// test passing cases
for(var i = 1; i < 4; i++) {
  var s = rand(i)
    , out = [];

  s.pipe(through(function(data) { out.push(data); }));
  for(var c = 0; c < chunks.length; c++) s.write(chunks[c]);
  s.end()
  assert(out.length === i);
}
