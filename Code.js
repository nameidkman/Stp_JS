
function gather_and_setup() {
    const values = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getDataRange().getValues();
    Logger.log(values)
    Logger.log(values[1][0]);
    Logger.log(values[4][0]);
    const sheet2 = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_DISPLAY);
    const courseCode =  SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getRange(RANGE_COURSE_CODE).getValue();

    const std_array = [];

    const setting = SpreadsheetApp.getActive().getSheetByName(SHEET_SUBMIT);


let nameIndex = -1; 
let nameCount = 0;  
for (let i = 1; i < values.length; i++) {
    if (values[i][0] !== '') { 
        if (nameIndex !== -1) {
            
            nameCount = i - nameIndex - 1;
            

            Logger.log(`There are ${nameCount} cells between name at index ${nameIndex} and name at index ${i}`);
            if(nameCount === 2){
              std_array.push(formatDataType2(values.slice(nameIndex, i )))
            }else if(nameCount == 1){
              // std_array.push(formatDataType2(values.slice(nameIndex, i )))
              Logger.log(`there is only one email for ${values[nameIndex][0]}`)
            }
        }
        nameIndex = i; 
      }
}
if (nameIndex !== -1 && nameIndex < values.length) {
    nameCount = values.length - nameIndex - 1;
   
    if(nameCount === 2){
      std_array.push(formatDataType2(values.slice(nameIndex , nameIndex + nameCount + 1)));
    }else if(nameCount === 1)
      Logger.log(`There is only one email for ${values[nameIndex][0]}`);
}



    // for(let i = 0; i < values.length; i += 3)  std_array.push(formatDataType2(values.slice(i, i + 3)));

    let cellValues = [
        setting.getRange(CELL_SETTING_1).getValue(),
        setting.getRange(CELL_SETTING_2).getValue(),
        setting.getRange(CELL_SETTING_3).getValue(),
        setting.getRange(CELL_SETTING_4).getValue()
    ];

    var checkedCount = cellValues.filter(value => value).length;

    if (checkedCount > 1) {
        SpreadsheetApp.getUi().alert('Please check off so that only one of the formatting buttons is selected.');
    } else if (checkedCount === 1) {
        if (cellValues[0]) {
            WritingDataType1(sheet2, std_array, courseCode);
        } else if (cellValues[1]) {
            WritingDataType2(sheet2, std_array, courseCode);
        } else if (cellValues[2]) {
            WritingDataType3(sheet2, std_array);
        } else if (cellValues[3]) {
            WritingDataType4(sheet2, std_array, courseCode);
        }

        SpreadsheetApp.getUi().alert('Formatting the data has been completed.');
    } else {
        SpreadsheetApp.getUi().alert('Please check one of the formatting tools.');
    }
}



