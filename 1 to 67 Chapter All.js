

        // TASK # 1 Excersice #1

        alert("Error! Please enter a valid password.");
        alert("Welcome to JS Land...\n Happing Coding!");
        alert("Welcome to JS Land...");



        alert("Happing Coding!\n Prevent this page from creating additional dialogs.");
        console.log("Hello... I can run JS through my web browser's console");


         //TASK # 1-4 Excersice #2
         var username="Muhammad";
         var  myName="Kashif";
         alert(username +" "+ myName);


         var hello = "Hello World";
         alert(hello);



          var student_name = prompt("Enter Student Name");
          alert(student_name);

          var student_age = prompt("Enter Student Age");
          alert(student_age);

          var student_course = prompt("Enter Student Course");
          alert(student_course);


         //TASK # 5  Excersice #2 



         var pizza = 'PIZZA \n PIZZ \n PIZ\n PI\n P';

         alert(pizza);


         //TASK # 6  Excersice #2



         var email='kashifkhamani@gmail.com';
         alert('My Email address is'+ " " +email);

         //TASK # 7  Excersice #2


         var book= "A smarter\n  way to learn Javascript";
         alert('I am trying to learn from the Book'+ " "+book);


         //TASK # 8  Excersice #2
        document.write('Yah! I can write HTML content through JavaScript');



         //TASK # 9  Excersice #2
         var pattern ="_________ &$@&$_________";

         alert(pattern);


		//TASK # 1  Excersice #3
         var age = "24";
		alert(`I am ${age} years old`);


		//TASK # 2  Excersice #3
		var visit = 41;
		alert(`You have visited ${visit} time`);

		//TASK # 3  Excersice #3
		var birthYear = 1996;

		document.write(`My BirthYear is ${birthYear}`);

		//TASK # 4  Excersice #3
		var visitor_name = 'Kashif';
		var product_title = 'Jeans Paints';
		var quantity = 12;

		document.write(`${visitor_name}  order ${quantity} ${product_title}`);




//TASK # 1 Excersise # 5

var number1, number2;

number1 = prompt("Enter your first Number");

number2 = prompt("Enter your second Number");


document.write(`Sum of ${number1}  and ${number2} is  ${number1 + number2}`);


//TASK # 2   Excersise # 5


var number1, number2;

number1 = prompt("Enter your first Number");

number2 = prompt("Enter your second Number");


document.write(`Multiplication of ${number1}  and ${number2} is  ${number1 * number2}`);


var number1, number2;

number1 = prompt("Enter your first Number");

number2 = prompt("Enter your second Number");


document.write(`Division of ${number1}  and ${number2} is  ${number1 / number2}`);


var number1, number2;

number1 = prompt("Enter your first Number");

number2 = prompt("Enter your second Number");


document.write(`Subtraction of ${number1}  and ${number2} is  ${number1 - number2}`);


var value;

document.write(`Value after variable declaration is ${value}` + "<br>");
value = 5;

document.write(`Initial Value:  ${value}` + "<br>");
value++;

document.write(`Value after Increment: ${value}` + "<br>");

value += 7;


document.write(`Value after Addition is: ${value}` + "<br>");
value--;

document.write(`Value after Decrement: is ${value}` + "<br>");
value = 0 / 1;


document.write(`The Reminder is: ${value}` + "<br>");


//TASK # 4   Excersise # 5



var ticket = 600 * 5;


document.write(`Total Coast to buy 5 ticket to a movie is : ${ticket}` + "<br>");



//TASK # 5   Excersise # 5

var table = 2;

for (var i = 1; i <= 10; i++)
 {


    document.write(`${table} * ${i} = ${table * i}` + "<br>");



}

//TASK # 6   Excersise # 5


var cal = (fe * 9 / 5 + 32);

var fe = (cal - 32 * 5 / 9);

document.write(`25 C   `);


//TASK # 7   Excersise # 5




document.write("Shopping Cart" + "<br><br><br><br>");
var price1 = 650, price2 = 100;

document.write(`Price of item 1 is ${price1}` + "<br>");

document.write(`Quantity of item 1 is 3` + "<br>");
var totalprice1 = price1 = 650 * 3;


document.write(`Price of item 2 is 100` + "<br>");

var totalprice2 = price2 = 100 * 7;

document.write(`Quantity of item 2 is 7` + "<br>");

document.write(`Shipping charges is 100` + "<br>");

alert(totalprice2 + totalprice2 + price2);


//TASK # 8   Excersise # 5



var total_marks = 980, obtained_marks = 804;

var percentage_marks = obtained_marks / total_marks * 100;

document.write(`Marks Sheet` + '<br><br><br>');
document.write(`Total Marks:${total_marks}` + '<br>');

document.write(`Total Marks:${obtained_marks}` + '<br>');

document.write(`Total Marks:${percentage_marks}` + '<br>');




//TASK # 9   Excersise # 5




var dollar_to_pk = 104.80;
var saudi_Riyal_to_pk = 28;
var convert_rupees = prompt('Enter Your Amount in Dollars');

var rupees = convert_rupees;



document.write(`Currency in PKR` + '<br><br><br><br>');
document.write(`Total Currency in PKR: ${rupees}` + '<br><br><br><br>');



//TASK # 10   Excersise # 5

var add = 5,
var mul = 10;
var div= 2;


document.write(`${add}  *  ${mul} / ${div}`);




//TASK # 11   Excersise # 5


var CurrentYear = 2020;
var BirthYear = 1995;
var Age;
age = CurrentYear - BirthYear;
document.write(`Age Calculater` + '<br><br><br><br>');
document.write(`Current Year ${CurrentYear}` + '<br>');
document.write(`Birth Year ${BirthYear}` + '<br>');
document.write(`Your Age is: ${age}` + '<br>');


//TASK # 12   Excersise # 5

document.write('The Geometrize:' + '<br><br>');



//TASK # 13   Excersise # 5

var fav_snack = "Chocolate ";
var current_age = 15;
var Estimated_Maximum_age = 65;
var Amount_snack_per_day = 3;
var result = Amount_snack_per_day * Estimated_Maximum_age;
document.write(`THE LIFE TIME SUPPLY CALCULATER` + '<br><br>');

document.write(`Birth Year: ${fav_snack}` + '<br>');
document.write(`Current age: ${current_age}` + '<br>');
document.write(`Estimated Maximum Age:  ${Estimated_Maximum_age}` + '<br>');
document.write(`Amount of snack per day: ${Amount_snack_per_day}` + '<br>');
document.write(`you will need ${result} chocolate to last you until the rip old age of ${Estimated_Maximum_age} ` + '<br>');






//TASK # 1 Excersise # 6-9

var number = prompt("Enter your number");
document.write("Result:" + "<br>");


document.write(`The value  of a is:  ${number}`);
document.write("<br>");

document.write(".........................................");

document.write("<br><br>");


