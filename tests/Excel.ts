import * as XLSX from 'xlsx';

const workbook = XLSX.readFile("");
const sheet = workbook.Sheets["test"];

const data : any[] = XLSX.utils.sheet_to_json(sheet);


for(let rownumber = 0; rownumber < data.Length; rownumber++ ){
const empID = data[rownumber].empID;
const empName = data[rownumber].empName;
const empEmail = data[rownumber].empEmail;
const empNo = data[rownumber].empNo;

console.log(empID + "!!" +  empName + "!!" + empEmail + "!!" + empNo);
}


console.log("*************writedata***********");
XLSX.utils.sheet_add_aoa(sheet, [["sureshIT"]], {origin : "f6"});
XLSX.writeFile(workbook, '');
console.log("Data written successfully");

