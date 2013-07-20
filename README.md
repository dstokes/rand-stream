rand-stream
======

Filter a stream into random chunks.

[![Build Status](https://travis-ci.org/dstokes/rand-stream.png)](https://travis-ci.org/dstokes/rand-stream)  
[![NPM](https://nodei.co/npm/rand-stream.png?downloads=true)](https://nodei.co/npm/rand-stream/)  

Example
=======
``` js
var rand   = require('rand')
  , split  = require('split')
  , fs     = require('fs');
  
// pipe a random collection of lines to stdout
fs.createReadStream(somefile)
  .pipe(split())
  .pipe(rand(2))
  .pipe(process.stdout)

  // => line 8
  // => line 3
```

install
=======

With [npm](http://npmjs.org) do:

```
npm install rand-stream
```
