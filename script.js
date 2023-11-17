function isSameType(value1, value2) {
  // check if both values are NaN
  if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
    return true;
  }

  // check if both values are of the same type after parsing them
  return typeof (value1 === "string" ? parseFloat(value1) : value1) === typeof (value2 === "string" ? parseFloat(value2) : value2);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
