$("#btnCalculate").click(function () {
  var text = $("#txtInput").val();
  var lines = text.replace(/\r\n/g, "\n").split("\n");
  
  outputHoursTotalFromTimeRanges(lines);
  outputHoursTotalFromAmountsInParenthesis(lines);

});

function outputHoursTotalFromTimeRanges(lines){
  //12 – 1pm
  //2 – 6pm
  //9 – 10am
  //9am – 1pm
  //10 – 10:30am
  var total = 0, startHour, startMinutes, startPeriod, startDate, endHour, endMinutes, endPeriod, endDate,
    startText, endText, startAmPm, endAmPm, hasStartAmPm, hasEndAmPm;
  var rangeRegex = /^([0-9]{1,2}(\:[0-9]{2})?(am|pm)?)\s(\u2013|-)\s([0-9]{1,2}(\:[0-9]{2})?(am|pm)?)(?=$)/;
  var amPm = /(am|pm)(?=$)/;
  
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var matches = line.match(rangeRegex);
    if (matches && matches.length) {
      times = line.split(" ");
      startText = times[0];
      endText = times[2];
      startAmPm = startText.match(amPm);
      endAmPm = endText.match(amPm);
      hasStartAmPm = startAmPm && startAmPm.length;
      hasEndAmPm = endAmPm && endAmPm.length;
      if (!hasStartAmPm && !hasEndAmPm) {
        startText = startText + "am";
        endText = endText = "pm";
      }
      if (hasStartAmPm && !hasEndAmPm) {
        endText = endText + startAmPm[0];
      }
      if (!hasStartAmPm && hasEndAmPm) {
        startText = startText + endAmPm[0];
      }
      startDate = moment(startText, 'HH:mma');
      endDate = moment(endText, 'HH:mma');

      if(startDate && endDate) {
        total += endDate.diff(startDate, 'minutes');
      }

      startDate = undefined;
      endDate = undefined;
    }
  }
  var newText = (total/60).toString() + " hours";
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