++number;
document.write(`The value  of ++a is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);

document.write("<br><br>");



number++;
document.write(`The value  of a++ is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");



--number;
document.write(`The value  of --a is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");




number--;
document.write(`The value  of a-- is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");




//TASK # 2  Excersise # 6-9

var a = 2, b = 1, result;
result = --a - --b + ++b + b--;

document.write(` a is ${result}` + "<br>");



result = --a - --b;



document.write(` b is ${result}` + "<br>");




result = --a - --b + ++b;


document.write(`result is ${result}` + "<br>");




result = --a - --b + ++b + b--;

document.write(result + "<br>");



//TASK # 3  Excersise # 6-9


var username = prompt("Enter User Name");
document.write(username);



//TASK # 4-5  Excersise # 6-9


var x = prompt("Enter Your Table Number");
function multi(x = 5) 
{
    for (var y = 1; y <= 10; y++) {

        document.write(`${x}   *   ${y}   =   ${y * x}`);


}

}
multi();


//TASK # 6  Excersise # 6-9



<table border="1" style="text-align: center;">
    <thead>

        <th>Subject</th>
        <th>Total marks</th>
        <th>Obtained marks</th>
        <th>Percentage</th>



    </thead>

    <tr>
        <td>English</td>
        <td>100</td>
        <td id="1"></td>
        <td id="4"></td>





    </tr>
    <tr>

        <td>Math</td>
        <td>100</td>
        <td id="2"></td>
        <td id="5"></td>







    </tr><tr>

        <td>Urdu</td>
        <td>100</td>
        <td id="3"></td>
        <td id="6"></td>



    </tr>


</table>  


var english, math, urdu, result, totalmarks = 300, percentage;
english = parseInt(prompt("Enter english subject Marks"));

math = parseInt(prompt("Enter  math subject Marks"));

urdu = parseInt(prompt("Enter  urdu subject Marks"));

result = english + math + urdu;
percentage = parseFloat(result / totalmarks * 100);

document.getElementById("1").innerHTML = english;
document.getElementById("2").innerHTML = math;

document.getElementById("3").innerHTML = urdu;

document.getElementById("4").innerHTML = percentage + "%";
document.getElementById("5").innerHTML = percentage + "%";
document.getElementById("6").innerHTML = percentage + "%";
document.write("<br><br>");


document.write("Total Marks You Obtained" + " " + result + "<br>");
document.write("<br>");
document.write("Your Total Percentage is" + " " + percentage + "%" + "<br>");



//TASK # 1 Excercise # 9-11
var city = prompt('Enter Your City Name');
if (city = "karachi") {


    document.write(`Welcome to the city of light ${city} `);

}


//TASK # 2 Excercise # 9-11


var gender = prompt('Enter Your Gender');
if (gender == "male") {


    document.write('Good Morning Sir');

}

else if (gender == "female") {


    document.write(`Good Morning Ma'am.`);

}

//TASK # 3 Excercise # 9-11

var road_color = prompt('Enter Color');
if (road_color == "red") {
    document.getElementById('1').innerHTML = road_color;
}

else if (road_color == "yellow") {
    document.getElementById('2').innerHTML = road_color;

}

else if (road_color == "green") {
    document.getElementById('3').innerHTML = road_color;

}


//TASK # 4 Excercise # 9-11


var fuel = prompt('Enter Fuel');
if (fuel < 0.25) {

    document.write('Please refill the fuel in your car');

}

else {
    document.write('ok');

}

//TASK # 5 Excercise # 9-11

var a = 4;
var b = 82;
var c = 12;

if (++a == 5) {
    alert('given condition for variable a is true');
}

if (b++ == 83) {
    alert('given condition for variable b is true');
}

if (c++ == 13) {
    alert('condition 1  is true');
}

if (c == 13) {
    alert('condition 2  is true');
}
if (++c < 14) {
    alert('condition 3  is true');
}

if (c == 14) {
    alert('condition 4  is true');
}


//TASK # 6 Excercise # 9-11

var material_coast = 20000;
var labour_coast = 2000;
var totalcoast = material_coast + labour_coast;

if (totalcoast == labour_coast + material_coast) {
    alert('The Coast equal');

}

if (true) {
    alert('true');
}

if (false) {
    alert('false');
}

if ('car' < 'cat ') {
    alert('car is smaller than cat');
}

//TASK # 7 Excercise # 9-11

document.write('Marks Sheet' + '<br><br>');
var totalmarks = 300;
markobt = 199;
perc = markobt / totalmarks * 100;
var grade = perc;

document.write(`Total marks: ${totalmarks}` + '<br>');
document.write(`Obtained marks: ${markobt}` + '<br>');

document.write(`Percentage: ${perc}` + '<br>');

if (perc > 80) {
    document.write(`Grade is : A+` + '<br>');
    document.write('Excellent' + '<br>');


}

if (perc > 70) {

    document.write(`Grade is : A` + '<br>');
    document.write('Good' + '<br>');




}

if (perc > 60) {

    document.write(`Grade is : B` + '<br>');
    document.write('you need to improve' + '<br>');



} if (perc <= 60) {

    document.write(`Fail` + '<br>');
    document.write('Sorry' + '<br>');



}


//TASK # 8 Excercise # 9-11

var number = prompt('Enter Your Number');
var guess_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (number == guess_number) {
    alert('Bingo! Correct answer');
}
else if (++number == guess_number) {
    alert('Close enough to correct answer');

}

//TASK # 9 Excercise # 9-11

var numb = 5;
if (numb % 3) {
    alert('can be divide');
}
else {
    alert('cant divide');


}


//TASK # 10 Excercise # 9-11

var input_numb = prompt('Enter your number');

if (input_numb % 2 == 0) {
    alert('Number is even' + " " + input_numb);
}

else {
    alert('Number is odd' + " " + input_numb);

}


//TASK # 11 Excercise # 9-11

var t = prompt('Enter temperature');
if (t > 40) {
    alert('it is to hot outside');
}

else if (t > 30) {
    alert('the weather today is normal');
}

else if (t > 20) {
    alert('today weather is cool');
}
else if (t > 10) {
    alert('OMG! Today Weather is so Cool ');
}



//TASK # 12 Excercise # 9-11


var firstnumb = 3;
var secondnumb = 5;

if (firstnumb + secondnumb) {
    alert('Result is:' + " " + (firstnumb + secondnumb));
}

else if (firstnumb - secondnumb) {
    alert('Result is:' + " " + (firstnumb - secondnumb));
}

else if (firstnumb * secondnumb) {
    alert('Result is:' + " " + (firstnumb * secondnumb));
}

else if (firstnumb / secondnumb) {
    alert('Result is:' + " " + (firstnumb / secondnumb));
}


//TASK # 1 Excercise # 12-13

var numbr1 = prompt('Enter your number');
var numbr2 = prompt('Enter your number ');

if (numbr1 >= numbr2 && numbr1 === numbr2) {
    alert('Number first is Greater then Second Number' + " " + numbr1);
}

else {

    alert('Number first is less then Second Number' + " " + numbr2);

}

//TASK # 2   Excercise # 12-13


var character = prompt('Enter your String');
if (character == character.toUpperCase()) {
    alert('Your Enter String in Upper Case' + " " + character);
}
else {
    alert('Your Enter String in lower Case' + " " + character);

}


//TASK # 3   Excercise # 12-13

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;

        }


    }
    return vcount;
}

alert(vowel_count("The quick brown fox"));



//TASK # 4   Excercise # 12-13

var number = prompt('Enter your number');
var sign = number > 0 ? 1 : number == 0 ? 0 : 1;
if (sign == 1) {
    alert('Number is Positive' + " " + sign);
}

else {
    alert('Number is Negative' + " " + sign);

}


//TASK # 5   Excercise # 12-13

var password = prompt('Enter your Password');
if (password == '') {
    alert('Plaese Enter Your Password');
}
else if (password == '123') {
    alert('Correct!');

}
else {
    alert('Incorrect Password ');

}

//TASK # 6   Excercise # 12-13

var geeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good Day";
    alert(greeting);

}
else {
    greeting = "Good Evening";
    alert(greeting);


}



//TASK # 1 Excercise # 17-20
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < 3; i++) {
    document.write(matrix[i] + "<br>");

}


//TASK # 2  Excercise # 17-20

for (var i = 1; i <= 10; i++) {
    document.write([i] + "<br>");

}



//TASK # 3  Excercise # 17-20

var table = prompt('Enter a number to show its multiplication table');
var len = prompt('Enter Length of table');

document.write(`Multiplication table of  ${table} ` + "<br><br>");
document.write(`Length  ${len} ` + "<br><br>");


//TASK # 4  Excercise # 17-20

for (var i = 1; i <= len; i++)
 {

    document.write(`${table}  * ${i}   =  ${table * i}` + "<br>");

 }


//TASK # 5  Excercise # 17-20

var fruits = ['Apple', 'Mango', 'Orange', 'Strawberry', 'Banana'];

