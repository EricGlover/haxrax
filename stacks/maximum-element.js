//STATUS : INCOMPLETE

function Stack(dataType) {
  _size = 0;
  _storage = dataType === [] ? [] : {};
  let size = function() {
    return _size;
  };
  let storage = function() {
    return _storage;
  };
  let push = function(...data) {
    data.forEach(element => (_storage[++_size] = element));
  };
  let pop = function() {
    if (!_size) return null;
    const size = _size,
      popped = _storage[_size];
    delete _storage[_size];
    _size--;
    return popped;
  };
  let isEmpty = function() {
    return _size === 0 ? true : false;
  };
  let top = function() {
    return _storage[_size];
  };
  let getMax = function() {
    let max = Number.MIN_VALUE;
    for (let key in _storage) {
      max = _storage[key] > max ? _storage[key] : max;
    }
    return max;
  };

  return {
    size,
    storage,
    push,
    pop,
    isEmpty,
    getMax,
    top
  };
}
function processData(input) {
  let commands = input.split("\n");
  let n = commands.slice(0, 1)[0];
  const stack = new Stack();
  commands.slice(1).forEach((query, index) => {
    let args = query.split(" ");
    switch (Number(args[0])) {
      case 1:
        stack.push(...args.slice(1)); //flatten this later
        break;
      case 2:
        stack.pop();
        break;
      case 3:
        console.log(stack.top());
        break;
      default:
        throw new Error("switch fucked up");
    }
  });
}
let test = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`;
(() => {
  processData(test);
})();
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
