var assert = require('assert')
  , through = require('through')
  , rand= require('../');

var chunks = 'test all the things and eat tacos'.split(' ');

// test passing cases
for(var i = 1; i < 4; i++) {
  var a = rand(i)
    , b = rand(i)
    , aout = []
    , bout = [];

  a.pipe(through(function(data) { aout.push(data); }));
  b.pipe(through(function(data) { bout.push(data); }));
  for(var c = 0; c < chunks.length; c++) {
    a.write(chunks[c]);
    b.write(chunks[c]);
  }
  a.end()
  b.end()
  assert(aout.length === i);
  assert(bout.length === i);
  // make sure the results don't match
  assert(aout.join('') !== bout.join(''));
}