for (var i = 0; i < fruits.length; i++) {

    document.write(`${fruits[i]} ` + "<br>");


}
document.write("<br>");


//TASK # 6  Excercise # 17-20

fruits.forEach((value, i) => {

    document.write(`Element at i ${i} is ${value}` + "<br>");

});


//TASK # 7  Excercise # 17-20

document.write(`Counting: ` + "<br><br><br>");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//TASK # 8  Excercise # 17-20

var arr3 = arr1.slice(0, 10).reverse();
document.write(`<br>`);






for (var i = 1; i <= arr1.length; i++) {

    document.write(`${i}` + ",");

}

document.write("<br><br>");


//TASK # 9  Excercise # 17-20
document.write(`Reverse Counting: ` + "<br><br>");

document.write(`${arr3}`);

document.write("<br><br>");



//TASK # 10  Excercise # 17-20
document.write(`Even: ` + "<br><br>");


for (var i = 0; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + " , ");

    }

}

document.write("<br><br>");

//TASK # 11  Excercise # 17-20
document.write(`Odd: ` + "<br><br>");

for (var i = 0; i <= 20; i++) {

    if (i % 2 == 1) {
        document.write(`${i}` + " , ");

    }

}


document.write("<br><br>");

//TASK # 12  Excercise # 17-20
document.write(`Series: ` + "<br><br>");


for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + "k" + " ,");

    }

}

//TASK # 13  Excercise # 17-20
var Items = ['cake', 'apple pie', 'chips', 'patties'];

var input = prompt('Welcome to ABC Bakery, what do you want to order sir / mam ?').toLowerCase();
var index;


for (var i = 0; i < Items.length; i++) {

    index = Items.indexOf(Items[i]);


    if (input == "") {
        alert('Please Enter Your Item Name');
    }
    else {

        if (Items.includes(input)) {
            alert(`${input} Is Available at index ${index} in Our Bakery`);

        }

        else {
            alert(` We Are Sorry.${input}  Is not  Available in Our Bakery`);

        }
    }
}



//TASK # 14  Excercise # 17-20
var max_val = [24, 53, 78, 91, 12];
document.write('Array items: ' + max_val + "<br>");

var ar = Math.max.apply(null, max_val);
document.write('The Largest number is: ' + ar + "<br><br>");



document.write('Array items: ' + max_val + "<br>");


//TASK # 15  Excercise # 17-20
var a = Math.min.apply(null, max_val);
document.write('The Minimum number is: ' + a + "<br><br>");


//TASK # 16  Excercise # 17-20

for (var i = 5; i <= 100; i = i + 5) 
{
    document.write(i + " ,");
}



< select id="1" >

    <option id="2">

    </option>

</select >



//TASK # 1 Excercise # 14-16


//1   Excercise # 14-16
 var std_name = [];
//2   Excercise # 14-16
 var std_names = new ("");
//3   Excercise # 14-16
 var std = ["Kashif", "ali", "hazab"];

//4   Excercise # 14-16
 var std_roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//5   Excercise # 14-16
 var std_bol = [true, false];

//6   Excercise # 14-16
 var students_mix = ["saad", 1, true];


 document.write('Qualificaton' + "<br><br><br>");

//7   Excercise # 14-16
  var Qualificaton = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.PHIL', 'PhD'];


 for (var i = 0; i < Qualificaton.length; i++) {

    document.write([i] + ") " + Qualificaton[i] + "<br>");

}


//TASK # 8   Excercise # 14-16


var students_names = []
var students_score = []
var Total_score = [500]

document.write("<br>")

students_names.push('kashif')
students_score.push(300)

students_names.push('ali')
students_score.push(400)

students_names.push('saad')
students_score.push(250)

var stdper1, stdper2, stdper3
stdper1 = students_score[0] / Total_score * 100;
stdper2 = students_score[1] / Total_score * 100;
stdper3 = students_score[2] / Total_score * 100;


document.write(`Score of michael is: ${students_score[0]} . Percentage: ${stdper1 + "%"} ` + "<br>");
document.write(`Score of john is: ${students_score[1]} . Percentage: ${stdper2 + "%"} ` + "<br>");
document.write(`Score of Tonny is: ${students_score[2]} . Percentage: ${stdper3 + "%"} ` + "<br>");



//TASK # 9   Excercise # 14-16

var color_name = ['Red', 'Green', 'Blue', 'White'];

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}
document.write("<br>");


color_name.push('ali');


var addcolor = prompt('What Color Do You Want To Add At of the First i of Array');

color_name.unshift(addcolor);

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}




document.write("<br>");


var addcolor = prompt('What Color Do You Want To Add  At of the End i of Array');

color_name.push(addcolor);

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}





var addcolor = prompt('What Color Do You Want To Add  At of the End i of Array');

color_name.unshift('Magenta');
color_name.unshift('Silver');


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


color_name.unshift('Magenta');



color_name.shift('Silver');
document.write('After Delete First Color i is Remain' + "<br>");


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}

document.write("<br>");



color_name.pop('Silver');
document.write('After Delete last Color i is Remain' + "<br>");


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


document.write("<br>");
var addcolor_i = prompt('Which i do you want add color');

color_name.splice(0, 4, addcolor_i);


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


document.write("<br>");
var addcolor_i = prompt('Which i do you want add color');

color_name.splice(addcolor_i);


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}



//TASK # 10   Excercise # 14-16

var std_score = [320, 230, 480, 120];


document.write(`Score of Students ${std_score}` + "<br>");
document.write(`Order of Score of Students ${std_score.sort()}`);



//TASK # 11   Excercise # 14-16

document.write(`Cities List:` + '<br>');
var city_list = ['Karachi', 'Lahore', 'Islamabad ', 'Quetta', 'Peshawar'];

document.write(`${city_list}` + '<br><br>');



document.write(`Select Cities List:` + '<br>');
var copy = city_list.slice(2, 4);

document.write(`${copy}` + '<br>');




//TASK # 12   Excercise # 14-16

document.write('Array:' + "<br>");

var arr = ["This", "is", "my", "cat"];
document.write(arr + "<br><br>");

document.write('String:' + "<br><br>");

document.write(`${arr.join(' ')}` + '<br>');


document.write('Devices:' + "<br>");

var arr = ["Keyboard", "mouse", "printer", "monitor"];
document.write(arr + "<br><br>");

for (var i = 0; i < arr.length; i++) {
    document.write("Out:" + "<br>");

    document.write(arr[i] + "<br>");


}


//TASK # 13   Excercise # 14-16

document.write('Devices:' + "<br>");

var arr = ["Keyboard", "mouse", "printer", "monitor"];
document.write(arr + "<br><br>");

for (var i = 0; i < arr.length; i++) 
{
    document.write("Out:" + "<br>");
    var sort = arr.sort();

    document.write(arr[i] + "<br>");


}

var mobile_name = ['Apple', 'Samsung', 'Nokia', 'Sony', 'Haier'];

document.getElementById('2').innerHTML = mobile_name




//TASK # 1 Excercise # 17-20
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < 3; i++) {
    document.write(matrix[i] + "<br>");

}


//TASK # 2  Excercise # 17-20

for (var i = 1; i <= 10; i++) {
    document.write([i] + "<br>");

}



//TASK # 3  Excercise # 17-20

var table = prompt('Enter a number to show its multiplication table');
var len = prompt('Enter Length of table');

document.write(`Multiplication table of  ${table} ` + "<br><br>");
document.write(`Length  ${len} ` + "<br><br>");


//TASK # 4  Excercise # 17-20

for (var i = 1; i <= len; i++)
 {

    document.write(`${table}  * ${i}   =  ${table * i}` + "<br>");

 }


//TASK # 5  Excercise # 17-20

var fruits = ['Apple', 'Mango', 'Orange', 'Strawberry', 'Banana'];

for (var i = 0; i < fruits.length; i++) {

    document.write(`${fruits[i]} ` + "<br>");


}
document.write("<br>");


//TASK # 6  Excercise # 17-20

