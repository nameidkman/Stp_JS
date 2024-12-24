function formatDataType2(data) {
    const name = `${data[0][0]}`;
    const birthday = new Date(data[0][1]).toLocaleDateString();

    const firstEmail = data[1][2] || '';
    const firstEmailName = data[1][3] || '';
    const secondEmail = data[2][2] || '';
    const secondEmailName = data[2][3] || '';

    const firstEmail_v2 = firstEmail.split('(')[0];
    const secondEmail_v2 = secondEmail.split('(')[0];
    const firstEmailName_v2 = firstEmailName.split('(')[0];
    const secondEmailName_v2 = secondEmailName.split('(')[0];

    const student = new StudentType2(name, birthday, firstEmail_v2, secondEmail_v2, firstEmailName_v2, secondEmailName_v2);
    
    return student;
}

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

    for(let i = 0; i < std_array.length; i++){
        sheet2.getRange(`${COLUMN_A}${i+2}`).setValue(std_array[i].name);
        sheet2.getRange(`${COLUMN_B}${i+2}`).setValue(std_array[i].birthday);
        sheet2.getRange(`${COLUMN_C}${i+2}`).setValue(courseCode);
        sheet2.getRange(`${COLUMN_D}${i+2}`).setValue(std_array[i].email1);
        sheet2.getRange(`${COLUMN_E}${i+2}`).setValue(std_array[i].email2);
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
        sheet2.getRange(`${COLUMN_F}${row}`).setValue(std_array[i].email2);
        row++;
    }
}