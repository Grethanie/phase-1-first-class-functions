function returnsAnAnonymousFunction() {
  return () => {
    console.log("hi");
  };
}

function returnsANamedFunction() {
  return log;
}

function receivesAFunction(callback) {
  callback();
}

function log(string) {
  return console.log(string);
}
