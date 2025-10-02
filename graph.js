function Graph(v) {
 this.vertices = v;
 this.edges = 0;
 this.adj = [];
 for (var i = 0; i < this.vertices; ++i) {
 this.adj[i] = [];
 this.adj[i].push("");
 }
 this.addEdge = addEdge;
 this.toString = toString;
}

function addEdge(v,w) {
 this.adj[v].push(w);
 this.adj[w].push(v);
 this.edges++;
}

function showGraph() {
 for (var i = 0; i < this.vertices; ++i) {
 putstr(i + " -> ");
 for (var j = 0; j < this.vertices; ++j) {
 if (this.adj[i][j] != undefined)
 putstr(this.adj[i][j] + ' ');
 }
 print();
 }
}

load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();


this.marked = [];
for (var i = 0; i < this.vertices; ++i) {
 this.marked[i] = false;
}

function dfs(v) {
 this.marked[v] = true;
 // if statement for print is not required
 if (this.adj[v] != undefined)
 print("Visited vertex: " + v);
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {
 this.dfs(w);
 }
 }
}


function Graph(v) {
 this.vertices = v;
 this.edges = 0;
 this.adj = [];
 for (var i = 0; i < this.vertices; ++i) {
 this.adj[i] = [];
 this.adj[i].push("");
 }
 this.addEdge = addEdge;
 this.showGraph = showGraph;
 this.dfs = dfs;
 this.marked = [];
 for (var i = 0; i < this.vertices; ++i) {
 this.marked[i] = false;
 }
}

function addEdge(v,w) {
 this.adj[v].push(w);
 this.adj[w].push(v);
 this.edges++;
}

function showGraph() {
 for (var i = 0; i < this.vertices; ++i) {
 putstr(i + " -> ");
 for (var j = 0; j
 < this.vertices; ++j) {
 if (this.adj[i][j] != undefined)
 putstr(this.adj[i][j] + ' ');
 }
 print();
 }
}


function dfs(v) {
 this.marked[v] = true;
 if (this.adj[v] != undefined) {
 print("Visited vertex: " + v);
 }
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {
 this.dfs(w);
 }
 }
}

load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);


function bfs(s) {
 var queue = [];
 this.marked[s] = true;
 queue.push(s); // add to back of queue
 while (queue.length > 0) {
 var v = queue.shift(); // remove from front of queue
 if (v == undefined) {
 print("Visited vertex: " + v);
 }
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {

    this.edgeTo[w] = v;
 this.marked[w] = true;
 queue.push(w);
 }
 }
 }
}



load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0);

// add this to Graph class
this.edgeTo = [];
// bfs function
function bfs(s) {
 var queue = [];
 this.marked[s] = true;
 queue.push(s); // add to back of queue
 while (queue.length > 0) {
 var v = queue.shift(); // remove from front of queue
 if (v == undefined) {
 print("Visited vertex: " + v);
 }
 for each (var w in this.adj[v]) {
 if (!this.marked[w]) {
 this.edgeTo[w] = v;
 this.marked[w] = true;
 queue.push(w);
 }
 }
 }
}

unction pathTo(v) {
 var source = 0;
 if (!this.hasPathTo(v)) {
 return undefined;
 }
 var path = [];

 for (var i = v; i != source; i = this.edgeTo[i]) {
 path.push(i);
 }
 path.push(s);
 return path;
}
function hasPathTo(v) {
 return this.marked[v];
}

load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
 if (paths.length > 1) {
 putstr(paths.pop() + '-');
 }
 else {
 putstr(paths.pop());
 }
}

function topSort() {
 var stack = [];
 var visited = [];
 for (var i = 0; i < this.vertices; i++) {
 visited[i] = false;
 }
 for (var i = 0; i < this.vertices; i++) {
 if (visited[i] == false) {
 this.topSortHelper(i, visited, stack);
 }
 }
 for (var i = 0; i < stack.length; i++) {
 if (stack[i] != undefined && stack[i] != false) {
 print(this.vertexList[stack[i]]);
 }
 }
}

function topSortHelper(v, visited, stack) {
 visited[v] = true;
 for each (var w in this.adj[v]) {
 if (!visited[w]) {
 this.topSortHelper(visited[w], visited, stack);
 }
 }
 stack.push(v);
}