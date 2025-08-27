// Numbers bigger than 2^53 - 1
var bigNumber = 1234567890123456789012345678901234567890n;
function multiplyBigNumbers(a, b) {
    return a * b;
}
console.log(multiplyBigNumbers(bigNumber, 2n));
var isOnline = true;
function checkStatus(status) {
    return status ? "User is online" : "User is offline";
}
console.log(checkStatus(isOnline));
console.log(checkStatus(false));
