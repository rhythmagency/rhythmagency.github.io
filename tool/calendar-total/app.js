$("#btnCalculate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  var total = 0;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    //TODO: Get hours.
  }
  //TODO: Set hours.
  var newText = "Not Yet Implemented";
  $("#txtOutput").val(newText);
});
