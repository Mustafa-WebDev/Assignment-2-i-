let subject1 = +prompt("Enter Marks of Subject 1:")
let subject2 = +prompt("Enter Marks of Subject 2:")
let subject3 = +prompt("Enter Marks of Subject 3:")
let subject4 = +prompt("Enter Marks of Subject 4:")
let main_div = document.getElementById('main_div')

let totalMarks = 400;
let obtMarks = subject1 + subject2 + subject3 + subject4;
// console.log(obtMarks);

let per = (obtMarks / totalMarks) * 100;
// console.log(per);


let grade = per > 100 ? "Invalid" : per < 100 && per >= 90 ? "A+" : per < 90 && per >= 80 ? "A" : per < 80 && per >= 70 ? "B" : per < 70 && per >= 60 ? "C" : per < 60 && per >= 50 ? "D" : per < 50 && per >= 40 ? "E" : per < 40 ? "F" : "F"    


main_div.innerHTML = `<div style="max-width: 400px; margin: auto; border: 1px solid #ccc; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
    <h3 style="text-align: center; color: #333;">Marks Information</h3>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold;">Subject 1 Marks: <span style="font-weight: normal;">${subject1}</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold;">Subject 2 Marks: <span style="font-weight: normal;">${subject2}</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold;">Subject 3 Marks: <span style="font-weight: normal;">${subject3}</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold;">Subject 4 Marks: <span style="font-weight: normal;">${subject4}</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold; color: #007bff;">Total Marks: <span style="font-weight: normal;">${totalMarks}</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold; color: #28a745;">Percentage: <span style="font-weight: normal;">${per}%</span></p>
    </div>
    <div style="margin-bottom: 10px;">
      <p style="font-weight: bold; color: #dc3545;">Grade: <span style="font-weight: normal;">${grade}</span></p>
    </div>
  </div>`