fruits.forEach((value, i) => {

    document.write(`Element at i ${i} is ${value}` + "<br>");

});


//TASK # 7  Excercise # 17-20

document.write(`Counting: ` + "<br><br><br>");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//TASK # 8  Excercise # 17-20

var arr3 = arr1.slice(0, 10).reverse();
document.write(`<br>`);






for (var i = 1; i <= arr1.length; i++) {

    document.write(`${i}` + ",");

}

document.write("<br><br>");


//TASK # 9  Excercise # 17-20
document.write(`Reverse Counting: ` + "<br><br>");

document.write(`${arr3}`);

document.write("<br><br>");



//TASK # 10  Excercise # 17-20
document.write(`Even: ` + "<br><br>");


for (var i = 0; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + " , ");

    }

}

document.write("<br><br>");

//TASK # 11  Excercise # 17-20
document.write(`Odd: ` + "<br><br>");

for (var i = 0; i <= 20; i++) {

    if (i % 2 == 1) {
        document.write(`${i}` + " , ");

    }

}


document.write("<br><br>");

//TASK # 12  Excercise # 17-20
document.write(`Series: ` + "<br><br>");


for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + "k" + " ,");

    }

}

//TASK # 13  Excercise # 17-20
var Items = ['cake', 'apple pie', 'chips', 'patties'];

var input = prompt('Welcome to ABC Bakery, what do you want to order sir / mam ?').toLowerCase();
var index;


for (var i = 0; i < Items.length; i++) {

    index = Items.indexOf(Items[i]);


    if (input == "") {
        alert('Please Enter Your Item Name');
    }
    else {

        if (Items.includes(input)) {
            alert(`${input} Is Available at index ${index} in Our Bakery`);

        }

        else {
            alert(` We Are Sorry.${input}  Is not  Available in Our Bakery`);

        }
    }
}



//TASK # 14  Excercise # 17-20
var max_val = [24, 53, 78, 91, 12];
document.write('Array items: ' + max_val + "<br>");

var ar = Math.max.apply(null, max_val);
document.write('The Largest number is: ' + ar + "<br><br>");



document.write('Array items: ' + max_val + "<br>");


//TASK # 15  Excercise # 17-20
var a = Math.min.apply(null, max_val);
document.write('The Minimum number is: ' + a + "<br><br>");


//TASK # 16  Excercise # 17-20

for (var i = 5; i <= 100; i = i + 5) 
{
    document.write(i + " ,");
}


//Excersice # 21-25   Task # 1

var first_name = prompt('Enter your first name');

var Last_name = prompt('Enter your last name');

var Full_name = first_name  + " "+ Last_name;
document.write(Full_name);



//Excersice # 21-25   Task # 2


var mobile = prompt('Enter Your Favorite Mobile Model').toUpperCase()
document.write("My Favorite Phone is : " + mobile + "<br>")

 for (var i = 0; i < mobile.length; i++)
 {

 }

document.write("Length of string: " + i + "<br>")


//Excersice # 21-25   Task # 3


var country = "Pakistani" 
var ind = country.indexOf("n")
document.write("String: " + country+ "<br>")
document.write("Index of 'n': " + ind + "<br>")



//Excersice # 21-25   Task # 4

var str = "Hello World";
document.write('String: ' + str+ "<br>")
var last_ind = str.lastIndexOf("l")
document.write("Last index of 'l': " + last_ind + "<br>")




//Excersice # 21-25   Task # 5

var coutr = "Pakistani";
document.write('String: ' + coutr+ "<br>")
var res = coutr.charAt(8)
document.write("Character at index 3: " + res +  "<br>")


//Excersice # 21-25   Task # 6

var first_name = prompt('Enter your first name')
var Last_name = prompt('Enter your last name')
var Full_name = first_name.concat(Last_name)
document.write(Full_name);



//Excersice # 21-25   Task # 7

var city = "Hyderabad"
document.write("City: " + city + "<br>")
var sli =  city.slice(6,9)
var rep = sli.replace(sli,"Islamabad")
document.write("After replacement: " + rep)



//Excersice # 21-25   Task # 8

var msg = "Ali and Sami are best friends. They play circket and football togather"
document.write(msg+"<br><br>");
var rep_all = msg.replace(/and/g,"&");
document.write("After replacement: " + rep_all)



//Excersice # 21-25   Task # 9

var numb = "472"
var int= parseInt(numb)
document.write("Value: "+numb+"<br><br>")
document.write("Type:  "+ typeof(numb) +"<br><br>")
document.write("Value: "+ numb+ "<br><br>")
document.write("Type: "+ typeof(int) +"<br><br>")



//Excersice # 21-25   Task # 10

var input = prompt('Please Enter Your Word')
document.write("User input: "+input+"<br>")
var convert_to_uppercase = input.toUpperCase()
document.write("Upper case: " + convert_to_uppercase + "<br>")



//Excersice # 21-25   Task # 11

var input = prompt('Please Enter Your Word')

document.write("User input: "+input+"<br>")
function Title_case (pr)
{
    var s = pr.toLowerCase().split(" ")

    for (var i = 0; i <s.length; i++)
    {
        s[i] = s[i][0].toUpperCase() + s[i].slice(1)

    }

    document.write(s.join(" "));
    return s;
}

 Title_case(input)




//Excersice # 21-25   Task # 12

var num = 35.36
var str = num.toString().split('.').join('')
document.write("Number: "+num+"<br>")
document.write("Result: " + str + "<br>")


//Excersice # 21-25   Task # 13

var enter = prompt('Enter Your Name')
if (enter.charCodeAt(0) <= 33 || enter.charCodeAt(0) <= 44 || enter.charCodeAt(0) <= 46 || enter.charCodeAt(0) <= 64)  
{
    alert("Please Enter a valid user name")

}
else
{
    document.write(enter)
}



//Excersice # 21-25   Task # 14

var Items= ["Cake", "cake","CAKE","apple pie","Apple Pie", "APPLE PIE","cookie","Cookie","COOKIE","chips","Chips","CHIPS","patties","Patties","PATTIES"]
var input = prompt('Welcome to ABC Bakery, what do you want to order sir / mam ?').toLowerCase();
var index;


for (var i = 0; i <Items.length; i++)
{

    index = Items.indexOf(Items[i]);


    if (input == "")
    {
        alert('Please Enter Your Item Name');



    }
    else
    {

    if (Items.includes(input))
    {
        alert(`${input} Is Available at index ${index} in Our Bakery`);



    }

    else
    {
        alert(` We Are Sorry.${input}  Is not  Available in Our Bakery`);

    }
    }
    break;
}



//Excersice # 21-25   Task # 15

var input = prompt("Enter your word")
var letterNumber = /^[0-9a-zA-Z]+$/
if (input.length > 6 )
{
    alert("Only 6 Character Allowed")

}

else if (!input.match(letterNumber))
{
    alert("Special Character not Allowed ");
}


else if (!/^[^0-9].*$/.test(input)) 
{

    alert("Password should not start with number ")
}
else
{
    alert("Password Matched Successfully")
}



//Excersice # 21-25   Task # 16

var university = "University of Karachi"
var split = university.split("")

for (var i = 0; i <split.length; i++) 
{
    document.write(split[i] + "<br>")
}




//Excersice # 21-25   Task # 17

var last_char = prompt("Enter Your Name")
var sli = last_char.substr(last_char.length -1)
document.write("User input: "+last_char+"<br>")
document.write("Last character of input: "+sli+"<br>")


//Excersice # 21-25   Task # 18

var va= "The quick brown fox jump over the lazy dog"
var va_count = va.match(/the/g).length
document.write(va+"<br>")
document.write("There are " +va_count+ " Occurrence(s) of word 'the' "  + "<br>")


//Excersice # 26-30   Task # 1

var number  = prompt("Enter Your Number")
var floor   = Math.floor(number)
var round   =  Math.round(number)
var ceiling = Math.ceil(number)

