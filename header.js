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
const HEADER_EMAIL_3 = "Email 3";
const HEADER_EMAIL_4 = "Email 4";
const HEADER_EMAILS = "Emails";

const FORMATING_RANGE1 = 'A1';
const FORMATING_RANGE2 = 'B1';
const FORMATING_RANGE3 = 'C1';
const FORMATING_RANGE4 = 'D1';
const FORMATING_RANGE5 = 'E1';
const FORMATING_RANGE6 = 'F1';
const FORMATING_RANGE7 = 'G1';
const FORMATING_RANGE8 = 'H1';
const FORMATING_RANGE9 = 'I1';
const FORMATING_RANGE10 = 'J1';
const FORMATING_RANGE11 = 'K1';

const COLUMN_A = "A";
const COLUMN_B = "B";
const COLUMN_C = "C";
const COLUMN_D = "D";
const COLUMN_E = "E";
const COLUMN_F = "F";
const COLUMN_G = "G";
const COLUMN_H = "H";
const COLUMN_I = "I";
const COLUMN_J = "J";
const COLUMN_K = "K";

class Student{
  
  constructor(name, birthday, email1, email1Name , email2 = null,  email2Name = null, email3 = null,  email3Name = null,  email4 = null, email4Name = null){
    this.name = name;
    this.birthday = birthday;
    this.email1 = email1;
    this.email1Name = email1Name;

    if(email2 && email2Name){
      this.email2 = email2;
      this.email2Name = email2Name;
    }
    if(email3 && email3Name){
      this.email3 = email3; 
      this.email3Name = email3Name; 
    }

    if(email4 && email4Name){
      this.email4 = email4; 
      this.email4Name = email4Name; 
    }
  }


}