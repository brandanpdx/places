//Business Logic for Vacations
function vacations() {
  this.destinations = [];
  this.currentId = 0;
}

vacations.prototype.addDetails = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}


//Constructor
function destination(city, country, yearVisited) {
  this.city = city;
  this.country = country;
  this.yearVisited = yearVisited;
}
// show list funciton
function showlist() {
$("#result").append("<h1>" + newVacation.city + "</h1>");
$("#result").click(function(){
$("#tripDetails").append("<li>" + newVacation.country + " " + newVacation.yearVisited + "</li>");
}) 
}
//User Logic

var listOfTrips = new vacations();

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#tripDetails").text('');

    var cityinput = $("input#city").val();
    var countryinput = $("input#country").val();
    var yearinput = $("input#year").val();

    var newVacation = new destination(cityinput, countryinput, yearinput);
    listOfTrips.destinations.push(newVacation); 

    console.log(listOfTrips.destinations);
    listOfTrips.destinations.forEach(function(destination) {
      $("#tripDetails").append('<p>' + destination.city + '</p>');
    });
  })
})