document.write("number: "+number+"<br>")
document.write("round of value: "+floor+"<br>")
document.write("floor value: "+round+"<br>")
document.write("ceil value: "+ceiling+"<br>")


//Excersice # 26-30   Task # 2

var number  = prompt("Enter Your Number","-")
var floor   = Math.floor(number)
var round   =  Math.round(number)
var ceiling = Math.ceil(number)

document.write("number: "+number+"<br>")
document.write("round of value: "+floor+"<br>")
document.write("floor value: "+round+"<br>")
document.write("ceil value: "+ceiling+"<br>")


//Excersice # 26-30   Task # 3

var val = -4
var abs = Math.abs(val)
document.write("The absolute value of "+ val +" is " +" "+ abs)


//Excersice # 26-30   Task # 4

var random  =  Math.floor(Math.random()*5)
var random2 =  Math.floor(Math.random()*7)

if (random == "4" && random2 == "6")
{
    document.write("random dice value: " + random + "<br>")
    document.write("random dice value: " + random2)
}




//Excersice # 26-30   Task # 5

var rand = Math.floor(Math.random()*3)
if (rand == "2") 
{
    document.write(rand+ "<br>")
    document.write("random coin value:  "+"Heads")
}
else if(rand == "1")
{
    document.write(rand + "<br>")
    document.write("random coin value:  " +"Tails")

}


//Excersice # 26-30   Task # 6

var r = Math.floor(Math.random()*100)
document.write("random value between 1 and 100: "+r)


//Excersice # 26-30   Task # 7

  var weight = prompt("Enter Your Weight")
  var aary1 = ["kgs","kilogram",50,"50.2kgs"]
  for (var i = 0; i < aary1.length; i++) 
  {

  if (weight.includes(aary1[i])) 
  {
    alert("The Weight of user is " + weight) 
  }
 else
 {

 alert("wrong")

 }
 break
 }


//Excersice # 26-30   Task # 8

var rndom = Math.floor(Math.random()*11)
var input = parseInt(prompt('Enter a number between 1 and 10'))
if (rndom == input)
{
    alert("Congratulate the user")
}
else
{
    alert("Try again!")
}



//Excersice # 31-34   Task # 1
var Dt = new Date()
var mnth_array = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var d = Dt.toString()
var s = d.slice(0,3).toUpperCase()

document.write(Dt+"<br>")

//Excersice # 31-34   Task # 2

document.write("Current month: "+ mnth_array[Dt.getMonth()] + "<br>")

//Excersice # 31-34   Task # 3

document.write("Today is: " + s+"<br>")

//Excersice # 31-34   Task # 4

var day = Dt.getDay()
if (day== "0" || day == "6" )
{
    document.write("It's Fun day")
}

//Excersice # 31-34   Task # 5

//Excersice # 31-34   Task # 6

var d = Dt.getTime()
var old = new Date("Jan 1, 1970")
var mn= old - Dt.getMinutes() 

document.write("Current Date: "+Dt + "<br>")

document.write("Elasped milisecond since January 1 ,1970: "+d+"<br><br>")
document.write("Elasped minutes since January 1 ,1970: " +mn +"<br>")


//Excersice # 31-34   Task # 7

var hou = Dt.getHours()
var min = Dt.getMinutes()
if (hou == 12) 
{
    document.write(hou  + min + " Its PM"+"<br>")
}
else
{
    document.write(hou > 12 ? hou - 12  + min + " PM" : + hou + ":" + min + " Its AM"+"<br>")
}


//Excersice # 31-34   Task # 8

var laterDate = new Date("Dec 31,2020")
document.write("Later Date :"+ laterDate+"<br>")


//Excersice # 31-34   Task # 9

var date = new Date("June 18,2015")
var date1 = new Date()
var numb_of_days = Math.ceil((date - date1) / 8.64e7)


document.write("On refrence date " + date + "<br>")
document.write("On refrence date " + date1 + "<br>")
document.write(numb_of_days + " days have passed since 1st Ramdan, 2015 " + "<br>")


//Excersice # 31-34   Task # 10

var old_date = new Date("Dec 5,2015")
var dt = new Date()
var sec_pass = Math.abs(Math.floor((dt.getTime() - old_date.getTime()) / 1000))
document.write("On refrence date " + old_date +"<br>")
document.write(sec_pass + " second had passed since begining of 2015 "+ "<br>")



//Excersice # 31-34   Task # 11

 var current_date = new Date("Dec 5,2015")
 current_date.setHours(23)
 current_date.setMinutes(8)
 current_date.setSeconds(16)


 document.write("current date: " + current_date+"<br>")
 document.write("1 hour ago, it was " + (current_date) +"<br>")

//Excersice # 31-34   Task # 12


 var back = new Date("Dec 5,2015")
 var b = back.getFullYear()
 var back_yEAR = b-100
 back.setHours(23)
 back.setMinutes(9)
 back.setSeconds(37)
 document.write("current date: " + back + "<br>")
 document.write("100 year back " + " Sun Dec 05 " + back_yEAR+ " 23:09:37 GMT+0500 (Pakistan Standard Time) "+ "<br>")

//Excersice # 31-34   Task # 13

var i =  parseInt(prompt("Enter your age"))
var df = new Date().getFullYear()

var birthyear = i - df
document.write("Your Age is "+i+"<br>")
document.write("Your birth year is "+birthyear+"<br>")


//Excersice # 31-34   Task # 14

document.write("K-Electric-Bill"+"<br><br>")
var customer_name = prompt("Enter Your Name").toString()
var bill_month = prompt("Enter Bill Month in Letter").toString()
var units = parseInt(prompt("Enter Number of Units"))
var charges = 16
var surcharg= 350

var netamount = units * charges 
document.write("Customer Name: "+ customer_name+"<br>")
document.write("Month: "+bill_month+"<br>")
document.write("Number of units: "+units+"<br>")
document.write("charges per unit: "+charges+"<br>")
document.write("Net Amount Payable (within Due Date): "+ netamount+"<br>")
document.write("Late Payment surcharge "+surcharg + " "+"<br>" )
document.write("Gross Amount Payable (after Due Date): "+ (surcharg+netamount) +"<br>")


//Excersice # 35-38   Task # 1

function Date_time() 
{
    var D = new Date()
    document.write(D)
}
Date_time()

//Excersice # 35-38   Task # 2

 function greeting(firstname,lastname) 
{

    document.write(firstname+ " " +lastname)
}
greeting("Ali","Khan")

//Excersice # 35-38   Task # 3

var inpt1 = parseInt(prompt("Enter Your First Number"))
var inpt2 = parseInt(prompt("Enter Your Second Number"))

function Add (numb1,numb2)
{
    document.write(numb1 + numb2)
}
Add(inpt1, inpt2)


//Excersice # 35-38   Task # 4

function Calculater(numb1, operator,numb2)
{
    document.write(numb1, operator, numb2)
}
 Calculater(5,12)


//Excersice # 35-38   Task # 5

function squareroot(sqr)
{
    document.write("Square root is "+Math.sqrt(sqr))
}
squareroot(9)



//Excersice # 35-38   Task # 6

 function factorial(x)
  {
        if (x === 0) 
        {
            return 1
        }
        else
        {
            return x * factorial(x - 1)
        }
  }
    document.write(factorial(4))




//Excersice # 35-38   Task # 7

var inpu_t = parseInt(prompt("Enter your first number"))
var inpu_t1 = parseInt(prompt("Enter your last number"))
var arry1 =  inpu_t+inpu_t1
for (var i = 0; i <arry1.length; i++)
{

    document.write(arry[i]+"<br>")
    // document.write()


}



//Excersice # 35-38   Task # 8

var base1 = prompt("Enter Base Value")
var Perpendicular = prompt("Enter Perpendicular Value")
function angles(sidea,sideb)
{

   return Math.sqrt(Math.pow(sidea,2)+Math.pow(sideb,2))
   return Square(5)

}

