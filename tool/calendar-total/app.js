$("#btnCalculate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  var total = 0;
  var hourRegex = new RegExp("\\([0-9]+(\\.[0-9]+)?hr\\)", "gi");
  var numRegex = new RegExp("[0-9]+(\\.[0-9]+)?", "gi");
  var firstMatch, numMatches, strHours;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var matches = line.match(hourRegex);
    if (matches && matches.length) {
      var firstMatch = matches[0];
      var numMatches = firstMatch.match(numRegex);
      var strHours = numMatches[0];
      var hours = parseFloat(strHours);
      total = total + hours;
    }
  }
  var newText = total.toString() + " hours";
  $("#txtOutput").val(newText);
});
