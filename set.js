function Set() {
 this.dataStore = [];
 this.add = add;
 this.remove = remove;
 this.size = size;
 this.union = union;
 this.intersect = intersect;
 this.subset = subset;
 this.difference = difference;
 this.show = show;
}

function add(data) {
 if (this.dataStore.indexOf(data) < 0) {
 this.dataStore.push(data);
 return true;
 }
 else {
 return false;
 }
}

function remove(data) {
 var pos = this.dataStore.indexOf(data);
 if (pos > -1) {
 this.dataStore.splice(pos,1);
 return true;
 }
 else {
 return false;
 }
}


function show() {
 return this.dataStore;
}

load("set.js");
var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
 print("Mike added")
}
else {
 print("Can't add Mike, must already be in set");
}
print(names.show());
var removed = "Mike";
if (names.remove(removed)) {
 print(removed + " removed.");
}
else {
 print(removed + " not removed.");
 }
names.add("Clayton");
print(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
 print(removed + " removed.");
}
else {
 print(removed + " not removed.");
}

function contains(data) {
 if (this.dataStore.indexOf(data) > -1) {
 return true;
 }
 else {
 return false;
 }
}

function union(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
 tempSet.add(this.dataStore[i]);
 }
 for (var i = 0; i < set.dataStore.length; ++i) {
 if (!tempSet.contains(set.dataStore[i])) {
 tempSet.dataStore.push(set.dataStore[i])
 }
 }
 return tempSet;
}

load("set.js");
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
print(it.show());
//displays Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan


function intersect(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
 if (set.contains(this.dataStore[i])) {
 tempSet.add(this.dataStore[i]);
 }
 }
 return tempSet;
}
load("set.js");
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");

var inter = cis.intersect(dmp);
print(inter.show()); // displays Raymond


function subset(set) {
 if (this.size() > set.size()) {
 return false;
 }
 else {
 for each (var member in this.dataStore) {
 if (!set.contains(member)) {
 return false;
 }
 }
 }
 return true;
}

function size() {
 return this.dataStore.length;
}

load("set.js");
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");


var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
 print("DMP is a subset of IT.");
}
else {
 print("DMP is not a subset of IT.");
}


function difference(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
 if (!set.contains(this.dataStore[i])) {
 tempSet.add(this.dataStore[i]);
 }
 }
 return tempSet;
}

load("set.js");
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
print("[" + cis.show() + "] difference [" + it.show()
 + "] -> [" + diff.show() + "]");
