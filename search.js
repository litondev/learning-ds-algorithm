function seqSearch(arr, data) {
 for (var i = 0; i < arr.length; ++i) {
 if (arr[i] == data) {
 return true;
 }
 }
 return false;
}


function dispArr(arr) {
 for (var i = 0; i < arr.length; ++i) {
 putstr(arr[i] + " ");
 if (i % 10 == 9) {
 putstr("\n");
 }
 }
 if (i % 10 != 0) {
 putstr("\n");
 }
}


var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
putstr("Enter a number to search for: ");
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
 print(num + " is in the array.");
}
else {
 print(num + " is not in the array.");
}
print();
dispArr(nums);

unction seqSearch(arr, data) {
 for (var i = 0; i < arr.length; ++i) {
 if (arr[i] == data) {
 return i;
 }
 }
 return -1;
}


var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
putstr("Enter a number to search for: ");
var num = readline();
print();
var position = seqSearch(nums, num);
if (position > -1) {
 print(num + " is in the array at position " + position);
}
else {
 print(num + " is not in the array.");
}
print();
dispArr(nums);


function findMin(arr) {
 var min = arr[0];
 for (var i = 1; i < arr.length; ++i) {
 if (arr[i] < min) {
 min = arr[i];
 }
 }
 return min;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print("The minimum value is: " + minValue);


function findMax(arr) {
 var max = arr[0];
 for (var i = 1; i < arr.length; ++i) {
 if (arr[i] > max) {
 max = arr[i];
 }
 }
 return max;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print();
print("The minimum value is: " + minValue);
var maxValue = findMax(nums);
print();
print("The maximum value is: " + maxValue);

function seqSearch(arr, data) {
 for (var i = 0; i < arr.length; ++i) {
 if (arr[i] == data) {
 if (i > 0) {
 swap(arr,i,i-1);
 }
 return true;
 }
 }
 return false;
}

function swap(arr, index, index1) {
 temp = arr[index];
 arr[index] = arr[index1];
 arr[index1] = temp;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
print(numbers);
for (var i = 1; i <= 3; i++) {
 seqSearch(numbers, 4);
 print(numbers);
}

function seqSearch(arr, data) {
 for (var i = 0; i < arr.length; ++i) {
 if (arr[i] == data && i > (arr.length * 0.2)) {
 swap(arr,i,0);
 return true;
 }
 else if (arr[i] == data) {
 return true;
 }
 }
 return false;
}

var nums = [];
for (var i = 0; i < 10; ++i) {
 nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
print();
putstr("Enter a value to search for: ");
var val = parseInt(readline());
if (seqSearch(nums, val)) {
 print("Found element: ");


 print();
 dispArr(nums);
}
else {
 print(val + " is not in array.");
}


function binSearch(arr, data) {
 var upperBound = arr.length-1;
 var lowerBound = 0;
 while (lowerBound <= upperBound) {
 var mid = Math.floor((upperBound + lowerBound) / 2);
 if (arr[mid] < data) {
 lowerBound = mid + 1;
 }
 else if (arr[mid] > data) {
 upperBound = mid - 1;
 }
 else {
 return mid;
 }
 }
 return -1;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);

print();
putstr("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = binSearch(nums, val);
if (retVal >= 0) {
 print("Found " + val + " at position " + retVal);
}
else {
 print(val + " is not in array.");
}


function binSearch(arr, data) {
 var upperBound = arr.length-1;
 var lowerBound = 0;
 while (lowerBound <= upperBound) {
 var mid = Math.floor((upperBound + lowerBound) / 2);
 print("Current midpoint: " + mid);
 if (arr[mid] < data) {
 lowerBound = mid + 1;
 }
 else if (arr[mid] > data) {
 upperBound = mid - 1;
 }
 else {
 return mid;
 }
 }
 return -1;
}

on count(arr, data) {
 var count = 0;
 var position = binSearch(arr, data);
 if (position > -1) {
 ++count;
 for (var i = position-1; i > 0; --i) {
 if (arr[i] == data) {

    ++count;
 }
 else {
 break;
 }
 }
 for (var i = position+1; i < arr.length; ++i) {
 if (arr[i] == data) {
 ++count;
 }
 else {
 break;
 }
 }
 }
 return count;
}


var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
putstr("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("Found " + retVal + " occurrences of " + val + ".");


function seqSearch(arr, data) {
 for (var i = 0; i < arr.length; ++i) {
 if (arr[i] == data) {
 return i;
 }
 }
 return -1;
}
var words = read("words.txt").split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
 print("Found " + word + " at position " + position + ".");
 print("Sequential search took " + elapsed + " milliseconds.");
}
else {
 print(word + " is not in the file.");
}


tion binSearch(arr, data) {
 var upperBound = arr.length-1;
 var lowerBound = 0;
 while (lowerBound <= upperBound) {

    var mid = Math.floor((upperBound + lowerBound) / 2);
 if (arr[mid] < data) {
 lowerBound = mid + 1;
 }
 else if (arr[mid] > data) {
 upperBound = mid - 1;
 }
 else {
 return mid;
 }
 }
 return -1;
}

function insertionsort(arr) {
 var temp, inner;
 for (var outer = 1; outer <= arr.length-1; ++outer) {
 temp = arr[outer];
 inner = outer;
 while (inner > 0 && (arr[inner-1] >= temp)) {
 arr[inner] = arr[inner-1];
 --inner;
 }
 arr[inner] = temp;
 }
}
var words = read("words.txt").split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
 print("Found " + word + " at position " + position + ".");
 print("Binary search took " + elapsed + " milliseconds.");
}
else {
 print(word + " is not in the file.");
}