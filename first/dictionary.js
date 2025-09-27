function Dictionary() {
 this.datastore = new Array();
}

function add(key, value) {
 this.datastore[key] = value;
}

function find(key) {
 return this.datastore[key];
}

function remove(key) {
 delete this.datastore[key];
}

function showAll() {
 for each (var key in Object.keys(this.datastore)) {
 print(key + " -> " + this.datastore[key]);
 }
}

load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();


function count() {
 var n = 0;
 for each (var key in Object.keys(this.datastore)) {
 ++n;
 }
 return n;
}



var nums() = new Array();
nums[0] = 1;
nums[1] = 2;
print(nums.length); // displays 2

var pbook = new Array();
pbook["David"] = 1;
pbook["Jennifer"] = 2;
print(pbook.length); // displays 0

function clear() {
 for each (var key in Object.keys(this.datastore)) {
 delete this.datastore[key];
 }
}

function showAll() {
 for each (var key in Object.keys(this.datastore).sort()) {
 print(key + " -> " + this.datastore[key]);
 }
}