function Square(numb)
{
        return numb ** 2

}

 document.write("Hypotenuse is: "+angles( base1 , Perpendicular) + "<br>")
 document.write("Square is: " + Square(5) + "<br>")


// Excersice # 35-38   Task # 9

 var w=3 ,h =4
function Area_of_Rectangle(width, Height)
{
     var A = width * Height
     return A
}
document.write("Area of rectangle "+Area_of_Rectangle(2, 4)+"<br>")
document.write("Area of rectangle by argument as variable " +Area_of_Rectangle(w, h))



//Excersice # 35-38   Task # 10

 function Palindrome(str) 
 {
     var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,)
     var count = 0
     if ((str.length) / 2 ===0 )
     {

     }
     else 
     {
         if(str.length ===1)
         {
            document.write("Entry is palindrome")
         }
         else
         {
             count = (str.length -1 ) /2 
         }
     }
     for (var i = 0; i <count.length; i++) 
     {
         if (str[i] != srt.slice(-1-x)[0])
         {
             document.write("The entry is not palindrome")
         }
     }
             document.write("The entry is palindrome" + "<br>")
 }
 Palindrome("madam") 





//Excersice # 35-38   Task # 11


 var input = 'please enter your word'

document.write("Example String: "+input+"<br>")
function Title_case (pr)
{
    var s = pr.toLowerCase().split(" ")

    for (var i = 0; i <s.length; i++)
    {
        s[i] = s[i][0].toUpperCase() + s[i].slice(1)

    }

    document.write(s.join(" "));
    return s;
}

 Title_case("Expected Output: "+input)




//Excersice # 35-38   Task # 12

function longestword(str)
{
    var arr = str.match(/\w[a-z]{0,}/gi)
    document.write("Example String: "+arr+"<br>")
    var result = arr[0]
    for (var i = 1; i < arr.length; i++)
    {
        if (result.length < arr[i].length)
        {
            result = arr[i]
        }
    } 

    return result

}
    var lng= longestword("Web Development Tutorial")
    document.write("Longest word is: "+lng)





//Excersice # 35-38   Task # 13


function occu(Occurrence) 
{
    var Occurrence=  "JSResourceS.com',''o'"
    var va_count = Occurrence.match(/o/g).length
    document.write(Occurrence+"<br>")
    document.write("There are " +va_count+ " Occurrence(s) of word 'o' "  + "<br>")
}
occu("JSResourceS.com',''o'")



//Excersice # 35-38   Task # 14


var r = 3

function p() {
    cal_Circumference()
    Calculate_Area()

}
function Circumference() {
    var radius = parseInt(r)
    if (0 < radius) {
        p("The circumference of the circle is " + radius * 2 * Math.PI)
    }
    else {
        p("Radius must be a whole number greater then 0 " + radius * 2 * Math.PI)
    }
}

function cal_Calculate_Area() {

    var radius = parseInt(r)
    if (0 < radius) {
        p("The area of the circle is " + radius * 2 * Math.PI)
    }
    else {
        p("Radius must be a whole number greater then 0 " + radius * 2 * Math.PI)
    }


}


