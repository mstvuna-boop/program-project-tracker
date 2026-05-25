const SHEET_NAME = "tracker_data";
const CELL_ADDRESS = "A1";

function doGet() {
  const sheet = getDataSheet_();
  const raw = sheet.getRange(CELL_ADDRESS).getValue();
  return jsonOutput_(raw || "{}");
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    JSON.parse(body);
    const sheet = getDataSheet_();
    sheet.getRange(CELL_ADDRESS).setValue(body);
    sheet.getRange("A2").setValue("עודכן לאחרונה");
    sheet.getRange("B2").setValue(new Date());
    return jsonOutput_({ ok: true });
  } catch (error) {
    return jsonOutput_({ ok: false, error: String(error) });
  }
}

function getDataSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.getRange("A3").setValue("לא לערוך ידנית את תא A1. האפליקציה שומרת שם את הנתונים.");
    sheet.setFrozenRows(0);
  }
  return sheet;
}

function jsonOutput_(value) {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  return ContentService
    .createTextOutput(text)
    .setMimeType(ContentService.MimeType.JSON);
}
