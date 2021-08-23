var form1 = document.getElementById("form1");

var CoronaVirus=[]

form1.onsubmit=function(event){
    event.preventDefault()
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var ID = document.getElementById("id");
    var born = document.getElementById("born");
    var Country = document.getElementById("Country");
    var button = document.getElementById("submit");
    var table=document.getElementById("tabe");
    console.log(`first name: ${first.value}`);

    var Object ={
    firstName:first.value,
    LastName:last.value,
    YearOfBirth:born.value,
    ID:ID.value,
    Country:Country.value,
    TestDate: new Date(),
}
////////////////// mission 3 /////////////////

     if(checkID(CoronaVirus,ID.value)){
         alert("ID Exists")
     }else{
         CoronaVirus.push(Object)

     }
////////////////// mission 3 /////////////////

console.log(CoronaVirus);

displayData(CoronaVirus)


////////////////// mission 5 /////////////////

table.innerHTML+= `<tr><td>${Object.firstName} </td> <td>${Object.LastName} </td> <td> ${Object.YearOfBirth}</td> <td>${Object.ID} </td> <td>${Object.Country} </td> </tr>`

////////////////// mission 5 /////////////////


}

////////////////// mission 3 /////////////////


function checkID (array, idUser){
    for (let i = 0; i < array.length; i++) {
        if (array[i].ID==idUser) {
            return true;
        }
        
    }
    return false;
}

////////////////// mission 3 /////////////////



////////////////// mission 4 /////////////////

function displayData(myArray) {
    var pher=document.getElementById("phar")
    pher.innerHTML="";
    for (var i = 0; i < myArray.length; i++) {
        pher.innerHTML+=myArray[i].firstName 
        pher.innerHTML+=myArray[i].LastName 
        pher.innerHTML+=myArray[i].YearOfBirth 
        pher.innerHTML+=myArray[i].ID 
        pher.innerHTML+=myArray[i].Country +"<br>"

    }
}

////////////////// mission 4 /////////////////


////////////////// mission 6 /////////////////


first.addEventListener ("input", function(){
    first.value=first.value.toUpperCase()
     })

     
last.addEventListener ("input", function(){
    last.value=last.value.toUpperCase()

     })

     
Country.addEventListener ("input", function(){
    Country.value=Country.value.toUpperCase()

     })

////////////////// mission 6 /////////////////




////////////////// mission 7 /////////////////



////////////////// mission 7 /////////////////
