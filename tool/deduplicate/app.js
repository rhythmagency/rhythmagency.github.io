$("#btnDeduplicate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  var found = {};
  var result = [];
  foreach(var line in lines) {
    if (line != null && line.length > 0) {
      if(!found[line]) {
        result.push(line);
        found[line] = true;
      }
    }
  }
  var newText = result.join("\r\n");
  $("#txtOutput").val(newText);
});
