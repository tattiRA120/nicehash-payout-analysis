function myFunction() {
  // シート1の"B4"から、スプレッドシートIDを取得
  const sheetNumber = SpreadsheetApp.openById("1QsXQY6PxXlG9f9FWgs7erLXGhbXfFAoV6DUldUkAxSI").getSheets.getRange("B4");
  // NiceHashのPAYOUT累計シートを取得
  var Sheet = SpreadsheetApp.openById(sheetNumber).getSheets;

  
}
