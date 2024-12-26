function WritingDataType1(sheet2, std_array, courseCode){
    sheet2.clear();
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);
    sheet2.getRange(FORMATING_RANGE2).setValue(HEADER_BIRTHDAY);
    sheet2.getRange(FORMATING_RANGE3).setValue(HEADER_COURSE_CODE);
    sheet2.getRange(FORMATING_RANGE4).setValue(HEADER_EMAIL_NAME);
    sheet2.getRange(FORMATING_RANGE5).setValue(HEADER_EMAIL_1);
    sheet2.getRange(FORMATING_RANGE6).setValue(HEADER_EMAIL_NAME);
    sheet2.getRange(FORMATING_RANGE7).setValue(HEADER_EMAIL_2);

    for(let i = 0; i < std_array.length; i++){
        sheet2.getRange(`${COLUMN_A}${i + 2}`).setValue(std_array[i].name);
        sheet2.getRange(`${COLUMN_B}${i + 2}`).setValue(std_array[i].birthday);
        sheet2.getRange(`${COLUMN_C}${i + 2}`).setValue(courseCode);
        sheet2.getRange(`${COLUMN_D}${i + 2}`).setValue(std_array[i].email1Name);
        sheet2.getRange(`${COLUMN_E}${i + 2}`).setValue(std_array[i].email1);
        sheet2.getRange(`${COLUMN_F}${i + 2}`).setValue(std_array[i].email2Name);
        sheet2.getRange(`${COLUMN_G}${i + 2}`).setValue(std_array[i].email2);

        if(std_array[i].email3 !== '' && std_array[i].email3Name !== ''){
          sheet2.getRange(`${FORMATING_RANGE9}`).setValue(HEADER_EMAIL_3);
          sheet2.getRange(`${FORMATING_RANGE8}`).setValue(HEADER_EMAIL_NAME);
          sheet2.getRange(`${COLUMN_I}${i + 2}`).setValue(std_array[i].email3);
          sheet2.getRange(`${COLUMN_H}${i + 2}`).setValue(std_array[i].email3Name);
        }
        if(std_array[i].email4 !== '' && std_array[i].email4Name){
          sheet2.getRange(`${FORMATING_RANGE11}`).setValue(HEADER_EMAIL_4);
          sheet2.getRange(`${FORMATING_RANGE10}`).setValue(HEADER_EMAIL_NAME);
          sheet2.getRange(`${COLUMN_K}${i + 2}`).setValue(std_array[i].email4);
          sheet2.getRange(`${COLUMN_J}${i + 2}`).setValue(std_array[i].email4Name);
        }

    }
}
function WritingDataType2(sheet2, std_array, courseCode){
    sheet2.clear();
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);
    sheet2.getRange(FORMATING_RANGE2).setValue(HEADER_BIRTHDAY);
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);

    sheet2.getRange(FORMATING_RANGE3).setValue(HEADER_COURSE_CODE);
    sheet2.getRange(FORMATING_RANGE4).setValue(HEADER_EMAIL_1);
    sheet2.getRange(FORMATING_RANGE5).setValue(HEADER_EMAIL_2);

    // printing all of student object in sheet2
    for(let i = 0; i < std_array.length; i++){
        sheet2.getRange(`${COLUMN_A}${i+2}`).setValue(std_array[i].name);
        sheet2.getRange(`${COLUMN_B}${i+2}`).setValue(std_array[i].birthday);
        sheet2.getRange(`${COLUMN_C}${i+2}`).setValue(courseCode);
        sheet2.getRange(`${COLUMN_D}${i+2}`).setValue(std_array[i].email1);
        sheet2.getRange(`${COLUMN_E}${i+2}`).setValue(std_array[i].email2);
        
        if(std_array[i].email3 !== '' ){
          sheet2.getRange(`${FORMATING_RANGE6}`).setValue(HEADER_EMAIL_3);
          sheet2.getRange(`${COLUMN_F}${i + 2}`).setValue(std_array[i].email3);
        }
        if(std_array[i].email4 !== ''){
          sheet2.getRange(`${FORMATING_RANGE7}`).setValue(HEADER_EMAIL_4);
          sheet2.getRange(`${COLUMN_G}${i + 2}`).setValue(std_array[i].email4);
        }
    }
}

function WritingDataType3(sheet2, std_array){
    sheet2.clear();
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);
    sheet2.getRange(FORMATING_RANGE2).setValue(HEADER_EMAIL_1);
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);

    sheet2.getRange(FORMATING_RANGE3).setValue(HEADER_EMAIL_2);

    for(let i = 0; i < std_array.length; i++){
        sheet2.getRange(`${COLUMN_A}${i+2}`).setValue(std_array[i].name);
        sheet2.getRange(`${COLUMN_B}${i+2}`).setValue(std_array[i].email1);
        sheet2.getRange(`${COLUMN_C}${i+2}`).setValue(std_array[i].email2);

        if(std_array[i].email3 !== ''){
          sheet2.getRange(FORMATING_RANGE4).setValue(HEADER_EMAIL_3);
          sheet2.getRange(`${COLUMN_D}${i + 2}`).setValue(std_array[i].email3);
        }
        if(std_array[i].email4 !== ''){
          sheet2.getRange(FORMATING_RANGE5).setValue(HEADER_EMAIL_4);
          sheet2.getRange(`${COLUMN_E}${i + 2}`).setValue(std_array[i].email4);
        }
    }
}

function WritingDataType4(sheet2, std_array, courseCode){
    sheet2.clear();

    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);
    sheet2.getRange(FORMATING_RANGE2).setValue(HEADER_BIRTHDAY);
    sheet2.getRange(FORMATING_RANGE1).setValue(HEADER_NAME);

    sheet2.getRange(FORMATING_RANGE3).setValue(HEADER_COURSE_CODE);
    sheet2.getRange(FORMATING_RANGE4).setValue(HEADER_EMAIL_NAME);
    sheet2.getRange(FORMATING_RANGE5).setValue(HEADER_EMAILS);

    let row = 2;

    for(let i = 0; i < std_array.length; i++){
        sheet2.getRange(`${COLUMN_A}${row}`).setValue(std_array[i].name);
        sheet2.getRange(`${COLUMN_B}${row}`).setValue(std_array[i].birthday);
        sheet2.getRange(`${COLUMN_C}${row}`).setValue(courseCode);
        sheet2.getRange(`${COLUMN_D}${row}`).setValue(std_array[i].email1Name);
        sheet2.getRange(`${COLUMN_E}${row}`).setValue(std_array[i].email1);
        row ++ ;
        sheet2.getRange(`${COLUMN_D}${row}`).setValue(std_array[i].email2Name);
        sheet2.getRange(`${COLUMN_E}${row}`).setValue(std_array[i].email2);
        row++;
        if(std_array[i].email3 !== '' && std_array[i].email3Name !== ''){
          sheet2.getRange(`${COLUMN_D}${row}`).setValue(std_array[i].email3Name);
          sheet2.getRange(`${COLUMN_E}${row}`).setValue(std_array[i].email3);
          row++;
        }
        if(std_array[i].email4 !== '' && std_array[i].email4Name !== ''){
          sheet2.getRange(`${COLUMN_D}${row}`).setValue(std_array[i].email4Name);
          sheet2.getRange(`${COLUMN_E}${row}`).setValue(std_array[i].email4);
          row++;
        }
    }
}