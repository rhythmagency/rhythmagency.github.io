$("#btnCalculate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  var total = 0;
  var hourRegex = new RegExp("\\([0-9]+(\\.[0-9]+)?hr\\)", "gi");
  var numRegex = new RegExp("[0-9]+(\\.[0-9]+)?", "gi");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var matches = hourRegex.exec(line);
    if (matches && matches.length) {
      var strHours = numRegex.exec(matches[0]);
      var hours = parseFloat(strHours);
      total = total + hours;
    }
  }
  var newText = hours.toString() + " hours";
  $("#txtOutput").val(newText);
});
