// Numbers bigger than 2^53 - 1
let bigNumber: bigint = 1234567890123456789012345678901234567890n;

function multiplyBigNumbers(a: bigint, b: bigint): bigint {
    return a * b;
}

console.log(multiplyBigNumbers(bigNumber, 2n));
 

let isOnline: boolean = true;

function checkStatus(status: boolean): string {
    return status ? "User is online" : "User is offline";
}

console.log(checkStatus(isOnline));
console.log(checkStatus(false));
