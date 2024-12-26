function gather_and_setup() {
    // Fetch data from the sheet
    const values = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getDataRange().getValues();
    Logger.log(values);
    Logger.log(values[1][0]);
    Logger.log(values[4][0]);
    
    const sheet2 = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_DISPLAY);
    const courseCode = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getRange(RANGE_COURSE_CODE).getValue();

    const std_array = [];

    const setting = SpreadsheetApp.getActive().getSheetByName(SHEET_SUBMIT);

    // Initialize variables for name index tracking and count
    let nameIndex = -1;
    let nameCount = 0;

    // Fetch cell values from settings
    const cellValues = [
        setting.getRange(CELL_SETTING_1).getValue(),
        setting.getRange(CELL_SETTING_2).getValue(),
        setting.getRange(CELL_SETTING_3).getValue(),
        setting.getRange(CELL_SETTING_4).getValue()
    ];

    // Process data from the sheet
    for (let i = 1; i < values.length; i++) {
        if (values[i][0] !== '') {  // Skip empty rows
            if (nameIndex !== -1) {
                nameCount = i - nameIndex - 1;
                
                // Process data based on name count
                if (nameCount === 2) {
                  let a = formatDataType2(values.slice(nameIndex, i));
                  std_array.push(a);
                  Logger.log(a);
                } else if (nameCount == 1) {
                  let a = formatDataType1(values.slice(nameIndex, i));
                  std_array.push(a);
                  Logger.log(a);
                }else if(nameCount === 3){
                  let a = formatDataType3(values.slice(nameIndex, i));
                  std_array.push(a);
                  Logger.log(a)
                }else if(nameCount === 4){
                  Logger.log(values.slice(nameIndex + i));
                  let a = formatDataType4(values.slice(nameIndex , i));
                  std_array.push(a);
                  Logger.log(a);
                }
            }
            nameIndex = i;  // Update nameIndex to the current index
        }
    }

    // Process the last section after the last name
    if (nameIndex !== -1 && nameIndex < values.length) {
        nameCount = values.length - nameIndex - 1;

        if (nameCount === 2) {
            let a = formatDataType2(values.slice(nameIndex, nameIndex + nameCount + 1));
            std_array.push(a);
            Logger.log(a);
        } else if (nameCount === 1) {
            let a = formatDataType1(values.slice(nameIndex, nameIndex + nameCount + 1));
            std_array.push(a);
            Logger.log(a);
        }else if(nameCount === 3){
          let a = formatDataType3(values.slice(nameIndex, nameIndex + nameCount + 1));
          std_array.push(a);
          Logger.log(a);
        }else if(nameCount === 4){
          let a = formatDataType4(values.slice(nameIndex, nameIndex + nameCount + 1));
          std_array.push(a);
          Logger.log(a);
        }
    }

    // Check if more than one format is selected in the settings
    const checkedCount = cellValues.filter(value => value).length;

    if (checkedCount > 1) {
        SpreadsheetApp.getUi().alert('Please check off so that only one of the formatting buttons is selected.');
    } else if (checkedCount === 1) {
        // Process the selected formatting option
        if (cellValues[0]) {
            WritingDataType1(sheet2, std_array, courseCode);
        } else if (cellValues[1]) {
            WritingDataType2(sheet2, std_array, courseCode);
        } else if (cellValues[2]) {
            WritingDataType3(sheet2, std_array);
        } else if (cellValues[3]) {
            WritingDataType4(sheet2, std_array, courseCode);
        }

        // Notify the user that formatting is complete
        SpreadsheetApp.getUi().alert('Formatting the data has been completed.');
    } else {
        SpreadsheetApp.getUi().alert('Please check one of the formatting tools.');
    }
}
