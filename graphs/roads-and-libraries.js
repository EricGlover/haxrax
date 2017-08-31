//ROADS AND LIBRARIES
//THOUGHTS: after some consideration I'm going to attempt the problem in a similar manner to how I 'solved' journey to the moon
//though I would like to try some fancier graph data structures sometime
//I considered using a hash map lookup table as well...idk about that
/*
input
2
3 3 2 1
1 2
3 1
2 3
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6

output
4
12
*/
/*alt structure , maybe do this ...
graphs = []
graph = tree: []
tree = {
  root
}
node(city) = {
  id: cityName
  links:
}

//ATTEMPTING depth-first search of graph using a stack || recursion
//https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-graphs-and-their-data-structures-section-2/

dfs(node current) {
 mark current as visited;
 visit all of current's unvisited neighbors by calling dfs(neighbor)
}
*/
//wraps our Nodes so we can do multiple searches
//fix this later
// function StackNode(payload) {
//   return {
//     payload,
//     _visited: false
//   };
//   // this.payload = payload;
//   // this._visited = false;
// }
//Nodes are our cities here
function Node({ libCost = 1, roadCost = 1, name = "ERROR" }) {
  //[list of nodes] neighbors
  this._neighbors = [];
  //[data]
  this._data = {
    libCost,
    roadCost,
    name
  };
}
Node.prototype.addEdge = function(neighbor) {
  //should make neighbors a set or something
  this._neighbors.push(neighbor);
};
//1
//2, 3
let dfsStack = (start, name, listOfNodes) => {
  //set all visited in all nodes to false
  listOfNodes.forEach(node => (node._visited = false));
  //make a stack and plop our starting point in
  const stack = new Stack();
  stack.push(start);
  while (!stack.isEmpty()) {
    let top = stack.top();
    stack.pop();
    if (!top._visited) {
      // console.log("In dfsStack, top = ", top);
      //check for termination condition (have we reached the node we want to?)
      if (top._data.name === name) return top;
      top._visited = true;
      //add all of top's neighbors to the stack.
      stack.push(...top._neighbors);
    }
  }
  return null;
};
//Stack implementation
//consider changing our stack to handle searching properties on it's own?
function Stack() {
  this._size = 0;
  this._storage = [];
}
Stack.prototype = {
  get size() {
    return this._size;
  },
  get storage() {
    return this._storage;
  }
};
Stack.prototype.push = function(...data) {
  data.forEach(element => {
    this._storage.push(element);
    this._size++;
  });
};
Stack.prototype.pop = function() {
  if (!this._size) return null;
  this._size--;
  return this._storage.pop();
};
Stack.prototype.isEmpty = function() {
  return this._size === 0 ? true : false;
};
Stack.prototype.top = function() {
  if (this._size <= 0) return null;
  return this._storage[this._size - 1];
};

/* BUSINESS LOGIC */
const runQuery = query => {
  //make some cities
  let cities = new Array(query.numCities).fill(undefined);
  cities = cities.map(
    (ele, idx) =>
      new Node({
        name: idx + 1,
        libcost: query.libCost,
        roadCost: query.roadCost
      })
  );
  console.log("cities = ", cities);
  //add their edges
  query.edges.forEach(edge => {
    let city1 = cities[edge[0] - 1],
      city2 = cities[edge[1] - 1];
    city1.addEdge(city2);
    city2.addEdge(city1);
  });
  console.log("cities = ", cities);
  console.log("city[0] edges = ", cities[0]._neighbors);
  console.log(
    "dfsStack search for 1, gave me back = ",
    dfsStack(cities[0], 1, cities)
  );
  console.log(
    "dfsStack search for 2 gave me back = ",
    dfsStack(cities[0], 2, cities)
  );
  console.log(
    "dfsStack search for 3 gave me back = ",
    dfsStack(cities[0], 3, cities)
  );

  //TESTING UNCONNECTED TREES
  console.log(
    "dfsStack search for 6 gave me back = ",
    dfsStack(cities[0], 6, cities)
  );

  //testing no cycles
  console.log(
    "dfsStack looking for 7, gave me back = ",
    dfsStack(cities[0], 7, cities)
  );
};

//I/O STUFF

/*format of input
q                     queries (separate cases, each case has a section: n m lib road \n roads....\n)
n m clib croad        number of cities, # of roads, cost to build a library, cost to repair a road
road                  describes the road, (u, v) (a bi-directional edge )
*/
//takes an array of lines
//[strings] => queryObj
const populateQuery = commands => {
  const firstLine = commands[0].trim().split(" ");
  const numCities = Number(firstLine[0]);
  const numRoads = Number(firstLine[1]);
  const costOfLib = Number(firstLine[2]);
  const costOfRoad = Number(firstLine[3]);
  const remainingCommands = commands.slice(1 + numRoads);
  const edges = commands.slice(1, 1 + numRoads).map((el, idx, arr) => {
    let line = el.trim().split(" ");
    return [/**/ Number(line[0]), Number(line[1]) /**/];
  });
  console.log("result = ", {
    numCities,
    numRoads,
    costOfLib,
    costOfRoad,
    edges,
    remainingCommands
  });
  return {
    numCities,
    numRoads,
    costOfLib,
    costOfRoad,
    edges,
    remainingCommands
  };
};
let parseInput = input => {
  //grab q, break input into [strings]
  let temp = input.trim().split("\n");
  console.log("temp = ", temp);
  let queries = new Array(Number(temp[0])).fill(undefined);
  temp = temp.slice(1); //ignore q line
  //now populate your queries
  let remainingCommands = temp;
  queries = queries.map(() => {
    let query = populateQuery(remainingCommands);
    remainingCommands = query.remainingCommands;
    return query;
  });
  // console.log("queries = ", queries);
  return queries;
};
//testing I/O == looks good
/*
parseInput(`1
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6`);
parseInput(
  `2
3 3 2 1
1 2
3 1
2 3
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6`
);
*/

const test = () => {
  /* 3 3 2 1
  1 2
  3 1
  2 3*/
  let cities = new Array(3);
  let libCost = 2;
  let roadCost = 1;
  cities[0] = new Node({ name: 1 });
  cities[1] = new Node({ name: 2 });
  cities[2] = new Node({ name: 3 });
  //
  cities[0].addEdge(cities[1]);
  cities[1].addEdge(cities[0]);
  //
  cities[2].addEdge(cities[0]);
  cities[0].addEdge(cities[2]);
  //
  cities[1].addEdge(cities[2]);
  cities[2].addEdge(cities[1]);
  // console.log("cities = ", cities);
  // debugger;
  // //testing searching
  // console.log(
  //   "dfsStack search for 1, gave me back = ",
  //   dfsStack(cities[0], 1, cities)
  // );
  // console.log(
  //   "dfsStack search for 2 gave me back = ",
  //   dfsStack(cities[0], 2, cities)
  // );
  // console.log(
  //   "dfsStack search for 3 gave me back = ",
  //   dfsStack(cities[0], 3, cities)
  // );
  //
  // //testing no cycles
  // console.log(
  //   "dfsStack looking for 7, gave me back = ",
  //   dfsStack(cities[0], 7, cities)
  // );

  //test query 2
  /*1
  6 6 2 5
  1 3
  3 4
  2 4
  1 2
  2 3
  5 6*/
  //
  console.log("RUNNING QUERY TEST #2");
  let t2 = `1
  6 6 2 5
  1 3
  3 4
  2 4
  1 2
  2 3
  5 6`;
  let queries = parseInput(t2);
  queries.forEach(query => runQuery(query));
};
test();
