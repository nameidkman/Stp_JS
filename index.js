/*
Name - Saiansh, Ishan, Aamir, Adil, Faseeh 
Date - DW ABT IT!! :)
Des  - This thing is here to format the stuff
*/


const SHEET_DATA_IMPORTING = "Data_Importing";
const SHEET_DATA_DISPLAY = "Data_Display";
const SHEET_SUBMIT = "submit";

const RANGE_COURSE_CODE = "E2";

const CELL_SETTING_1 = "A1";
const CELL_SETTING_2 = "A2";
const CELL_SETTING_3 = "A3";
const CELL_SETTING_4 = "A4";


const HEADER_NAME = "Name";
const HEADER_BIRTHDAY = "Birthday";
const HEADER_COURSE_CODE = "Course Code";
const HEADER_EMAIL_NAME = "Email Name";
const HEADER_EMAIL_1 = "Email 1";
const HEADER_EMAIL_2 = "Email 2";
const HEADER_EMAILS = "Emails";

const FORMATING_RANGE1 = 'A1';
const FORMATING_RANGE2 = 'B1';
const FORMATING_RANGE3 = 'C1';
const FORMATING_RANGE4 = 'D1';
const FORMATING_RANGE5 = 'E1';
const FORMATING_RANGE6 = 'F1';
const FORMATING_RANGE7 = 'G1';

const COLUMN_A = "A";
const COLUMN_B = "B";
const COLUMN_C = "C";
const COLUMN_D = "D";
const COLUMN_E = "E";
const COLUMN_F = "F";
const COLUMN_G = "G";




// this is the function which is actually going to get the formatting done 
function gather_and_setup() {
    // This will gather anything and everything written in the spreadsheet
    const values = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getDataRange().getValues();
    // This will be where all the data goes!
    const sheet2 = SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_DISPLAY);
    // Tells what the course code
    // ***Only enter the course code once as all std's will have same course code***
    const courseCode =  SpreadsheetApp.getActive().getSheetByName(SHEET_DATA_IMPORTING).getRange(RANGE_COURSE_CODE).getValue();

    // array which is going to store all of the studnet as objects
    const std_array = [];

    const setting = SpreadsheetApp.getActive().getSheetByName(SHEET_SUBMIT);




    // this is going to get the data from the spreadsheet and analyize/format it
    for (let i = 1; i < values.length; i += 3) {
        // this is going to cut all of the blank line of data which has been shown in orginal data
        std_array.push(values.slice(i, i + 3));
        //".push" method is used to add one or more elements to the end of an array
        //slice(i, i + 3) extracts elements starting at index i up to, but not including, index i + 3. **Note the name heading is index 0**
    }

    // Process each subarray and log the formatted
    for(let i = 0; i < std_array.length; i++){
        // making a temp variable to change all of the value in the array
        let temp = std_array[i];
        std_array[i] = formatData(temp);
        Logger.log(std_array[i]);
    }

    let cellValues = [
        setting.getRange(CELL_SETTING_1).getValue(),
        setting.getRange(CELL_SETTING_2).getValue(),
        setting.getRange(CELL_SETTING_3).getValue(),
        setting.getRange(CELL_SETTING_4).getValue()
    ];

    // Check how many cells are 'on' (True/Checked)
    var checkedCount = cellValues.filter(value => value).length;

    if (checkedCount > 1) {
        // More than one cell is selected (on)
        SpreadsheetApp.getUi().alert('Please check off so that only one of the formatting buttons is selected.');
    } else if (checkedCount === 1) {
        // Only one cell is selected
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
        // No cell is selected
        SpreadsheetApp.getUi().alert('Please check one of the formatting tools.');
    }
}

function formatData(data) {
    // Extracting the name and birthday from the first row
    const name = `${data[0][0]}`; // Name at data[0][0]
    const birthday = new Date(data[0][1]).toLocaleDateString(); // Format birthday to a string

    // Extracting first and second email addresses and owners' names from the second and third rows
    const firstEmail = data[1][2] || ''; // First email address
    const firstEmailName = data[1][3] || ''; // First email owner's name
    const secondEmail = data[2][2] || ''; // Second email address
    const secondEmailName = data[2][3] || ''; // Second email owner's name

    // Removing everything after the first '(' in emails and names
    const firstEmail_v2 = firstEmail.split('(')[0];
    const secondEmail_v2 = secondEmail.split('(')[0];
    const firstEmailName_v2 = firstEmailName.split('(')[0];
    const secondEmailName_v2 = secondEmailName.split('(')[0];

    // Creating a new student object with the formatted data
    const student = new Student(name, birthday, firstEmail_v2, secondEmail_v2, firstEmailName_v2, secondEmailName_v2);

    // Returning the student object

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
    // printing all of student object in sheet2
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

    // printing all of student object in sheet2
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
    // printing all of student object in sheet2


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
    // printing all of student object in sheet2
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


// making an overload constructor
function Student(name, birthday, email1, email2, email1Name, email2Name){
    this.name = name;
    this.birthday = birthday;
    this.email1 = email1;
    this.email2 = email2;
    this.email1Name = email1Name;
    this.email2Name = email2Name;
}