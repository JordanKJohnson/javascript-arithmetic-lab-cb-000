function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function inc(a,b){
  for (var i = 0; i < b; i++){
    a*=a;
  }
  return a+1;
}

function dec(a,b){
  for (var i = 0; i < b; i++){
    a/=a;
  }
  return a-1;
}

function makeInt(n){
  return parseInt(n,10);
}

function preserveDecimal(n){
  return parseFloat(n);
}
