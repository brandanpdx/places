//Business Logic for Vacations
function vacations() {
  this.destinations = [];
  this.currentId = 0;
}

vacations.prototype.addDetails = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

vacations.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

vacations.prototype.findDestination = function(id){
  for (var i = 0; i < this.destinations.length; i++){
    if(this.destinations[i]){
      if(this.destinations[i].id == id){
        return this.destinations[i];
      }
    }
  };
  return false;
}

//Constructor
function destination(city, country, yearVisited) {
  this.city = city;
  this.country = country;
  this.yearVisited = yearVisited;
}

//User Logic

var listOfTrips = new vacations();

function displayDetails (destinationListToDisplay){
  var myList = $("ul#tripDetails");
  var details = "";
  destinationListToDisplay.destinations.forEach(function(listItem){
    details += "<li id=" + listItem.id + ">" + listItem.name + "</li>"
  });
  myList.html(details);
}

// function display

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#tripDetails").text('');
    
    var cityinput = $("input#city").val();
    var countryinput = $("input#country").val();
    var yearinput = $("input#year").val();
    
    var newVacation = new destination(cityinput, countryinput, yearinput);
    listOfTrips.destinations.push(newVacation); 
    
    displayDetails(listOfTrips);
    console.log(listOfTrips);
    
  //   listOfTrips.destinations.forEach(function(destination) {
  //     $("#tripDetails").append('<p>' + destination.city + '</p>');
  //   });
  // })
  //     // for(i=0; i <= destination.length; i++)       
  //     $("#tripDetails").click(function(){
  //     $("#tripDetails").append("<li>" + listOfTrips.destinations[i].country + " " + listOfTrips.destinations[i].yearVisited + "</li>");
  //     }) 
  })           
})