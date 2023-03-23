const mainForm = document.getElementById("infoForm");

let infoTable=[];

mainForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("full-Name").value;
    const userBirth = document.getElementById("date").value;
    const selectedGender = document.getElementById("gender").value;
    const phoneNumber = document.getElementById("phone").value;
    const grade = document.getElementById("grade").value;






    console.log(userName, userBirth, selectedGender, phoneNumber, grade)

    mainForm.reset();


    let dataObj={

        userName:userName,
        userBirth:userBirth,
        selectedGender:selectedGender,
        phoneNumber:phoneNumber,
        grade:grade,
    }

    infoTable.push(dataObj);
        showData();
        console.log(infoTable);

});

function showData(){
    let table='';
    console.log(infoTable);
    for(let i=0; i<infoTable.length; i++){

        table += `
      <tr>
      <td>${infoTable[i].userName}</td>
      <td>${infoTable[i].userBirth}</td>
      <td>${infoTable[i].selectedGender}</td>
      <td>${infoTable[i].phoneNumber}</td>
      <td>${infoTable[i].grade}</td>
      </tr>`;
      
     
    }

    document.getElementById("students-list").innerHTML=table;
  

}