function increaseBalance(x, y) {
  x += y;
  return x;
}


function decreaseBalance(x, y) {
x -= y;
return x;
}


function divideBalanceByAccounts(x, y) {
  x /= y ;
  return x;
  }

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

function increment(x) {
  x++;
  return x;
}

console.log(increment(500));

function decrement(y) {
  y--;
  return y;
}

console.log(decrement(200)); 