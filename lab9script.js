/* JS for lab 9 Client Search
Heshan Punchihewa
2022-04-02 */

//global vars
var xmlobj = new XMLHttpRequest();
var data; //data from json

//loads JSON file and adds listeners on windowload
window.onload=loadFile;

function loadFile(){
    
    document.getElementById("clientID").addEventListener("keyup", function (){searchByID(this.value);},false);
    
    document.getElementById("lastName").addEventListener("keyup", function (){searchByLastName(this.value);},false);
    
    document.getElementById("phoneNumber").addEventListener("keyup", function (){searchByPhoneNumber(this.value);},false);
    
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200){
            data = JSON.parse(xmlobj.responseText);
        }
        
    }
    
    xmlobj.open("GET", "ClientData.json", true);
    xmlobj.send();
    
    
    
}

//when user enters client ID
function searchByID(clientID){
    document.getElementById("searchHeader").innerHTML="Search by Client ID <br>";
    //table data column-headers first
    var output = "<tr> <th>ID</th> <th>First Name</th> <th>Last Name</th>  <th>Address</th> <th>Postal Code</th> <th>Phone</th> <th>Type</th> </tr>"
    
    //outpot format as table
    document.getElementById("searchResultTable").innerHTML=output;    
    
}

//when user enters last name
function searchByLastName(lastName){
    
}


//when user enters phone number
function searchByPhoneNumber(phoneNumber){
    
}