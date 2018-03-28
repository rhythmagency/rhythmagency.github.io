$("#btnCalculate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  
  outputHoursTotalFromTimeRanges(lines);
  outputHoursTotalFromAmountsInParenthesis(lines);

});

function outputHoursTotalFromTimeRanges(lines){
  //Fri Sep 16, 2016    3:45pm – 4:00pm 
  var total = 0, startHour, startMinutes, startPeriod, startDate, endHour, endMinutes, endPeriod, endDate;
  // (Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s[0-9]{1,2},\s[0-9]{4}\s{3}
  var rangeRegex = /(([0-9]{1,2}:[0-9]{2}|[0-9]{1,2}[ap]m|[0-9]{1,2})\s-\s([0-9]{1,2}:[0-9]{2}|[0-9]{1,2}[ap]m))/im;
  
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var matches = line.match(rangeRegex);
    if (matches && matches.length) {
      startHour = parseFloat(matches[1]);
      startMinutes = parseFloat(matches[2]);
      startPeriod = matches[3];
      endHour = parseFloat(matches[4]);
      endMinutes = parseFloat(matches[5]);
      endPeriod = matches[6];

      console.log('m', matches);

      startDate = new Date('1/1/2016 ' + startHour + ':' + startMinutes  + ' ' + startPeriod);
      endDate = new Date('1/1/2016 ' + endHour + ':' + endMinutes + ' ' + endPeriod);

      if(startDate && endDate){
        console.log('sd', startDate);
        console.log('ed', endDate);
        total += (endDate - startDate) / 60 / 60 / 1000;
        console.log('total', total);
      }

      startDate = undefined;
      endDate = undefined;
    }
  }
  var newText = total.toString() + " hours";
  $("#txtOutputRange").val(newText);
}

// Attempts to parse hours in these formats:
// (1hr)
// (0.5hr)
// (SC/2hr)
// (.25hr)
// (2hr/SC)
function outputHoursTotalFromAmountsInParenthesis(lines){
  var total = 0;
  var hourRegex = new RegExp("\\((((?!\\.|[0-9]|\\)).)+/)?[0-9]*(\\.[0-9]+)?hr(/((?!\\.|[0-9]|\\)).)+)?\\)", "gi");
  var numRegex = new RegExp("[0-9]*\\.[0-9]+|[0-9]+", "gi");
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
  $("#txtOutputPrecalculated").val(newText);
}
