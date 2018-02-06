//Task-1
var a, b, c, output;
a = 3;
b = 5;
//printing output
output = "var a = 3; \n var b = 5; \n var c; \n -------------- \n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b) : " + (a += b) + "\n" + 
    "(a -= b) : " + (a -= b) + "\n" + 
    "(a *= b) : " + (a *= b) + "\n" + 
    "(a /= b) : " + (a /= b) + "\n" +
    "(a %= b) : " + (a %= b) + "\n" + 
    "(a == b) : " + (a == b) + "\n" + 
    "(a != b) : " + (a != b) + "\n" + 
    "(a > b) : " + (a > b) + "\n" + 
    "(a < b) : " + (a < b) + "\n" + 
    "(!a && !c) : " + (!a && !c) + "\n" + 
    "(!a || !c) : " + (!a || !c) + "\n"; 
//printing output
alert(output);


//Task-2


var first_name, last_name, email, output;

first_name = "Saloni";
last_name = "Parekh";
email = "pare0202@algonquinlive.com";

//--------- declaring output ---------------------//
output = "My name is " + first_name + " " + last_name + "\n" + "You can contact me at"  + email;


alert(output);




//Task -3
var numbers = [ //array on numbers
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

var first_number, last_number, sum;

first_number = numbers[0];
last_number = numbers[numbers.length - 1];

sum = first_number + last_number;

if (sum % 2 === 0) {
    window.alert(first_number + " + " + last_number + " = " + sum + "\n " +
                 "This Number is Even");
} else {
    window.alert(first_number + " + " + last_number + " = " + sum + "\n" +
                 "This Number is Odd");
}