let strArray1 = ["h", "e", "l", "l", "o"];
let strArray2 = ["H", "a", "n", "n", "a", "h"];
function reverseStringUsingDestructuring(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        ;
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
function reverseStringUsingTempVariable(s) {
    let length = s.length;
    let left = 0, right = length - 1;
    let tempStr;
    while (left < right) {
        tempStr = s[left];
        s[left] = s[right];
        s[right] = tempStr;
        left++;
        right--;
    }
}
let strArrayForDestructuring = [...strArray1];
console.time("reverseStringUsingDestructuring");
reverseStringUsingDestructuring(strArrayForDestructuring);
console.timeEnd("reverseStringUsingDestructuring");
let strArrayForTempVariable = [...strArray1];
console.time("reverseStringUsingTempVariable");
reverseStringUsingTempVariable(strArrayForTempVariable);
console.timeEnd("reverseStringUsingTempVariable");
console.log(strArrayForDestructuring);
console.log(strArrayForTempVariable);
