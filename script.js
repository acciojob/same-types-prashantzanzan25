function isSameType(value1, value2) {
 // check if both values are NaN using the Number.isNaN function
 if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
 }

 // check if both values are of the same type using the typeof operator
 return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
cy.on("uncaught:exception", (err) => {
 if (err.message.includes("The following error originated from your application code")) {
    return false;
 }
});