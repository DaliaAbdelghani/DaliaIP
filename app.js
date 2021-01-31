
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


var fav = prompt("Do you want book or newspaper");

while(fav !== "book" && fav !=="newspaper")
{
fav = prompt("Do you want book or newspaper")
}

var itemorder =" ";

if (fav === "book") {
itemorder='<img src="images/book.jpg"/>';
} else if (fav === "newspaper") {itemorder='<img src="images/newspaper.jpg"/>'} 

var nooforder = prompt("How many do you want?")
var result=" ";

for (var i=0; i<nooforder; i++)
{
result = result + itemorder;
}

document.write(result);

//New fuction 

function getName() {
    var writerName = prompt('Who is your favourite writer?');
    var favbook = prompt('Who is your favourite book?');
    console.log(typeof prompt);
    console.log(writerName);
    console.log(favbook);
  }
   
  getName();

    // a and b are the input
  // function expression

  var getmulit = function (a, b) {
    var c = a * b;
    
    return c;
  };
  
  var multi = getmulit(7, 2);
  alert(multi); 
  document.write(multi);
  console.log(getmulit(20, 25));
  