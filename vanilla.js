let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
    {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
    {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]

document.addEventListener('DOMContentLoaded', function(){ 
    displayUsers();
    document.getElementById("addUserForm").style.display = "none";
}, false);

function displayUsers() {
    users.forEach(function(item, index, array) {
        displayItem(item);
    });
    
}

function deletec(a) {
    let text = a.toString();
    const removeIndex = users.findIndex( item => item.id === text );
    users.splice( removeIndex, 1);
    deleteColumn(removeIndex);
    console.log(removeIndex);
}
function displayItem(item){
    var table = document.getElementById('table');
        var x = table.insertRow();
        
        var l = table.rows[0].cells.length;
        for (var c=0, m=l; c < m; c++) {
            x.insertCell(c);
        }
        x.cells[0].innerHTML = item['id'];
        date = new Date(item['createdDate']);
        year = date.getFullYear();
        month = date.getMonth()+1;
        dt = date.getDate();

        if (dt < 10) {
        dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }
        x.cells[1].innerHTML = dt+"/"+month+"/"+year;
        if (item['status'] === "Validé") {
            x.cells[2].innerHTML = '<span class="valide">'+item['status']+'</span>';
          } else if (item['status'] === "Rejeté") {
            x.cells[2].innerHTML = '<span class="rejected">'+item['status']+'</span>';
          } else {
            x.cells[2].innerHTML = '<span class="on-validation">'+item['status']+'</span>';
          }
        x.cells[3].innerHTML = item['lastName'];
        x.cells[4].innerHTML = item['firstName'];
        x.cells[5].innerHTML = item['userName'];
        x.cells[6].innerHTML = item['registrationNumber'];
        x.cells[7].innerHTML='<i class="fas fa-trash" onclick="deletec('+item['id']+')"></i>';
}
function deleteColumn(removeIndex) {
    var table = document.getElementById('table');
    table.deleteRow(removeIndex+1);
}

function addUser(){
    var e = document.getElementById("etat").value;
    var n = document.getElementById("nom").value;
    var p = document.getElementById("prenom").value;
    var m = document.getElementById("matricule").value;
    var u = document.getElementById("username").value;
    var d = document.getElementById("dateDeCreation").value;
    var mydate = new Date(d);
    users.push({
        id: Math.floor(Math.random() * 1000000000).toString(),
        createdDate: mydate.toISOString(),
        status: e,
        firstName: p,
        lastName: n,
        userName: u,
        registrationNumber: m,
    });
    const item=users[users.length-1];
    displayItem(item);
}

function displayAddUserForm(){
    document.getElementById("addUserForm").style.display = "block";
}
function hideAddUserForm(){
    document.getElementById("addUserForm").style.display = "none";
}
