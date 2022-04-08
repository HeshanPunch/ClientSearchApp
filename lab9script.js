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
        
    };
    
    xmlobj.open("GET", "ClientData.json", true);
    xmlobj.send();
    
    
    
}

//when user enters client ID
function searchByID(clientID){
    console.log("function searchByID");//testing
    document.getElementById("searchHeader").innerHTML="Search by Client ID <br>";
    //table data column-headers first
    var output = "<tr> <th>ID</th> <th>First Name</th> <th>Last Name</th>  <th>Address</th> <th>Postal Code</th> <th>Phone</th> <th>Type</th> </tr>";

    var searchID;

    for (var i=0; i < data.length; i++){
        var obj =data[i];
        searchID=  obj.id.toString();
        console.log(`search ID at line 45: ${searchID}`);
        if(searchID.startsWith(clientID)){
            output += `<tr><td> ${obj.id} </td> <td> ${obj.firstName} </td> <td> ${obj.lastName} </td> <td> ${obj.address} </td> <td> ${obj.postalCode} </td> <td> ${obj.phone} </td> <td> ${obj.type} </td>`;
        }

    }
    
    //outpot format as table
    document.getElementById("searchResultTable").innerHTML=output;    
    //keep area clean, only show on function
    document.getElementById("searchResults").style.display = "block";
    
}

//when user enters last name
function searchByLastName(lastName){
    console.log("function searchByLastName");//testing
    document.getElementById("searchHeader").innerHTML="Search by Client Last Name <br>";
    //table data column-headers first
    var output = "<tr> <th>ID</th> <th>First Name</th> <th>Last Name</th>  <th>Address</th> <th>Postal Code</th> <th>Phone</th> <th>Type</th> </tr>";

    var searchname;

    for (var i=0; i < data.length; i++){
        var obj =data[i];
        searchname=  obj.lastName.toLowerCase();
        lastName = lastName.toLowerCase();
        
        //case insensitive search
        if(searchname.startsWith(lastName)){
            output += `<tr><td> ${obj.id} </td> <td> ${obj.firstName} </td> <td> ${obj.lastName} </td> <td> ${obj.address} </td> <td> ${obj.postalCode} </td> <td> ${obj.phone} </td> <td> ${obj.type} </td>`;
        }

    }
    
    //outpot format as table
    document.getElementById("searchResultTable").innerHTML=output;    
    //keep area clean, only show on function
    document.getElementById("searchResults").style.display = "block";

    
}


//when user enters phone number
function searchByPhoneNumber(phoneNumber){

    console.log("function searchByPhoneNumber");//testing
    document.getElementById("searchHeader").innerHTML="Search by Client Phone Number <br>";
    //table data column-headers first
    var output = "<tr> <th>ID</th> <th>First Name</th> <th>Last Name</th>  <th>Address</th> <th>Postal Code</th> <th>Phone</th> <th>Type</th> </tr>";

    var searchnumber;

    for (var i=0; i < data.length; i++){
        var obj =data[i];
        searchnumber=  obj.phone.toString();
        
        
     
        if(searchnumber.startsWith(phoneNumber)){
            output += `<tr><td> ${obj.id} </td> <td> ${obj.firstName} </td> <td> ${obj.lastName} </td> <td> ${obj.address} </td> <td> ${obj.postalCode} </td> <td> ${obj.phone} </td> <td> ${obj.type} </td>`;
        }

    }
    
    //outpot format as table
    document.getElementById("searchResultTable").innerHTML=output;    
    //keep area clean, only show on function
    document.getElementById("searchResults").style.display = "block";
    
}