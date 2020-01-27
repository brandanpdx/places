//Business Logic for Vacations
function vacations() {
  this.destinations = []
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

var listOfTrips = new vacations()

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var cityinput = $("input#city").val();
    var countryinput = $("input#country").val();
    var yearinput = $("input#year").val();

    var newVacation = new destination(cityinput, countryinput, yearinput);
    vacations.destinations.push(newVacation);                                                           

    console.log(newVacation)
    console.log(newVacation.country);

    $("#result").text(newVacation.city);
    $("#result").click(function(){
      $("#tripDetails").text(newVacation.country + " "+ newVacation.yearVisited);
  
  })
 
    

  })
  
})






// var portland = new destination("Portland", "USA", "2020");
// var seattle = new destination("Seattle", "USA", "2019");
// var london = new destination("London", "UK", "2018");
// var tokyo = new destination("Tokyo", "Japan", "2017");

// destination.prototype.fullCityName = function() {
//   return this.city + "," + " " + this.country + " " + this.yearVisited;
// }
// alert(fullCityName)