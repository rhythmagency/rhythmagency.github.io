$("#btnDeduplicate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  var found = {};
  var result = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
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
