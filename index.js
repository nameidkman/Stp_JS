/*
Name - Saiansh
Date - idk the day i open this is probably for explain for making impovements
Des  - it is going to format the data which has been provided to us using exel
*/




// this is the function which is actually going to get the formatting done
function doTheThing() {


    // the entwire values which there is in the spreadsheet
    const values = SpreadsheetApp.getActive().getSheetByName("data").getDataRange().getValues();
    // the sheet2 which it is going to store the data inside of
    const sheet2 = SpreadsheetApp.getActive().getSheetByName('try');
    // tells what the course code for the thing is
    const courseCode =  SpreadsheetApp.getActive().getSheetByName("data").getRange('E2').getValue();

    const setting = SpreadsheetApp.getActive().getSheetByName("submit");



    // array which is going to store all of the studnet objects
    // the reason why the array can be const is because i am not changing the size of the array i am just putting thing inside of it
    const something = [];


    // this is going to get the dat from the spreadsheet and then it is gonan format it into something
    for (let i = 1; i < values.length; i += 3) {
        // this is going to cut all of the data which has beene provided to us
        // but this is not the final fomating as there are still some change which has to happen
        something.push(values.slice(i, i + 3));
        //
    }

    // Process each subarray and log the formatted
    for(let i = 0; i < something.length; i++){
        // making a tem variable to change all of the value in the array
        let temp = something[i];
        something[i] = formatData(temp);
    }

    let cellValues = [
        setting.getRange('A1').getValue(),
        setting.getRange('A2').getValue(),
        setting.getRange('A3').getValue(),
        setting.getRange('A4').getValue()
    ];

    // Check how many cells are 'on' (True/Checked)
    var checkedCount = cellValues.filter(value => value).length;

    if (checkedCount > 1) {
        // More than one cell is selected (on)
        SpreadsheetApp.getUi().alert('Please check off so that only one of the formatting buttons is selected.');
    } else if (checkedCount === 1) {
        // Only one cell is selected
        if (cellValues[0]) {
            WritingDataType1(sheet2, something, courseCode);
        } else if (cellValues[1]) {
            WritingDataType2(sheet2, something, courseCode);
        } else if (cellValues[2]) {
            WritingDataType3(sheet2, something);
        } else if (cellValues[3]) {
            WritingDataType4(sheet2, something, courseCode);
        }

        SpreadsheetApp.getUi().alert('Formatting the data has been completed.');
    } else {
        // No cell is selected
        SpreadsheetApp.getUi().alert('Please check one of the formatting tools.');
    }

}

function formatData(data) {
    // getting the name from the data
    const name = `${data[0][0]}`;
    // const coursecode = data[0][4];
    // getting the birthday and then changing the things accordingly
    const birthday = new Date(data[0][1]).toLocaleDateString();

    // Extracting Emails
    const firstEmail = data[1][2] || ''; // First email
    const firstEmailName = data[1][3] || ''; // First email owner's name
    const secondEmail = data[2][2] || ''; // Second email
    const secondEmailName = data[2][3] || ''; // Second email owner's name

    // Creating student objects
    const student1 = new Student(name, birthday, firstEmail, secondEmail, firstEmailName, secondEmailName);

    return student1; // Return the student object
}

function WritingDataType1(sheet2, something, courseCode){
    sheet2.clear();
    sheet2.getRange('A1').setValue('Name');
    sheet2.getRange('B1').setValue('Birthday');
    sheet2.getRange('C1').setValue('Course Code');
    sheet2.getRange('D1').setValue('Email Name');
    sheet2.getRange('E1').setValue('Email 1');
    sheet2.getRange('F1').setValue('Email Name');
    sheet2.getRange('G1').setValue('Email 2');
    // printing all of student object in sheet2
    for(let i = 0; i < something.length; i++){
        sheet2.getRange(`A${i+2}`).setValue(something[i].name);
        sheet2.getRange(`B${i+2}`).setValue(something[i].birthday);
        sheet2.getRange(`C${i+2}`).setValue(courseCode);
        sheet2.getRange(`D${i+2}`).setValue(something[i].email1Name);
        sheet2.getRange(`E${i+2}`).setValue(something[i].email1);
        sheet2.getRange(`F${i+2}`).setValue(something[i].email2Name);
        sheet2.getRange(`G${i+2}`).setValue(something[i].email2);
    }
}


function WritingDataType2(sheet2, something, courseCode){
    sheet2.clear();
    sheet2.getRange('A1').setValue('Name');
    sheet2.getRange('B1').setValue('Birthday');
    sheet2.getRange('A1').setValue('Name');

    sheet2.getRange('C1').setValue('Course Code');
    sheet2.getRange('D1').setValue('Email 1');
    sheet2.getRange('E1').setValue('Email 2');
    // printing all of student object in sheet2
    for(let i = 0; i < something.length; i++){
        sheet2.getRange(`A${i+2}`).setValue(something[i].name);
        sheet2.getRange(`B${i+2}`).setValue(something[i].birthday);
        sheet2.getRange(`C${i+2}`).setValue(courseCode);
        sheet2.getRange(`D${i+2}`).setValue(something[i].email1);
        sheet2.getRange(`E${i+2}`).setValue(something[i].email2);
    }
}

function WritingDataType3(sheet2, something){
    sheet2.clear();
    sheet2.getRange('A1').setValue('Name');
    sheet2.getRange('B1').setValue('Email 1');
    sheet2.getRange('A1').setValue('Name');

    sheet2.getRange('C1').setValue('Email 2');
    // printing all of student object in sheet2


    for(let i = 0; i < something.length; i++){
        sheet2.getRange(`A${i+2}`).setValue(something[i].name);
        sheet2.getRange(`B${i+2}`).setValue(something[i].email1);
        sheet2.getRange(`C${i+2}`).setValue(something[i].email2);
    }
}

function WritingDataType4(sheet2, something, courseCode){
    sheet2.clear();

    sheet2.getRange('A1').setValue('Name');
    sheet2.getRange('B1').setValue('Birthday');
    sheet2.getRange('A1').setValue('Name');

    sheet2.getRange('C1').setValue('Course Code');
    sheet2.getRange('D1').setValue('Email Name');
    sheet2.getRange('E1').setValue('Email 1');

    let row = 2;
    // printing all of student object in sheet2
    for(let i = 0; i < something.length; i++){
        sheet2.getRange(`A${row}`).setValue(something[i].name);
        sheet2.getRange(`B${row}`).setValue(something[i].birthday);
        sheet2.getRange(`C${row}`).setValue(courseCode);
        sheet2.getRange(`D${row}`).setValue(something[i].email1Name);
        sheet2.getRange(`E${row}`).setValue(something[i].email1);
        row ++ ;
        sheet2.getRange(`D${row}`).setValue(something[i].email2Name);
        sheet2.getRange(`E${row}`).setValue(something[i].email2);
        row++;
    }
}


// making an overload constructor
function Student(name, birthday, email1, email2, email1Name, email2Name){
    this.name = name;
    this.birthday = birthday;
    this.email1 = email1;
    this.email2 = email2;
    this.email1Name = email1Name;
    this.email2Name = email2Name;
}



