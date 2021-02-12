<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var tape = require("tape");

var executeScripts = require("../../lib/execute-scripts");

tape(
  "test executeScripts method when the script tag is inside a container",
  function(t) {
    document.body.className = "";

    var container = document.createElement("div");
    container.innerHTML =
      "<" + "script" ">document.body.className = 'executed';</"><" + "script" ">document.body.className += ' correctly';</">";

    t.equal(document.body.className, "", "script hasn't been executed yet");
    executeScripts(container);
    t.equal(
      document.body.className,
      "executed correctly",
      "script has been properly executed"
    );

    t.end();
  }
);

tape("test executeScripts method with just a script tag", function(t) {
  document.body.className = "";

  var script = document.createElement("script");
  script.innerHTML = "document.body.className = 'executed correctly';";

  t.equal(document.body.className, "", "script hasn't been executed yet");
  executeScripts(script);
  t.equal(
    document.body.className,
    "executed correctly",
    "script has been properly executed"
  );

  t.end();
});
