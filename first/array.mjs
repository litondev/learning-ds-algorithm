var numbers = [];
print(numbers.length);

var numbers = [1,2,3,4,5];
print(numbers.length);

var numbers = new Array();
print(numbers.length);

var numbers = new Array(1,2,3,4,5);
print(numbers.length);

var numbers = new Array(10);
print(numbers.length);

var objects = [1, "Joe", true, null];

var numbers = 3;
var arr = [7,4,1776];
print(Array.isArray(number)); // displays false
print(Array.isArray(arr)); // 

var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
 numbers[4];
print(sum); // displays 15

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
 sum += numbers[i];
}
print(sum); // displays 53

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
 print("word " + i + ": " + words[i]);
}

var nums = [];
for (var i = 0; i < 10; ++i) {
 nums[i] = i+1;
}
var samenums = nums;


var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]); // displays 400

function copy(arr1, arr2) {
 for (var i = 0; i < arr1.length; ++i) {
 arr2[i] = arr1[i];
 }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}
var samenums = [];

copy(nums, samenums);
nums[0] = 400;
print(samenums[0]); // displays 1

var nums = [1,2,3,4,5];
print(nums);

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
 print("Found " + name + " at position " + position);
}
else {
 print(name + " not found in array.");
}


var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike",
 "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
print("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
print("Last found " + name + " at position " + lastPos);


var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cis.concat(dmp);
print(itDiv);
itDiv = dmp.concat(cisDept);
print(itDiv);

var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
print(dmpDept); // Raymond,Cynthia,Danny
print(cisDept); // Mike,Clayton,Terrill,Jennifer

var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums.push(6);
print(nums); // 1,2,3,4,5,6

var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums[nums.length] = 6;
print(nums); // 1,2,3,4,5,6

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
 nums[i] = nums[i-1];
}
nums[0] = newnum;
print(nums); // 1,2,3,4,5

var nums = [2,3,4,5];
print(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
print(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,2);
print(nums); // 1,2,3,4,5

var nums = [1,2,3,4,5,9];
nums.pop();
print(nums); // 1,2,3,4,5

var nums = [1,2,3,4,5,9];
nums.pop();
print(nums); // 1,2,3,4,5

var nums = [9,1,2,3,4,5];
nums.shift();
print(nums); // 1,2,3,4,5

var nums = [6,1,2,3,4,5];
var first = nums.shift(); // first gets the value 9
nums.push(first);
print(nums); // 1,2,3,4,5,6

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums); // 1,2,3,4,5,6,7,8,9

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
print(nums);

var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
print(nums); // 1,2,3,4,5

var nums = [1,2,3,4,5];
nums.reverse();
print(nums); // 5,4,3,2,1

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
nums.sort();
print(nums); // Bryan,Clayton,Cynthia,David,Mike,Raymond

var nums = [3,1,2,100,4,200];
nums.sort();
print(nums); // 1,100,2,200,3,4

function compare(num1, num2) {
 return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
print(nums); // 1,2,3,4,100,200

function square(num) {
 print(num, num * num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);


function isEven(num) {
 return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
 print("all numbers are even");
}
else {
 print("not all numbers are even");
}


function isEven(num) {
 return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
 print("some numbers are even");
}
else {
 print("no numbers are even");
}
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
 print("some numbers are even");
}
else {
 print("no numbers are even");
}

function add(runningTotal, currentValue) {
 return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
print(sum); // displays 55

function concat(accumulatedString, item) {
 return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence); // displays "the quick brown fox"

concat(accumulatedString, item) {
 return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduceRight(concat);
print(sentence); // displays "fox brown quick the"

function curve(grade) {
 return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades); // 82, 70, 86, 97, 88

function first(word) {
 return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
print(acronym.join("")); // displays "fyi"

function isEven(num) {
 return num % 2 == 0;
}
function isOdd(num) {
 return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
 nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);


function passing(num) {
 return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
 grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
print("All grades: ");
print(grades);
print("Passing grades: ");
print(passGrades);


function afterc(str) {
 if (str.indexOf("cie") > -1) {
 return true;
 }
 return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled); // displays recieve,percieve,concieve


var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
 twod[i] = [];
}


Array.matrix = function(numrows, numcols, initial) {
 var arr = [];
 for (var i = 0; i < numrows; ++i) {
 var columns = [];
 for (var j = 0; j < numcols; ++j) {
 columns[j] = initial;
 }
 arr[i] = columns;
 }
 return arr;
}

var nums = Array.matrix(5,5,0);
print(nums[1][1]); // displays 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]); // display "Joe"

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
print(grades[2][2]); // displays 89

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
 for (var col = 0; col < grades[row].length; ++col) {
 total += grades[row][col];
    }
 average = total / grades[row].length;
 print("Student " + parseInt(row+1) + " average: " +
 average.toFixed(2));
 total = 0;
 average = 0.0;
}


var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
 for (var row = 0; row < grades[col].length; ++row) {
 total += grades[row][col];
 }
 average = total / grades[col].length;
 print("Test " + parseInt(col+1) + " average: " +
 average.toFixed(2));
 total = 0;
 average = 0.0;
}


var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
 for (var col = 0; col < grades[row].length; ++col) {
 total += grades[row][col];
 }
 average = total / grades[row].length;
 print("Student " + parseInt(row+1) + " average: " +
 average.toFixed(2));
 total = 0;
 average = 0.0;
}


function Point(x,y) {
 this.x = x;
 this.y = y;
}
function displayPts(arr) {
 for (var i = 0; i < arr.length; ++i) {
    print(arr[i].x + ", " + arr[i].y);
 }
}
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
 print("Point " + parseInt(i+1) + ": " + points[i].x + ", " +
 points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5);
print("After push: ");
displayPts(points);
points.shift();
print("After shift: ");
displayPts(points);


function weekTemps() {
 this.dataStore = [];
 this.add = add;
 this.average = average;
}
function add(temp) {
 this.dataStore.push(temp);
}
function average() {
 var total = 0;
 for (var i = 0; i < this.dataStore.length; ++i) {
 total += this.dataStore[i];
 }
 return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // displays 54.875