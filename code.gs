function doGet() {
  var template = 'work';
  return HtmlService.createTemplateFromFile(template).evaluate();
}


function getSheet(ssId, ssName){
 const ss = SpreadsheetApp.openById(ssId);
 const sheet = ss.getSheetByName(ssName);
 return sheet;
}

function addData(name,no,date,week,starttime,endtime,resttime,message) { 
  const sheet = getSheet('1UuwKskryhrXNFinitfKcNWNWzwLVQsuKWKPT5AGJSpk', 'シート1');
  sheet.appendRow([name,no,date,week,starttime,endtime,resttime,message]);
}