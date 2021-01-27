var question = confirm("Are you an inventor?"); // true false
var answer;

if (question == true) { answer = " You should patent your invention. Read more about patents and WIPO in this page."; }
else { answer = " It's okay you are great. Read more about Intellectual property for your insight."; }

alert(answer);


var noofbooks = prompt("How many books you read monthly?");
var offer;

if (noofbooks >= 6) { offer = "Great! you have one month free registration and 10% discount on our services"; }
else if (noofbooks >= 1 && noofbooks < 6) { offer = "Good. you have 5% discount on our services"; }
else if (noofbooks < 1) { offer = "You are welcome. kindly register";}


alert(offer);

document.write(offer);

