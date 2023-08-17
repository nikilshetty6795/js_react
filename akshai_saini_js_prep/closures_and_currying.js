console.log("Closures");

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}

x();
