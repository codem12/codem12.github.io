<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var tape = require("tape");

var uniqueid = require("../../lib/uniqueid.js");

tape("test uniqueid", function(t) {
  var a = uniqueid();
  var b = uniqueid();

  t.notEqual(a, b, "Two calls to uniqueid produce different values");

  t.end();
});
