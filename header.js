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


function StudentType1(name, birthday, email1, email1Name){
  this.name = name;
  this.birthday = birthday;
  this.email1 = email1;
  this.email1Name = email1Name;
}

function StudentType2(name, birthday, email1, email2, email1Name, email2Name){
  this.name = name;
  this.birthday = birthday;
  this.email1 = email1;
  this.email2 = email2;
  this.email1Name = email1Name;
  this.email2Name = email2Name;
}
function StudentType2(name, birthday, email1, email2, email3, email1Name, email2Name, email3Name){
  this.name = name;
  this.birthday = birthday;
  this.email1 = email1;
  this.email2 = email2;
  this.email3 = email3; 
  this.email1Name = email1Name;
  this.email2Name = email2Name;
  this.email3Name = email3Name; 
}
function StudentType2(name, birthday, email1, email2, email3, email4, email1Name, email2Name, email3Name, email4Name){
  this.name = name;
  this.birthday = birthday;
  this.email1 = email1;
  this.email2 = email2;
  this.email3 = email3; 
  this.email4 = email4; 
  this.email1Name = email1Name;
  this.email2Name = email2Name;
  this.email3Name = email3Name; 
  this.email4Name = email4Name; 
}