/////////////////////////


    <!DOCTYPE html>
    <html>
    <head>
        <title></title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

          <style type="text/css">
            #more {display: none;}
          </style>
    </head>
    <body>






    <script type="text/javascript">


        

      //Exercise 38-42 Task # 1

      // function Power (a,b)
      // {
      //     var pw = Math.pow(a,b)
      //    document.write(pw)
      // }

      // Power (2,2)


      //Exercise 38-42 Task # 2

      // function LeapYear()
      // {
      //    var lep_yer =  prompt('Enter your Year')
      //   var lp =  (lep_yer % 100 ===0) ? (lep_yer % 400 ===0) : (lep_yer % 4 ===0)

      //    if (lp == true)
      //    {
      //        alert(lep_yer +" Is Leap Year");


      //    }
      //    else
      //    {
      //        alert(lep_yer +" Is Not Leap Year");


      //    }
      // }

      // LeapYear()



      //Exercise 38-42 Task # 3

      // function sidestriangle (a,b,c,S,area)
      // {
        
        
      //    S = (a + b + c )/2
      //  document.write(area = Math.sqrt(S*((S-a)*(S-b)*(S-c))))

      // }

      // sidestriangle(2,2,2)




      //Exercise 38-42 Task # 4



      //  var subject1 = 300, subject2 =300, subject3 = 200 ,recievemarks, total=1100, percentage, Average
      //  recievemarks=  subject1 + subject2 + subject3


      // function Students()
      // {
         
      //      document.write("Total Marks is: "+recievemarks+"<br>")
      //      Percentage()
      //     Average()
          
          

      // }

      // function Percentage()
      // {
      //     document.write(("Total Percentage is: "+recievemarks/total*100)+"%"+"<br>")


          
      // }

      // function Average()
      // {
      //     document.write(("Total Average is: "+recievemarks/total)+"<br>")
      // }

      //  Students()



      //Exercise 38-42 Task # 5

      // function ind()
      // {
        
      //     var i = "hello world"
      //     var nmb =  i.indexOf("o")
      //     document.write(nmb)
      // }

      // ind()





      //Exercise 38-42 Task # 6

      // var str=""


      // function deletevowels(vw)
      // {

      //  for (var i = 0; i<vw.length; i++)
      //  {


        
        // if (vw.toString().length <2) 
      //    {
      //       document.write('wrong')
      //       break;
      //    }


      //    if (vw[i] != "a" &&  vw[i] != "e"  &&  vw[i] != "i"  && vw[i] != "o"  && vw[i] != "u" )
      //     {
      //         str += vw[i]
      //     }  


      //  }
      //  return str

        
      // }
      // document.write(deletevowels("After Delete Remain Constant is ")+"<br>")





    //Exercise 38-42 Task # 7


    // function Occurrenceword (va) 

    // {
    //  var va_count = va.match(/e/g).length
    //  document.write(va+"<br>")
    //  document.write("There are " +va_count+ " Occurrence(s) of word 'Vowel' " +"e"+ "<br>")

    //   switch (va)
    //   {
    //      case 1:

    //      day = Occurrenceword()

    //      break;

    //   }
    //   return day

    // }
    //   Occurrenceword("Pleases read this application and give me gratuity") 


      
    //Exercise 38-42 Task # 8

    // Distance()
    // function Distance()
    // {

    // var kilometers1 
    // var kilometers2
    // var Meters = 1000
    // var centimeter = 10000
    // var feets = 3280
    // var inche = 39370.079

    // kilometers1 = prompt("Enter Your value In kilometers fisrt city")
    // kilometers2 = prompt("Enter Your value In kilometers second city")
    // var n=  kilometers1 - kilometers2

    // function meters()
    // {
    //   document.write("Distance Between Two City in meters is "+n  * Meters+"<br>")
    // }



    // function feet()
    // {
    //   document.write("Distance Between Two City in feets is "+n * feets+"<br>")
         
    // }

    // function inches()
    // {
    //   document.write("Distance Between Two City in inches is "+n  * inche+"<br>")
         
    // }

    // function centimeters()
    // {
    //   document.write("Distance Between Two City in centimeters is "+n  * centimeter+"<br>")
         
    // }
     
    // meters()
    // feet()
    // inches()
    // centimeters()

    // }



    //Exercise 38-42 Task # 9

    // function WokerSallery()
    // {


    // var sallery=12, Totalhour=41
    // hour = Totalhour -1

    //  if (Totalhour < 40)
    //  {
         
    //       alert(sallery*hour)
    //  }

    //  else if (Totalhour > 40)
    //  {
    //     alert(sallery*hour)
    //  }

    //  else if (hour)
    //  {
    //     alert(hour)
        
    //  }
    // }
    //   WokerSallery()




    //Exercise 38-42 Task # 10


    // var amount,TenNotes = 10  ,FiftyNotes = 50 ,OneHunderedNotes = 100 

    // amount = parseInt(prompt("Enter amount to withdraw!","Please Enter Amout in Digits"))


    // document.write("Your Enter Amout Is: "+amount+"<br>")
    // document.write("Required Notes of hundred Is: "+ Math.floor(amount/OneHunderedNotes)+"<br>")
    // document.write("Required Notes of Fifty Is: "+ Math.floor(amount % FiftyNotes/TenNotes) +"<br>")
    // document.write("Required Notes of Ten Is: "+Math.floor(amount % OneHunderedNotes%FiftyNotes/TenNotes) +"<br>")






    //Exercise 43-48 Task # 1


    // <div class="container mt-3 " >


    //Exercise 43-48 Task # 2


    // <a href="javascript:;"  onclick="al('You Click on This Link');" class="m-auto"> Click On this link
    // </a>


    // <div class="d-flex justify-content-around mt-5 ">
     


    //   <h4 class="text-primary ">Mobile Phone Lookup</h4>


    // <div class="d-flex justify-content-around mt-5 ">
    //  <a href="javascript:;"  onclick="al('Thanks for purchase mobile from us');"> 

    //  <figure> 
    //   <img src="mob1.jpeg" alt="" width="160" >
    //   <figurecaption >Nokia </figurecaption>
    //  </figure> 
    // </a>

    // <a href="javascript:;"  onclick="al('Thanks for purchase mobile from us');" >  
    //  <figure> 
    //   <img src="mob2.jpeg" alt="" width="260">
    //   <figurecaption>Oppo </figurecaption>
    //  </figure> 
    // </a>

    // <a href="javascript:;"  onclick="al('Thanks for purchase mobile from us');">  
    //  <figure> 
    //   <img src="mob3.jpeg" alt="" width="260">
    //   <figurecaption>Infinix </figurecaption>
    //  </figure> 
    // </a>

    // <a href="javascript:;"  onclick="al('Thanks for purchase mobile from us');">  
    //  <figure> 
    //   <img src="mob4.jpeg" alt="" width="260">
    //   <figurecaption>Vivo </figurecaption>
    //  </figure> 
    // </a>
    // </div>

    // </div>



    //  function al(al)
    // {
    //   alert(al)
    // }



    //Exercise 43-48 Task # 3

    // <center>
    // <table >
    //   <tr>

    //  <th>index</th>

    //  <th>Name</th>

    //  <th>Class</th>


    //  </tr>

    //  <tr>
    //    <td>0</td>
    //    <td>John</td>
    //    <td>10</td>
    //    <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
       
    //  </tr>

    //  <tr>
    //    <td>1</td>
    //    <td>Doe</td>
    //    <td>9</td>
    //    <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>

       
    //  </tr>

    //  <tr>
    //    <td>3</td>
    //    <td>Mark</td>
    //    <td>10</td>
    //    <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
       
    //  </tr>
    //  <tr>
    //    <td>4</td>
    //    <td>James</td>
    //    <td>8</td>
    //    <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
       
    //  </tr>
      

    // </table>
    // </center>


    // function DeleteRow()
    // {
    //   var td = event.target.parentNode
    //   var tr = td.parentNode
    //   tr.parentNode.removeChild(tr)
    // }




    //Exercise 43-48 Task # 4

    // <img src="mob3.jpeg" onmouseover="mouse_over()" onmouseout="mouse_in()" id="ms">
    // function mouse_over()
    // {

    //   document.getElementById('ms').src= "mob4.jpeg"

    // }

    // function mouse_in()
    // {

    //   document.getElementById('ms').src= "mob3.jpeg"

    // }




    //Exercise 43-48 Task # 5
     

    // <h4 class="text-center text-dark">Counter</h4>
    // <h1 class="text-primary text-center" id="count">0</h1>

    // <button onclick="counterfn();" class="btn btn-primary">Click To Increase </button>
    // <button onclick="counterfndec();" class="btn btn-danger">Click To Decrease</button>

    //  var counter = 0
    //  function counterfn()
    //  {
    //    counter +=1 

    //     document.getElementById('count').innerHTML = counter
       
    //  }
    //  function counterfndec()
    //  {
    //     counter --

    //     document.getElementById('count').innerHTML = counter
       
    //  }

     

    //Exercise 49-52 Task # 1


    //  <div class="container">
    //   <div class="m-auto col-lg-4">
    //     <form id="submit" >
        
    //     <h1 class="text-center ">Sign Up Form</h1>
    //     <div>
    //       <label>Email</label>
    //       <input type="text" name="" class="form-control" id="txt1">
    //     </div>

    //     <div>
    //       <label>Password</label>
    //       <input type="text" name="" class="form-control" id="txt2">
    //     </div>


    //     <div>
    //       <label>Phone</label>
    //       <input type="text" name="" class="form-control" id="txt3">
    //     </div>

    //   <button class="btn btn-dark mt-3" onclick="showvalue();">SIGN UP</button>
    //   </form>
    //   </div>
      
    // </div>

    // <p id="str1" class="text-primary"></p>
    // <p id="str2"></p>
    // <p id="str3"></p>

    //  function showvalue()

    //  {

    //      var txt1 = document.getElementById('txt1').value
    //      var txt2 = document.getElementById('txt2').value
    //      var txt3 = document.getElementById('txt3').value
       
    //      document.getElementById('str1').innerHTML = txt1
    //      document.getElementById('str2').innerHTML = txt2
    //      document.getElementById('str3').innerHTML = txt3


    //  }

    // function UpdateRow()
    // {
    //   var btnedit =  document.getElementById('edit').value;
    //   var btnedit1 =  document.getElementById('edit1').value;
    //   var btnedit2 =  document.getElementById('edit2').value;
    //   var btnedit3 =  document.getElementById('edit3').value;

    //   var index = document.getElementById('index')
    //   var name = document.getElementById('name')
    //   var classes = document.getElementById('class')

    //   // index.innerHTML = btnedit
    //   name.innerHTML = btnedit1
    //   classes.innerHTML = btnedit2
    //   index.innerHTML = btnedit3
    //   index.textContent = btnedit1
     
    // }




    //Exercise 49-52 Task # 2


    // <div class="container col-lg-6">
    // <form >
    //  <div class="form-group">
    //  <label>Name</label>
    //  <input type="text" name="" class="form-control">
    //  </div>



    //  <span id="dots">...</span><span id="more">
    //  <div class="form-group">
    //  <label>F_Name</label>
    //  <input type="text" name="" class="form-control">
    //  </div>

    //     <div class="form-group">
    //  <label>Phone</label>
    //  <input type="number" name="" class="form-control">
    //  </div>

    //   <div class="form-group">
    //  <label>Class</label>
    //  <input type="date" name="" class="form-control">
    //  </div>

    // </span>
    // </form>

    // <button onclick="myFunction()" id="myBtn" class="btn btn-primary">Read more</button>
    // </div>



    // function myFunction()
    //  {
    //   var dots = document.getElementById("dots");
    //   var moreText = document.getElementById("more");
    //   var btnText = document.getElementById("myBtn");

    //   if (dots.style.display === "none") 
    //   {
    //     dots.style.display = "inline";
    //     btnText.innerHTML = "Read more"; 
    //     moreText.style.display = "none";
    //   }
    //   else
    //    {
    //     dots.style.display = "none";
    //     btnText.innerHTML = "Read less"; 
    //     moreText.style.display = "inline";
    //   }
    // }





    //Exercise 49-52 Task # 3



    // <div class="container">
     

    //   <div class="modal" id="myModal">
    //     <div class="modal-dialog">
    //       <div class="modal-content">
          
    //         <div class="modal-header">
    //           <h4 class="modal-title">UPDATE RECORD</h4>
    //           <button type="button" class="close" data-dismiss="modal">&times;</button>
    //         </div>
            
    //         <div class="modal-body">

    //           <div class="form-group">
    //             <label>Index</label>
                
    //             <input type="" name="" class="form-control" id="index">
    //           </div>

    //            <div class="form-group">
    //             <label class="">Name</label>
    //             <input type="" name="" class="form-control" id="name">
    //           </div>

    //            <div class="form-group">
                
    //             <label>Class</label>
    //             <input type="" name="" class="form-control" id="class">
    //           </div>
    //         </div>
            
    //         <div class="modal-footer">
    //           <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>
      
    // </div>


    //  <table class="table table-bordered table-striped col-lg-6 text-center mt-3" id="table">
    //   <tr>

    //   <th>index</th>

    //   <th>Name</th>

    //   <th>Class</th>

     
    //   <td colspan="2" class="text-center font-weight-bold">Action</td>
      
    //   </tr>

    //   <tr>
    //     <td id="kas">0</td>
    //     <td>John</td>
    //     <td>10</td> 
    //     <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
    //     <td> <input type="button"  onclick="UpdateRow(this);" data-toggle="modal" data-target="#myModal" id="edit" value="Edit"></td>

       
    //   </tr>

    //   <tr>
    //     <td>1</td>
    //     <td>Doe</td>
    //     <td>9</td>
    //     <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
    //     <td> <input type="button"  onclick="UpdateRow(this);" data-toggle="modal" data-target="#myModal" id="edit1" value="Edit"></td>


       
    //   </tr>

    //   <tr>
    //     <td>3</td>
    //     <td>Mark</td>
    //     <td>10</td>
    //     <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
    //     <td> <input type="button"  onclick="UpdateRow(this);" data-toggle="modal" data-target="#myModal" id="edit2" value="Edit"></td>

       
    //   </tr>
    //   <tr>
    //     <td>4</td>
    //     <td>James</td>
    //     <td>8</td>
    //     <td> <input type="button" value="Delete" onclick="DeleteRow();"></td>
    //     <td> <input type="button"  onclick="UpdateRow(this);" data-toggle="modal" data-target="#myModal" id="edit3" value="Edit"></td>

       
    //   </tr>
      

    //  </table>


    // function DeleteRow()
    // {
    //   var td = event.target.parentNode
    //   var tr = td.parentNode
    //   tr.parentNode.removeChild(tr)
    // }

    // function UpdateRow(e)
    // {
      
      
        
    // }





    //Exercise 58-67 Task # 1 (i)


    // <div id="main-content" class="content">
    // <p class="render"> First Name : Alex</p>
    // <p class="render" id="lastName">Last Name: Bank</p>
    // <p class="render"> Email : alexbank@example.com</p>
    // <p class="render"> Country : Pakistan </p>
    // <p class="render"> contact : +92 300 1234567</p>
    // </div>

    // <p id="show"></p>
     
    // var main_content =  document.getElementById('main-content')
    // var render = document.getElementsByClassName('render')


    //Exercise 58-67 Task # 1 (ii)

    // console.log(main_content.parentElement.childNodes)


    //Exercise 58-67 Task # 1 (iii)

    // document.getElementById('show').innerHTML = render


    //Exercise 58-67 Task # 1 (iv)

    // document.getElementById('show').innerHTML = render




    //Exercise 58-67 Task # 2 (i)

    // <div id="main-content" class="content">
    // <p class="render"> First Name : Alex</p>
    // <p class="render" id="lastName">Last Name: Bank</p>
    // <p class="render"> Email : alexbank@example.com</p>
    // <p class="render"> Country : Pakistan </p>
    // <p class="render"> contact : +92 300 1234567</p>
    // </div>
    // </div>

    // var  form_content= document.getElementById('form-content')
    // document.write(form_content.nodeType)



    //Exercise 58-67 Task # 2 (ii)

    // <div id="main-content" class="content">
    // <p class="render"> First Name : Alex</p>
    // <p class="render" id="lastName">Last Name: Bank</p>
    // <p class="render"> Email : alexbank@example.com</p>
    // <p class="render"> Country : Pakistan </p>
    // <p class="render"> contact : +92 300 1234567</p>
    // </div>
    // </div>

    //var  last_name = document.getElementById('last-name')

    // document.write(last_name.childNodes)
    // console.log(last_name.childNodes)



    //Exercise 58-67 Task # 2 (iii)

    // <p>Click the button to replace the first item in the the list.</p>

    // <button onclick="myFunction()">Try it</button>
    // <div id="main-content" class="content">
    // <p class="render"> First Name : Alex</p>
    // <p class="render" id="lastName">Last Name: Bank</p>
    // <p class="render"> Email : alexbank@example.com</p>
    // <p class="render"> Country : Pakistan </p>
    // <p class="render"> contact : +92 300 1234567</p>
    // </div>
    // </div>

    // function myFunction() 
    // {

    //   var item = document.getElementById('last-name').childNodes[0]
    //   var textnode = document.createTextNode("hello world");
    //   item.replaceChild(textnode, item.childNodes[0]);

    // }



    //Exercise 58-67 Task # 2 (iv)

    // <div id="main-content" class="content">
    // <p class="render"> First Name : Alex</p>
    // <p class="render" id="lastName">Last Name: Bank</p>
    // <p class="render"> Email : alexbank@example.com</p>
    // <p class="render"> Country : Pakistan </p>
    // <p class="render"> contact : +92 300 1234567</p>
    // </div>
    // </div>

    // var main_content = document.getElementsByClassName('main_content')

    // console.log(main_content.firstChild)
    //console.log(main_content.lastChild)





    //Exercise 58-67 Task # 2 (v)


    // <button onclick="prev_sibling()">Try it</button>

    // <p id="demo"></p>


    // function prev_sibling()
    //{
    //   var x = document.getElementById("last_name").previousSibling.innerHTML; 
    //   document.getElementById("demo").innerHTML = x;
    // }



    //Exercise 58-67 Task # 2 (v) part ii

    // <button onclick="nxtsibling()">Try it</button>

    // <p id="demo"></p>

    // function nxtsibling()
    // {
    //   var x = document.getElementById("last_name").nextSibling.innerHTML; 
    //   document.getElementById("demo").innerHTML = x;
    // }




    //Exercise 58-67 Task # 2 (vi)

    // <button onclick="myFunction()">Try it</button>

    // <p id="demo"></p>

    // <script>
    // function myFunction()
    // {
    //   var x = document.getElementById("email").parentNode.nodeName;
    //   document.getElementById("demo").innerHTML = x;
    // }

    // var menu = document.getElementById('email');

    // var children = menu.children;
    // console.log(children);





     //Exercise # 53-58



    //      <div class="modal fade" role="dialog" id="imgmodal">
    //     <div class="modal-dialog">
    //         <div class="modal-content"></div>          
    //          <img class="img-fluid" src="" id="show-img">         
    //         </div>
    //     </div>
    // </div>


    // <div class="m-auto container pt-3">
    //  <button type="button" onclick="zoomin()" class="btn btn-primary">+</button>
    //  <button type="button" onclick="zoomout()" class="btn btn-warning">-</button>
    //  </div>

    // <div class="container row col-lg-9">

    //  <div id="navbar" class="m-auto pt-3 ">

     
     

    //  <div class="main">
    //  <img id="map" src="mob2.jpeg" class="pt-3">

    //  </div>

    // </div>

    //         $("img").click(function()
    //         {
    //            var img=$(this).attr('src');
    //              $("#show-img").attr('src',img);
    //              $("#imgmodal").modal('show');
    //         });


    //         function zoomin()
    //         {

    //         var myImg = document.getElementById("map");
    //         var currWidth = myImg.clientWidth;
    //         if(currWidth == 1)
    //         {
    //          return false;
    //         }

    //         else
    //         {
    //             myImg.style.width = (currWidth + 10) + "px";
    //         } 
    //     }

    //     function zoomout()
    //     {
    //         var myImg = document.getElementById("map");
    //         var currWidth = myImg.clientWidth;
    //         if(currWidth == 100) 

    //         {
    //              return false;
    //         }

    //       else
    //      {
    //             myImg.style.width = (currWidth - 10) + "px";
    //         }
    //     }
           






    </script>

    </body>
    </html>












































