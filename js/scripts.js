//Business Logic for Vacations
function vacations() {
  this.destinations = [];
}

vacations.prototype.addDetails = function(destination) {
  this.destinations.push(destination);
}

//Constructor
function destination(city, country, yearVisited) {
  this.city = city;
  this.country = country;
  this.yearVisited = yearVisited;
}

//User Logic

var listOfTrips = new vacations();

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var cityinput = $("input#city").val();
    var countryinput = $("input#country").val();
    var yearinput = $("input#year").val();

    var newVacation = new destination(cityinput, countryinput, yearinput);
    
    listOfTrips.destinations.push(newVacation); 

      function showlist() {
      $("#result").append("<h1>" + newVacation.city + "</h1>");
      $("#result").click(function(){
      $("#tripDetails").append("<li>" + newVacation.country + " " + newVacation.yearVisited + "</li>");
      }) 
    }
    console.log(listOfTrips);
    console.log(listOfTrips.destinations);
    listOfTrips.destinations.forEach(showlist);
  })
})