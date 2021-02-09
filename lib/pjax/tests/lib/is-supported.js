<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var tape = require("tape");

var isSupported = require("../../lib/is-supported.js");

tape("test isSupported method", function(t) {
  t.true(
    isSupported(),
    "well, we run test on supported browser, so it should be ok here"
  );
  t.end();
});
